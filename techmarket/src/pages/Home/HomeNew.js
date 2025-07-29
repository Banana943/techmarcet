import React from 'react';
import { useSelector } from 'react-redux';
import { t } from '../../utils/translations';
import './HomeNew.css';

const HomeNew = () => {
  const { language } = useSelector(state => state.app);
  return (
    <section className="home-new">
      <div className="home-new__hero">
        <h1>{t('welcome', language)}</h1>
        <p>{t('specialOffers', language)}</p>
      </div>
      <div className="home-new__features">
        <div className="feature-card">🔥 {t('featuredProducts', language)}</div>
        <div className="feature-card">🆕 {t('newArrivals', language)}</div>
        <div className="feature-card">💰 {t('promotions', language)}</div>
      </div>
    </section>
  );
};

export default HomeNew; 