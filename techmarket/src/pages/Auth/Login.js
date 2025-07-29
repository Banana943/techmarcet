import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from 'react-icons/fa';
import { t } from '../../utils/translations';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const { language } = useSelector(state => state.app);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
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
    if (!formData.email || !formData.password) {
      setError(language === 'ru' ? 'Все поля обязательны' : 'All fields are required');
      return;
    }

    // Here you would typically make an API call to authenticate
    console.log('Login data:', formData);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Implement social login logic here
  };

  return (
    <div className="auth-page">
      {/* Floating Elements */}
      <div className="auth-floating-element"></div>
      <div className="auth-floating-element"></div>

      <div className="auth-container">
        <div className="auth-header">
          <h1 className="auth-title">{t('login', language)}</h1>
          <p className="auth-subtitle">
            {language === 'ru' 
              ? 'Войдите в свой аккаунт для продолжения'
              : 'Sign in to your account to continue'
            }
          </p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">{t('email', language)}</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('enterEmail', language)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">{t('password', language)}</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className="form-input"
                value={formData.password}
                onChange={handleChange}
                placeholder={t('enterPassword', language)}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button type="submit" className="auth-button">
            {t('login', language)}
          </button>
        </form>

        <div className="divider">
          <span>{language === 'ru' ? 'или' : 'or'}</span>
        </div>

        <div className="social-buttons">
          <button
            type="button"
            className="social-button"
            onClick={() => handleSocialLogin('google')}
          >
            <FaGoogle />
            Google
          </button>
          <button
            type="button"
            className="social-button"
            onClick={() => handleSocialLogin('facebook')}
          >
            <FaFacebook />
            Facebook
          </button>
        </div>

        <div className="auth-links">
          <p className="auth-link">
            {language === 'ru' ? 'Нет аккаунта?' : "Don't have an account?"}
            <a onClick={() => navigate('/register')}>
              {language === 'ru' ? 'Зарегистрироваться' : 'Sign up'}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login; 