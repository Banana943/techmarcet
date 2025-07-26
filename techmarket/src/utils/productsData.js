// Генератор тестовых товаров

const productNames = [
  'iPhone 15 Pro Max',
  'Samsung Galaxy S24 Ultra',
  'MacBook Pro 16" M3',
  'Dell XPS 15',
  'Sony WH-1000XM5',
  'AirPods Pro 2',
  'iPad Pro 12.9"',
  'Samsung Galaxy Tab S9',
  'Nintendo Switch OLED',
  'PlayStation 5',
  'Xbox Series X',
  'Canon EOS R5',
  'Sony A7 IV',
  'DJI Mini 3 Pro',
  'GoPro Hero 11',
  'Apple Watch Series 9',
  'Samsung Galaxy Watch 6',
  'Fitbit Sense 2',
  'Garmin Fenix 7',
  'Polar Vantage V3',
  'ASUS ROG Strix G15',
  'MSI GE76 Raider',
  'Razer Blade 15',
  'Alienware x17',
  'Logitech MX Master 3',
  'Corsair K100 RGB',
  'SteelSeries Arctis Pro',
  'Bose QuietComfort 45',
  'JBL Flip 6',
  'Anker PowerCore 20000'
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
  'Современный смартфон с мощным процессором и отличной камерой',
  'Профессиональный ноутбук для работы и творчества',
  'Планшет для продуктивности и развлечений',
  'Игровая консоль нового поколения',
  'Беспроводные наушники с активным шумоподавлением',
  'Умные часы с множеством функций',
  'Камера для профессиональной фотографии',
  'Дрон для съемки с воздуха',
  'Аксессуар для улучшения продуктивности',
  'Портативная колонка с отличным звуком'
];

const generateRandomPrice = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomRating = () => {
  return Math.round((Math.random() * 2 + 3) * 10) / 10; // 3.0 - 5.0
};

const generateRandomImage = (id) => {
  // Используем placeholder изображения
  return `https://picsum.photos/400/300?random=${id}`;
};

const generateRandomStock = () => {
  return Math.floor(Math.random() * 50) + 1;
};

export const generateProducts = (count = 30) => {
  const products = [];
  
  for (let i = 0; i < count; i++) {
    const category = productCategories[Math.floor(Math.random() * productCategories.length)];
    const description = productDescriptions[Math.floor(Math.random() * productDescriptions.length)];
    
    const product = {
      id: i + 1,
      name: productNames[i % productNames.length],
      category,
      description,
      price: generateRandomPrice(5000, 150000),
      rating: generateRandomRating(),
      stock: generateRandomStock(),
      image: generateRandomImage(i + 1),
      isNew: Math.random() > 0.7, // 30% вероятность быть новым товаром
      isPopular: Math.random() > 0.8, // 20% вероятность быть популярным
      discount: Math.random() > 0.8 ? Math.floor(Math.random() * 30) + 10 : 0, // 20% вероятность скидки
      features: [
        'Высокое качество',
        'Современный дизайн',
        'Надежность',
        'Простота использования'
      ],
      specifications: {
        'Вес': `${Math.floor(Math.random() * 2000) + 100}г`,
        'Размеры': `${Math.floor(Math.random() * 50) + 10} x ${Math.floor(Math.random() * 50) + 10} x ${Math.floor(Math.random() * 20) + 5} см`,
        'Цвет': ['Черный', 'Белый', 'Серебристый', 'Золотой'][Math.floor(Math.random() * 4)],
        'Гарантия': '1 год'
      }
    };
    
    products.push(product);
  }
  
  return products;
};

// Экспортируем готовый массив товаров
export const products = generateProducts(30);

// Функция для поиска товаров
export const searchProducts = (query, productsList = products) => {
  if (!query.trim()) return productsList;
  
  const searchTerm = query.toLowerCase();
  
  return productsList.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );
};

// Функция для фильтрации товаров по категории
export const filterProductsByCategory = (category, productsList = products) => {
  if (!category || category === 'all') return productsList;
  
  return productsList.filter(product => product.category === category);
};

// Функция для сортировки товаров
export const sortProducts = (productsList, sortBy = 'name', order = 'asc') => {
  const sortedProducts = [...productsList];
  
  sortedProducts.sort((a, b) => {
    let aValue, bValue;
    
    switch (sortBy) {
      case 'price':
        aValue = a.price;
        bValue = b.price;
        break;
      case 'rating':
        aValue = a.rating;
        bValue = b.rating;
        break;
      case 'name':
      default:
        aValue = a.name.toLowerCase();
        bValue = b.name.toLowerCase();
        break;
    }
    
    if (order === 'desc') {
      return aValue < bValue ? 1 : -1;
    }
    
    return aValue > bValue ? 1 : -1;
  });
  
  return sortedProducts;
}; 