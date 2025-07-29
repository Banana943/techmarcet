import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { t } from '../../utils/translations';
import { 
  searchProducts, 
  filterByCategory, 
  sortProducts, 
  clearFilters 
} from '../../store/slices/productsSlice';
import { addToCart } from '../../store/slices/cartSlice';
import { addToFavorites, removeFromFavorites } from '../../store/slices/favoritesSlice';
import { 
  FaSearch, 
  FaFilter, 
  FaSort, 
  FaShoppingCart, 
  FaHeart, 
  FaStar 
} from 'react-icons/fa';
import './Products.css';

const Products = () => {
  const dispatch = useDispatch();
  const { language } = useSelector(state => state.app);
  const { filteredProducts, selectedCategory, sortBy, sortOrder } = useSelector(state => state.products);
  const favoritesItems = useSelector(state => state.favorites.items);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    'all',
    'Smartphones',
    'Laptops', 
    'Tablets',
    'Gaming',
    'Cameras',
    'Audio',
    'Wearables',
    'Accessories'
  ];

  const sortOptions = [
    { value: 'name', label: language === 'ru' ? 'По названию' : 'By Name' },
    { value: 'price', label: language === 'ru' ? 'По цене' : 'By Price' },
    { value: 'rating', label: language === 'ru' ? 'По рейтингу' : 'By Rating' }
  ];

  // Обработчики
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    dispatch(searchProducts(query));
  };

  const handleCategoryChange = (category) => {
    dispatch(filterByCategory(category));
  };

  const handleSort = (sortBy) => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    dispatch(sortProducts({ sortBy, sortOrder: newOrder }));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
    setSearchQuery('');
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, quantity: 1 }));
  };

  const handleToggleFavorite = (product) => {
    const isInFavorites = favoritesItems.some(item => item.id === product.id);
    if (isInFavorites) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  const isInFavorites = (productId) => {
    return favoritesItems.some(item => item.id === productId);
  };

  return (
    <div className="products-page">
      <div className="container">
        {/* Заголовок */}
        <div className="products-header">
          <h1 className="page-title">{t('promotions', language)}</h1>
          <p className="page-subtitle">
            {language === 'ru' 
              ? 'Найдите лучшие товары по выгодным ценам' 
              : 'Find the best products at great prices'
            }
          </p>
        </div>

        {/* Фильтры и поиск */}
        <div className="filters-section">
          <div className="search-filter">
            <div className="search-input-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder={t('search', language)}
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>

          <div className="filters-controls">
            <button 
              className="btn btn-outline filter-btn"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FaFilter />
              {language === 'ru' ? 'Фильтры' : 'Filters'}
            </button>

            <div className="sort-controls">
              <span className="sort-label">
                {language === 'ru' ? 'Сортировка:' : 'Sort:'}
              </span>
              {sortOptions.map(option => (
                <button
                  key={option.value}
                  className={`sort-btn ${sortBy === option.value ? 'active' : ''}`}
                  onClick={() => handleSort(option.value)}
                >
                  {option.label}
                  {sortBy === option.value && (
                    <FaSort className={`sort-icon ${sortOrder === 'desc' ? 'desc' : ''}`} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Категории */}
          {showFilters && (
            <div className="categories-filter">
              <h3>{language === 'ru' ? 'Категории:' : 'Categories:'}</h3>
              <div className="categories-grid">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category === 'all' 
                      ? (language === 'ru' ? 'Все' : 'All')
                      : category
                    }
                  </button>
                ))}
              </div>
              <button 
                className="btn btn-outline clear-filters-btn"
                onClick={handleClearFilters}
              >
                {language === 'ru' ? 'Очистить фильтры' : 'Clear Filters'}
              </button>
            </div>
          )}
        </div>

        {/* Результаты поиска */}
        <div className="results-info">
          <span>
            {language === 'ru' ? 'Найдено товаров:' : 'Products found:'} {filteredProducts.length}
          </span>
        </div>

        {/* Сетка товаров */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x300/3b82f6/ffffff?text=' + encodeURIComponent(product.name);
                    }}
                  />
                  {product.discount > 0 && (
                    <span className="discount-badge">-{product.discount}%</span>
                  )}
                  {product.isNew && (
                    <span className="new-badge">NEW</span>
                  )}
                  <button
                    className={`favorite-btn ${isInFavorites(product.id) ? 'active' : ''}`}
                    onClick={() => handleToggleFavorite(product)}
                  >
                    <FaHeart />
                  </button>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-category">{product.category}</div>
                  <div className="product-rating">
                    <FaStar />
                    <span>{product.rating}</span>
                  </div>
                  <div className="product-price">
                    {product.discount > 0 ? (
                      <>
                        <span className="original-price">
                          {product.price.toLocaleString()} ₽
                        </span>
                        <span className="discounted-price">
                          {Math.round(product.price * (1 - product.discount / 100)).toLocaleString()} ₽
                        </span>
                      </>
                    ) : (
                      <span>{product.price.toLocaleString()} ₽</span>
                    )}
                  </div>
                  <div className="product-actions">
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => handleAddToCart(product)}
                    >
                      <FaShoppingCart />
                      {t('addToCart', language)}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h3>{language === 'ru' ? 'Товары не найдены' : 'No products found'}</h3>
            <p>
              {language === 'ru' 
                ? 'Попробуйте изменить параметры поиска или фильтры' 
                : 'Try changing search parameters or filters'
              }
            </p>
            <button 
              className="btn btn-outline"
              onClick={handleClearFilters}
            >
              {language === 'ru' ? 'Очистить фильтры' : 'Clear Filters'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products; 