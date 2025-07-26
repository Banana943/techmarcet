// Утилиты для работы с localStorage

// Ключи для localStorage
export const STORAGE_KEYS = {
  USER: 'techmarket_user',
  CART: 'techmarket_cart',
  FAVORITES: 'techmarket_favorites',
  THEME: 'techmarket_theme',
  LANGUAGE: 'techmarket_language'
};

// Работа с пользователем
export const getUser = () => {
  try {
    const user = localStorage.getItem(STORAGE_KEYS.USER);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error getting user from localStorage:', error);
    return null;
  }
};

export const setUser = (user) => {
  try {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  } catch (error) {
    console.error('Error setting user to localStorage:', error);
  }
};

export const removeUser = () => {
  try {
    localStorage.removeItem(STORAGE_KEYS.USER);
  } catch (error) {
    console.error('Error removing user from localStorage:', error);
  }
};

// Работа с корзиной
export const getCart = () => {
  try {
    const cart = localStorage.getItem(STORAGE_KEYS.CART);
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error('Error getting cart from localStorage:', error);
    return [];
  }
};

export const setCart = (cart) => {
  try {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  } catch (error) {
    console.error('Error setting cart to localStorage:', error);
  }
};

// Работа с избранным
export const getFavorites = () => {
  try {
    const favorites = localStorage.getItem(STORAGE_KEYS.FAVORITES);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error getting favorites from localStorage:', error);
    return [];
  }
};

export const setFavorites = (favorites) => {
  try {
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
  } catch (error) {
    console.error('Error setting favorites to localStorage:', error);
  }
};

// Работа с темой
export const getTheme = () => {
  try {
    const theme = localStorage.getItem(STORAGE_KEYS.THEME);
    return theme || 'light';
  } catch (error) {
    console.error('Error getting theme from localStorage:', error);
    return 'light';
  }
};

export const setTheme = (theme) => {
  try {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  } catch (error) {
    console.error('Error setting theme to localStorage:', error);
  }
};

// Работа с языком
export const getLanguage = () => {
  try {
    const language = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    return language || 'ru';
  } catch (error) {
    console.error('Error getting language from localStorage:', error);
    return 'ru';
  }
};

export const setLanguage = (language) => {
  try {
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, language);
  } catch (error) {
    console.error('Error setting language to localStorage:', error);
  }
}; 