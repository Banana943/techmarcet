import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { t } from '../../utils/translations';
import './Auth.css';

const Register = () => {
  const navigate = useNavigate();
  const { language } = useSelector(state => state.app);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!formData.email || !formData.password || !formData.confirmPassword || !formData.name) {
      setError(language === 'ru' ? 'Все поля обязательны' : 'All fields are required');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError(language === 'ru' ? 'Пароли не совпадают' : 'Passwords do not match');
      return;
    }

    // Here you would typically make an API call to register the user
    console.log('Registration data:', formData);
    
    // For now, just redirect to login
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2>{t('register', language)}</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="name">{t('name', language)}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('enterName', language)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t('email', language)}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('enterEmail', language)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">{t('password', language)}</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder={t('enterPassword', language)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">{t('confirmPassword', language)}</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder={t('confirmPassword', language)}
            />
          </div>
          <button type="submit" className="auth-button">
            {t('register', language)}
          </button>
        </form>
        <p className="auth-link">
          {t('alreadyHaveAccount', language)}{' '}
          <span onClick={() => navigate('/login')} className="link">
            {t('login', language)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register; 