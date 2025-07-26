import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { 
  toggleTheme, 
  toggleLanguage, 
  setSearchQuery,
  toggleMobileMenu,
  closeMobileMenu 
} from '../../store/slices/appSlice';
import { logout } from '../../store/slices/authSlice';
import { t } from '../../utils/translations';
import { 
  FaSearch, 
  FaShoppingCart, 
  FaHeart, 
  FaSun, 
  FaMoon, 
  FaBars, 
  FaTimes,
  FaUser,
  FaSignOutAlt
} from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  
  // Получаем состояние из Redux
  const { theme, language, searchQuery, isMobileMenuOpen } = useSelector(state => state.app);
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const cartItemCount = useSelector(state => state.cart.items.reduce((total, item) => total + item.quantity, 0));
  const favoritesCount = useSelector(state => state.favorites.items.length);

  // Обработчики
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleLanguageToggle = () => {
    dispatch(toggleLanguage());
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(searchValue));
    navigate('/products');
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleMobileMenuToggle = () => {
    dispatch(toggleMobileMenu());
  };

  const handleMobileMenuClose = () => {
    dispatch(closeMobileMenu());
  };

  const handleLogout = () => {
    dispatch(logout());
    handleMobileMenuClose();
  };

  const handleNavClick = () => {
    handleMobileMenuClose();
  };

  return (
    <header className="header" data-theme={theme}>
      <div className="container">
        <div className="header-content">
          {/* Логотип */}
          <Link to="/" className="logo" onClick={handleNavClick}>
            <h1>{t('logo', language)}</h1>
          </Link>

          {/* Поисковая строка */}
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <div className="search-input-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder={t('search', language)}
                value={searchValue}
                onChange={handleSearchChange}
              />
            </div>
          </form>

          {/* Навигация */}
          <nav className="nav-menu">
            <Link to="/products" className="nav-link" onClick={handleNavClick}>
              {t('promotions', language)}
            </Link>
            <Link to="/about" className="nav-link" onClick={handleNavClick}>
              {t('about', language)}
            </Link>
            <Link to="/team" className="nav-link" onClick={handleNavClick}>
              {t('team', language)}
            </Link>
            <Link to="/gallery" className="nav-link" onClick={handleNavClick}>
              {t('gallery', language)}
            </Link>
            <Link to="/contacts" className="nav-link" onClick={handleNavClick}>
              {t('contacts', language)}
            </Link>
          </nav>

          {/* Правая часть */}
          <div className="header-actions">
            {/* Переключатель языка */}
            <button 
              className="action-btn language-btn" 
              onClick={handleLanguageToggle}
              title={t('language', language)}
            >
              {language === 'ru' ? 'EN' : 'RU'}
            </button>

            {/* Переключатель темы */}
            <button 
              className="action-btn theme-btn" 
              onClick={handleThemeToggle}
              title={theme === 'light' ? t('dark', language) : t('light', language)}
            >
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>

            {/* Корзина */}
            <Link to="/cart" className="action-btn cart-btn" onClick={handleNavClick}>
              <FaShoppingCart />
              {cartItemCount > 0 && (
                <span className="badge cart-badge">{cartItemCount}</span>
              )}
            </Link>

            {/* Избранное */}
            <Link to="/favorites" className="action-btn favorites-btn" onClick={handleNavClick}>
              <FaHeart />
              {favoritesCount > 0 && (
                <span className="badge favorites-badge">{favoritesCount}</span>
              )}
            </Link>

            {/* Аутентификация */}
            {isAuthenticated ? (
              <div className="user-menu">
                <button className="action-btn user-btn">
                  <FaUser />
                  <span className="user-name">{user?.name}</span>
                </button>
                <button className="action-btn logout-btn" onClick={handleLogout}>
                  <FaSignOutAlt />
                </button>
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="btn btn-outline" onClick={handleNavClick}>
                  {t('login', language)}
                </Link>
                <Link to="/register" className="btn" onClick={handleNavClick}>
                  {t('register', language)}
                </Link>
              </div>
            )}

            {/* Бургер-меню для мобильных */}
            <button 
              className="mobile-menu-btn" 
              onClick={handleMobileMenuToggle}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav">
              <Link to="/products" className="mobile-nav-link" onClick={handleNavClick}>
                {t('promotions', language)}
              </Link>
              <Link to="/about" className="mobile-nav-link" onClick={handleNavClick}>
                {t('about', language)}
              </Link>
              <Link to="/team" className="mobile-nav-link" onClick={handleNavClick}>
                {t('team', language)}
              </Link>
              <Link to="/gallery" className="mobile-nav-link" onClick={handleNavClick}>
                {t('gallery', language)}
              </Link>
              <Link to="/contacts" className="mobile-nav-link" onClick={handleNavClick}>
                {t('contacts', language)}
              </Link>
            </nav>
            
            {!isAuthenticated && (
              <div className="mobile-auth">
                <Link to="/login" className="btn btn-outline" onClick={handleNavClick}>
                  {t('login', language)}
                </Link>
                <Link to="/register" className="btn" onClick={handleNavClick}>
                  {t('register', language)}
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 