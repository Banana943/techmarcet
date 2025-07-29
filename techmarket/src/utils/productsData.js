// Генерация тестовых данных для товаров
const productNames = [
  'iPhone 15 Pro Max',
  'Samsung Galaxy S24 Ultra',
  'MacBook Pro M3',
  'Dell XPS 15',
  'iPad Pro 12.9',
  'Samsung Galaxy Tab S9',
  'Sony WH-1000XM5',
  'AirPods Pro 2',
  'Apple Watch Series 9',
  'Samsung Galaxy Watch 6',
  'Nintendo Switch OLED',
  'PlayStation 5',
  'Xbox Series X',
  'Canon EOS R5',
  'Sony A7 IV',
  'DJI Mini 3 Pro',
  'GoPro Hero 11',
  'Samsung QLED 4K TV',
  'LG OLED C3',
  'Apple TV 4K',
  'Roku Ultra',
  'Amazon Fire TV Stick',
  'Google Chromecast',
  'Logitech MX Master 3',
  'Razer DeathAdder V3',
  'SteelSeries Arctis Pro',
  'Corsair K100 RGB',
  'ASUS ROG Strix G15',
  'Lenovo ThinkPad X1',
  'HP Spectre x360'
];

const productCategories = [
  'Smartphones',
  'Laptops',
  'Tablets',
  'Gaming',
  'Cameras',
  'Audio',
  'Wearables',
  'Accessories'
];

const productDescriptions = [
  'Самый мощный iPhone с титановым корпусом и камерой 48 МП',
  'Флагманский смартфон с S Pen и камерой 200 МП',
  'Мощный ноутбук с чипом M3 для профессионалов',
  'Премиум ноутбук с 4K дисплеем и RTX графикой',
  'Лучший планшет для творчества с дисплеем Liquid Retina XDR',
  'Android планшет с S Pen и AMOLED дисплеем',
  'Лучшие наушники с шумоподавлением',
  'Беспроводные наушники с активным шумоподавлением',
  'Умные часы с мониторингом здоровья',
  'Android часы с Wear OS и мониторингом',
  'Портативная игровая консоль с OLED дисплеем',
  'Мощная игровая консоль нового поколения',
  'Игровая консоль с поддержкой 4K и 120 FPS',
  'Профессиональная камера с 45 МП и 8K видео',
  'Полнокадровая камера с 33 МП и 4K видео',
  'Компактный дрон с 4K камерой',
  'Экшн-камера с 5.3K видео и стабилизацией',
  '4K телевизор с QLED технологией',
  'OLED телевизор с идеальным черным',
  'Медиаплеер с поддержкой 4K HDR',
  'Стриминговое устройство с 4K HDR',
  'Медиаплеер с Google TV',
  'Устройство для трансляции контента',
  'Беспроводная мышь для профессионалов',
  'Игровая мышь с оптическим сенсором',
  'Игровые наушники с Hi-Res Audio',
  'Механическая клавиатура с RGB подсветкой',
  'Игровой ноутбук с RTX 4070',
  'Бизнес ноутбук с премиум дизайном',
  'Конвертируемый ноутбук с OLED дисплеем'
];

// Функция для генерации случайной цены
const generateRandomPrice = () => {
  const minPrice = 5000;
  const maxPrice = 250000;
  return Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
};

// Функция для генерации случайного рейтинга
const generateRandomRating = () => {
  return Math.round((Math.random() * 2 + 3) * 10) / 10; // Рейтинг от 3.0 до 5.0
};

// Функция для генерации случайного изображения
const generateRandomImage = () => {
  const imageNames = [
    'iphone.svg',
    'samsung.svg', 
    'macbook.svg',
    'dell.svg',
    'ipad.svg',
    'tablet.svg',
    'headphones.svg',
    'airpods.svg',
    'watch.svg',
    'smartwatch.svg',
    'nintendo.svg',
    'playstation.svg',
    'xbox.svg',
    'camera.svg',
    'sony-camera.svg',
    'drone.svg',
    'gopro.svg',
    'tv.svg',
    'lg-tv.svg',
    'apple-tv.svg',
    'roku.svg',
    'fire-tv.svg',
    'chromecast.svg',
    'mouse.svg',
    'gaming-mouse.svg',
    'headset.svg',
    'keyboard.svg',
    'gaming-laptop.svg',
    'thinkpad.svg',
    'spectre.svg'
  ];
  
  const randomIndex = Math.floor(Math.random() * imageNames.length);
  return `/images/${imageNames[randomIndex]}`;
};

// Функция для генерации случайного количества на складе
const generateRandomStock = () => {
  return Math.floor(Math.random() * 50) + 1; // От 1 до 50
};

// Генерация списка товаров
export const generateProducts = () => {
  const products = [];
  
  for (let i = 0; i < 30; i++) {
    const category = productCategories[Math.floor(Math.random() * productCategories.length)];
    const name = productNames[i];
    const description = productDescriptions[i];
    
    const product = {
      id: i + 1,
      name,
      description,
      category,
      price: generateRandomPrice(),
      rating: generateRandomRating(),
      image: generateRandomImage(),
      stock: generateRandomStock(),
      discount: Math.random() > 0.7 ? Math.floor(Math.random() * 30) + 10 : 0, // 30% товаров со скидкой
      isNew: Math.random() > 0.8, // 20% новых товаров
      isPopular: Math.random() > 0.7, // 30% популярных товаров
      isFeatured: Math.random() > 0.8 // 20% рекомендуемых товаров
    };
    
    products.push(product);
  }
  
  return products;
};

// Экспорт сгенерированных товаров
export const products = generateProducts();

// Функция поиска товаров
export const searchProducts = (query, productsList = products) => {
  if (!query.trim()) return productsList;
  
  const searchTerm = query.toLowerCase();
  return productsList.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  );
};

// Функция фильтрации по категории
export const filterProductsByCategory = (category, productsList = products) => {
  if (category === 'all') return productsList;
  return productsList.filter(product => product.category === category);
};

// Функция сортировки товаров
export const sortProducts = (productsList, sortBy = 'name', sortOrder = 'asc') => {
  const sortedProducts = [...productsList];
  
  sortedProducts.sort((a, b) => {
    let aValue, bValue;
    
    switch (sortBy) {
      case 'name':
        aValue = a.name.toLowerCase();
        bValue = b.name.toLowerCase();
        break;
      case 'price':
        aValue = a.price;
        bValue = b.price;
        break;
      case 'rating':
        aValue = a.rating;
        bValue = b.rating;
        break;
      default:
        aValue = a.name.toLowerCase();
        bValue = b.name.toLowerCase();
    }
    
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });
  
  return sortedProducts;
}; 