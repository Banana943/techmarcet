import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { t } from '../../utils/translations';
import { removeFromFavorites } from '../../store/slices/favoritesSlice';
import { addToCart } from '../../store/slices/cartSlice';
import { FaHeart, FaShoppingCart, FaStar, FaArrowLeft } from 'react-icons/fa';
import './Favorites.css';

const Favorites = () => {
  const dispatch = useDispatch();
  const { language } = useSelector(state => state.app);
  const { items } = useSelector(state => state.favorites);

  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFromFavorites(productId));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, quantity: 1 }));
  };

  if (items.length === 0) {
    return (
      <div className="favorites-page">
        <div className="container">
          <div className="empty-favorites">
            <h2>{t('favoritesEmpty', language)}</h2>
            <p>
              {language === 'ru'
                ? 'В списке избранного пока нет товаров. Добавьте товары, которые вам нравятся.'
                : 'Your favorites list is empty. Add products that you like.'
              }
            </p>
            <Link to="/products" className="btn btn-primary">
              <FaArrowLeft className="icon" />
              {language === 'ru' ? 'Перейти к товарам' : 'Go to Products'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-page">
      <div className="container">
        <div className="favorites-header">
          <h1>{t('favorites', language)}</h1>
          <Link to="/products" className="back-to-products">
            <FaArrowLeft className="icon" />
            {language === 'ru' ? 'Вернуться к товарам' : 'Back to Products'}
          </Link>
        </div>

        <div className="favorites-grid">
          {items.map(product => (
            <div key={product.id} className="favorite-item">
              <div className="favorite-image">
                <img src={product.image} alt={product.name} />
                {product.discount > 0 && (
                  <span className="discount-badge">-{product.discount}%</span>
                )}
                {product.isNew && (
                  <span className="new-badge">NEW</span>
                )}
                <button
                  className="remove-favorite-btn"
                  onClick={() => handleRemoveFromFavorites(product.id)}
                >
                  <FaHeart />
                </button>
              </div>

              <div className="favorite-info">
                <h3 className="favorite-name">{product.name}</h3>
                <p className="favorite-category">{product.category}</p>
                
                <div className="favorite-rating">
                  <FaStar className="star-icon" />
                  <span>{product.rating}</span>
                </div>

                <div className="favorite-price">
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
                    <span className="current-price">
                      {product.price.toLocaleString()} ₽
                    </span>
                  )}
                </div>

                <button 
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  <FaShoppingCart className="icon" />
                  {t('addToCart', language)}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites; 