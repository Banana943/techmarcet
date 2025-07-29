const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Функция для генерации случайного цвета
const getRandomColor = () => {
  const colors = [
    ['#3B82F6', '#1D4ED8'], // Blue
    ['#10B981', '#047857'], // Green
    ['#F59E0B', '#B45309'], // Yellow
    ['#EF4444', '#B91C1C'], // Red
    ['#8B5CF6', '#5B21B6'], // Purple
    ['#EC4899', '#BE185D'], // Pink
    ['#6366F1', '#4338CA'], // Indigo
    ['#14B8A6', '#0F766E'], // Teal
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Функция для создания SVG с градиентом и текстом
const createSVG = (name, width = 400, height = 300) => {
  const [color1, color2] = getRandomColor();
  const displayName = name.replace('.svg', '').split('-').join(' ').toUpperCase();
  
  return `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" 
        font-weight="bold" fill="white" text-anchor="middle" 
        dominant-baseline="middle">${displayName}</text>
</svg>`.trim();
};

// Список изображений для продуктов
const productImages = [
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

// Список изображений для галереи
const galleryImages = [
  'office.svg',
  'team.svg',
  'workspace.svg',
  'meeting.svg',
  'showroom.svg',
  'store.svg',
  'warehouse.svg',
  'support.svg',
  'repair.svg',
  'packaging.svg',
  'delivery.svg',
  'event.svg'
];

// Генерация изображений для продуктов
productImages.forEach(name => {
  const svg = createSVG(name);
  fs.writeFileSync(path.join(imagesDir, name), svg);
});

// Генерация изображений для галереи
galleryImages.forEach(name => {
  const svg = createSVG(name, 600, 400);
  fs.writeFileSync(path.join(imagesDir, name), svg);
});

console.log('Изображения успешно сгенерированы!'); 