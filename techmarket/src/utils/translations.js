// Система переводов

export const translations = {
  ru: {
    // Header
    logo: 'TechMarket',
    search: 'Поиск товаров...',
    promotions: 'Акции',
    about: 'О нас',
    team: 'Наша команда',
    gallery: 'Галерея',
    contacts: 'Контакты',
    login: 'Войти',
    register: 'Регистрация',
    cart: 'Корзина',
    favorites: 'Избранное',
    
    // Auth
    email: 'Email',
    password: 'Пароль',
    name: 'Имя',
    phone: 'Телефон',
    confirmPassword: 'Подтвердите пароль',
    loginTitle: 'Вход в аккаунт',
    registerTitle: 'Регистрация',
    logout: 'Выйти',
    
    // Pages
    home: 'Главная',
    products: 'Товары',
    aboutUs: 'О нас',
    ourTeam: 'Наша команда',
    gallery: 'Галерея',
    contacts: 'Контакты',
    
    // Product
    addToCart: 'В корзину',
    addToFavorites: 'В избранное',
    removeFromFavorites: 'Удалить из избранного',
    price: 'Цена',
    rating: 'Рейтинг',
    description: 'Описание',
    
    // Cart
    cartEmpty: 'Корзина пуста',
    total: 'Итого',
    checkout: 'Оформить заказ',
    clearCart: 'Очистить корзину',
    
    // Theme
    light: 'Светлая',
    dark: 'Тёмная',
    
    // Language
    language: 'Язык',
    russian: 'Русский',
    english: 'English',
    
    // Common
    loading: 'Загрузка...',
    error: 'Ошибка',
    success: 'Успешно',
    cancel: 'Отмена',
    save: 'Сохранить',
    delete: 'Удалить',
    edit: 'Редактировать',
    close: 'Закрыть',
    back: 'Назад',
    next: 'Далее',
    previous: 'Назад',
    
    // Home page
    welcome: 'Добро пожаловать в TechMarket',
    featuredProducts: 'Популярные товары',
    newArrivals: 'Новые поступления',
    specialOffers: 'Специальные предложения',
    
    // About page
    aboutDescription: 'Мы - ведущий интернет-магазин электроники и технологий',
    ourMission: 'Наша миссия',
    ourVision: 'Наше видение',
    ourValues: 'Наши ценности',
    
    // Team page
    meetOurTeam: 'Познакомьтесь с нашей командой',
    teamDescription: 'Наша команда состоит из профессионалов',
    
    // Gallery page
    ourGallery: 'Наша галерея',
    galleryDescription: 'Посмотрите на наши работы и проекты',
    
    // Contacts page
    contactUs: 'Свяжитесь с нами',
    contactInfo: 'Контактная информация',
    address: 'Адрес',
    phone: 'Телефон',
    email: 'Email',
    workingHours: 'Часы работы',
    sendMessage: 'Отправить сообщение',
    message: 'Сообщение',
    subject: 'Тема',
    
    // Form validation
    required: 'Обязательное поле',
    invalidEmail: 'Неверный формат email',
    passwordTooShort: 'Пароль должен содержать минимум 6 символов',
    passwordsDoNotMatch: 'Пароли не совпадают',
    invalidPhone: 'Неверный формат телефона'
  },
  
  en: {
    // Header
    logo: 'TechMarket',
    search: 'Search products...',
    promotions: 'Promotions',
    about: 'About',
    team: 'Our Team',
    gallery: 'Gallery',
    contacts: 'Contacts',
    login: 'Login',
    register: 'Register',
    cart: 'Cart',
    favorites: 'Favorites',
    
    // Auth
    email: 'Email',
    password: 'Password',
    name: 'Name',
    phone: 'Phone',
    confirmPassword: 'Confirm Password',
    loginTitle: 'Login to Account',
    registerTitle: 'Registration',
    logout: 'Logout',
    
    // Pages
    home: 'Home',
    products: 'Products',
    aboutUs: 'About Us',
    ourTeam: 'Our Team',
    gallery: 'Gallery',
    contacts: 'Contacts',
    
    // Product
    addToCart: 'Add to Cart',
    addToFavorites: 'Add to Favorites',
    removeFromFavorites: 'Remove from Favorites',
    price: 'Price',
    rating: 'Rating',
    description: 'Description',
    
    // Cart
    cartEmpty: 'Cart is empty',
    total: 'Total',
    checkout: 'Checkout',
    clearCart: 'Clear Cart',
    
    // Theme
    light: 'Light',
    dark: 'Dark',
    
    // Language
    language: 'Language',
    russian: 'Русский',
    english: 'English',
    
    // Common
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    cancel: 'Cancel',
    save: 'Save',
    delete: 'Delete',
    edit: 'Edit',
    close: 'Close',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    
    // Home page
    welcome: 'Welcome to TechMarket',
    featuredProducts: 'Featured Products',
    newArrivals: 'New Arrivals',
    specialOffers: 'Special Offers',
    
    // About page
    aboutDescription: 'We are a leading online store for electronics and technology',
    ourMission: 'Our Mission',
    ourVision: 'Our Vision',
    ourValues: 'Our Values',
    
    // Team page
    meetOurTeam: 'Meet Our Team',
    teamDescription: 'Our team consists of professionals',
    
    // Gallery page
    ourGallery: 'Our Gallery',
    galleryDescription: 'Take a look at our work and projects',
    
    // Contacts page
    contactUs: 'Contact Us',
    contactInfo: 'Contact Information',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    workingHours: 'Working Hours',
    sendMessage: 'Send Message',
    message: 'Message',
    subject: 'Subject',
    
    // Form validation
    required: 'This field is required',
    invalidEmail: 'Invalid email format',
    passwordTooShort: 'Password must be at least 6 characters',
    passwordsDoNotMatch: 'Passwords do not match',
    invalidPhone: 'Invalid phone format'
  }
};

// Функция для получения перевода
export const t = (key, language = 'ru') => {
  return translations[language]?.[key] || key;
};

// Функция для переключения языка
export const toggleLanguage = (currentLanguage) => {
  return currentLanguage === 'ru' ? 'en' : 'ru';
}; 