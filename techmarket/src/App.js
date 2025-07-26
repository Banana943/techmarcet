import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

function App() {
  const { theme } = useSelector(state => state.app);

  // Применяем тему к body
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<div className="container">Главная страница</div>} />
            <Route path="/products" element={<div className="container">Каталог товаров</div>} />
            <Route path="/about" element={<div className="container">О нас</div>} />
            <Route path="/team" element={<div className="container">Наша команда</div>} />
            <Route path="/gallery" element={<div className="container">Галерея</div>} />
            <Route path="/contacts" element={<div className="container">Контакты</div>} />
            <Route path="/login" element={<div className="container">Вход</div>} />
            <Route path="/register" element={<div className="container">Регистрация</div>} />
            <Route path="/cart" element={<div className="container">Корзина</div>} />
            <Route path="/favorites" element={<div className="container">Избранное</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
