import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { t } from '../../utils/translations';
import { FaSearch, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const { language } = useSelector(state => state.app);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Массив изображений (можно заменить на реальные изображения)
  const galleryImages = [
    {
      id: 1,
      src: '/images/office.jpg',
      alt: 'TechMarket Office',
      title: language === 'ru' ? 'Офис TechMarket' : 'TechMarket Office',
      category: 'office'
    },
    {
      id: 2,
      src: '/images/team.jpg',
      alt: 'Team Meeting',
      title: language === 'ru' ? 'Командная встреча' : 'Team Meeting',
      category: 'team'
    },
    {
      id: 3,
      src: '/images/products.jpg',
      alt: 'Product Showcase',
      title: language === 'ru' ? 'Демонстрация продуктов' : 'Product Showcase',
      category: 'products'
    },
    {
      id: 4,
      src: '/images/support.jpg',
      alt: 'Customer Support',
      title: language === 'ru' ? 'Поддержка клиентов' : 'Customer Support',
      category: 'support'
    },
    {
      id: 5,
      src: '/images/warehouse.jpg',
      alt: 'Warehouse',
      title: language === 'ru' ? 'Склад' : 'Warehouse',
      category: 'warehouse'
    },
    {
      id: 6,
      src: '/images/delivery.jpg',
      alt: 'Delivery Service',
      title: language === 'ru' ? 'Служба доставки' : 'Delivery Service',
      category: 'delivery'
    },
    {
      id: 7,
      src: '/images/quality.jpg',
      alt: 'Quality Control',
      title: language === 'ru' ? 'Контроль качества' : 'Quality Control',
      category: 'quality'
    },
    {
      id: 8,
      src: '/images/innovation.jpg',
      alt: 'Innovation Lab',
      title: language === 'ru' ? 'Лаборатория инноваций' : 'Innovation Lab',
      category: 'innovation'
    },
    {
      id: 9,
      src: '/images/success.jpg',
      alt: 'Customer Success',
      title: language === 'ru' ? 'Успех клиентов' : 'Customer Success',
      category: 'success'
    },
    {
      id: 10,
      src: '/images/tech.jpg',
      alt: 'Technology Stack',
      title: language === 'ru' ? 'Технологический стек' : 'Technology Stack',
      category: 'tech'
    },
    {
      id: 11,
      src: '/images/mobile.jpg',
      alt: 'Mobile Development',
      title: language === 'ru' ? 'Мобильная разработка' : 'Mobile Development',
      category: 'mobile'
    },
    {
      id: 12,
      src: '/images/web.jpg',
      alt: 'Web Development',
      title: language === 'ru' ? 'Веб-разработка' : 'Web Development',
      category: 'web'
    }
  ];

  const categories = [
    { id: 'all', name: language === 'ru' ? 'Все' : 'All' },
    { id: 'office', name: language === 'ru' ? 'Офис' : 'Office' },
    { id: 'team', name: language === 'ru' ? 'Команда' : 'Team' },
    { id: 'products', name: language === 'ru' ? 'Продукты' : 'Products' },
    { id: 'support', name: language === 'ru' ? 'Поддержка' : 'Support' },
    { id: 'warehouse', name: language === 'ru' ? 'Склад' : 'Warehouse' },
    { id: 'delivery', name: language === 'ru' ? 'Доставка' : 'Delivery' },
    { id: 'quality', name: language === 'ru' ? 'Качество' : 'Quality' },
    { id: 'innovation', name: language === 'ru' ? 'Инновации' : 'Innovation' },
    { id: 'success', name: language === 'ru' ? 'Успех' : 'Success' },
    { id: 'tech', name: language === 'ru' ? 'Технологии' : 'Technology' },
    { id: 'mobile', name: language === 'ru' ? 'Мобильные' : 'Mobile' },
    { id: 'web', name: language === 'ru' ? 'Веб' : 'Web' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <div className="gallery-hero-content">
            <h1 className="gallery-hero-title">{t('ourGallery', language)}</h1>
            <p className="gallery-hero-subtitle">
              {t('galleryDescription', language)}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          {/* Categories Filter */}
          <div className="gallery-filters">
            <div className="categories-filter">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id} 
                className="gallery-item"
                onClick={() => openModal(image, index)}
              >
                <div className="gallery-image">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300/3b82f6/ffffff?text=Gallery+Image';
                    }}
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-info">
                      <h3>{image.title}</h3>
                      <FaSearch className="search-icon" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="no-images">
              <h3>{language === 'ru' ? 'Изображения не найдены' : 'No images found'}</h3>
              <p>
                {language === 'ru' 
                  ? 'Попробуйте выбрать другую категорию' 
                  : 'Try selecting a different category'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            
            <div className="modal-image">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x600/3b82f6/ffffff?text=Gallery+Image';
                }}
              />
            </div>
            
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.alt}</p>
            </div>
            
            <div className="modal-navigation">
              <button className="nav-btn prev-btn" onClick={prevImage}>
                <FaChevronLeft />
              </button>
              <span className="image-counter">
                {currentIndex + 1} / {filteredImages.length}
              </span>
              <button className="nav-btn next-btn" onClick={nextImage}>
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 