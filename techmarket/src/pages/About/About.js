import React from 'react';
import { useSelector } from 'react-redux';
import { t } from '../../utils/translations';
import { FaUsers, FaAward, FaRocket, FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
  const { language } = useSelector(state => state.app);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="about-hero-title">{t('aboutUs', language)}</h1>
            <p className="about-hero-subtitle">
              {t('aboutDescription', language)}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <h2>{t('ourMission', language)}</h2>
              <p>
                {t('missionText', language) || 
                  'Мы стремимся предоставить нашим клиентам лучшие технологии по доступным ценам, обеспечивая отличный сервис и поддержку на каждом этапе.'}
              </p>
            </div>
            <div className="mission-image">
              <div className="mission-icon">
                <FaRocket />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="container">
          <div className="vision-grid">
            <div className="vision-image">
              <div className="vision-icon">
                <FaAward />
              </div>
            </div>
            <div className="vision-content">
              <h2>{t('ourVision', language)}</h2>
              <p>
                {t('visionText', language) || 
                  'Стать ведущим интернет-магазином электроники, который известен своим качеством, инновациями и преданностью клиентам.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">{t('ourValues', language)}</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <FaHeart />
              </div>
              <h3>{t('quality', language) || 'Качество'}</h3>
              <p>
                {t('qualityDesc', language) || 
                  'Мы предлагаем только качественные товары от проверенных производителей.'}
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaUsers />
              </div>
              <h3>{t('customerFocus', language) || 'Фокус на клиенте'}</h3>
              <p>
                {t('customerFocusDesc', language) || 
                  'Наши клиенты - наш приоритет. Мы всегда готовы помочь и поддержать.'}
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaAward />
              </div>
              <h3>{t('innovation', language) || 'Инновации'}</h3>
              <p>
                {t('innovationDesc', language) || 
                  'Мы следим за последними технологическими тенденциями и предлагаем новинки.'}
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaRocket />
              </div>
              <h3>{t('reliability', language) || 'Надёжность'}</h3>
              <p>
                {t('reliabilityDesc', language) || 
                  'Мы заслужили доверие тысяч клиентов благодаря стабильной работе.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">{t('yearsExperience', language) || 'Лет опыта'}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50K+</div>
              <div className="stat-label">{t('happyCustomers', language) || 'Довольных клиентов'}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1000+</div>
              <div className="stat-label">{t('products', language) || 'Товаров'}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">{t('support', language) || 'Поддержка'}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 