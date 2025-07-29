import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { t } from '../../utils/translations';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const { language } = useSelector(state => state.app);

  return (
    <div className="home-page">
      {/* Floating Elements */}
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">TECHMARKET</h1>
          <p className="hero-subtitle">
            {language === 'ru' 
              ? 'Откройте для себя будущее технологий. Инновационные гаджеты и электроника для современной жизни.'
              : 'Discover the future of technology. Innovative gadgets and electronics for modern living.'
            }
          </p>
          <button 
            className="cta-button"
            onClick={() => navigate('/products')}
          >
            {language === 'ru' ? 'Исследовать' : 'Explore'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home; 