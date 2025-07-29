import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
  FaSearch, 
  FaShoppingCart, 
  FaHeart, 
  FaSun, 
  FaMoon, 
  FaBars, 
  FaTimes,
  FaUser,
  FaSignInAlt,
  FaUserPlus
} from 'react-icons/fa';
import { toggleTheme } from '../../store/slices/appSlice';
import { t } from '../../utils/translations';
import './Header.css';
import logo from '../../logo.svg';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  
  const { theme, language } = useSelector(state => state.app);
  const { isAuthenticated } = useSelector(state => state.auth);
  const cartItems = useSelector(state => state.cart.items);
  const favoritesItems = useSelector(state => state.favorites.items);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Отслеживание скролла для изменения стиля header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрытие меню при изменении маршрута
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        {/* Логотип */}
        <Link to="/" className="logo-link" onClick={handleLogoClick}>
          <img src={logo} alt="Логотип" className="logo" />
          <span className="brand-text">{t('brand', language)}</span>
        </Link>

        {/* Поиск */}
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder={t('search', language)}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>

        {/* Навигация */}
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li>
              <Link 
                to="/products" 
                className={location.pathname === '/products' ? 'active' : ''}
              >
                {t('promotions', language)}
              </Link>
            </li>
            <li>
              <Link 
                to="/about"
                className={location.pathname === '/about' ? 'active' : ''}
              >
                {t('about', language)}
              </Link>
            </li>
            <li>
              <Link 
                to="/team"
                className={location.pathname === '/team' ? 'active' : ''}
              >
                {t('team', language)}
              </Link>
            </li>
            <li>
              <Link 
                to="/gallery"
                className={location.pathname === '/gallery' ? 'active' : ''}
              >
                {t('galleryNav', language)}
              </Link>
            </li>
            <li>
              <Link 
                to="/contacts"
                className={location.pathname === '/contacts' ? 'active' : ''}
              >
                {t('contactsNav', language)}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Действия */}
        <div className="actions">
          {/* Тема */}
          <button 
            className="action-btn theme-btn"
            onClick={handleThemeToggle}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          {/* Аутентификация */}
          {isAuthenticated ? (
            <Link to="/profile" className="action-btn profile-btn">
              <FaUser />
            </Link>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="action-btn">
                <FaSignInAlt />
                <span className="action-label">{t('login', language)}</span>
              </Link>
              <Link to="/register" className="action-btn">
                <FaUserPlus />
                <span className="action-label">{t('register', language)}</span>
              </Link>
            </div>
          )}

          {/* Избранное */}
          <Link to="/favorites" className="action-btn">
            <FaHeart />
            {favoritesItems.length > 0 && (
              <span className="badge">{favoritesItems.length}</span>
            )}
          </Link>

          {/* Корзина */}
          <Link to="/cart" className="action-btn">
            <FaShoppingCart />
            {cartItemsCount > 0 && (
              <span className="badge">{cartItemsCount}</span>
            )}
          </Link>

          {/* Бургер-меню */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-search">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder={t('search', language)}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit">
                <FaSearch />
              </button>
            </form>
          </div>
          <nav className="mobile-nav">
            <Link to="/products">{t('promotions', language)}</Link>
            <Link to="/about">{t('about', language)}</Link>
            <Link to="/team">{t('team', language)}</Link>
            <Link to="/gallery">{t('galleryNav', language)}</Link>
            <Link to="/contacts">{t('contactsNav', language)}</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 