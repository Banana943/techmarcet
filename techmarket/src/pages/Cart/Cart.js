import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { t } from '../../utils/translations';
import { removeFromCart, updateQuantity } from '../../store/slices/cartSlice';
import { FaTrash, FaMinus, FaPlus, FaArrowLeft } from 'react-icons/fa';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const { language } = useSelector(state => state.app);
  const { items } = useSelector(state => state.cart);
  
  const total = items.reduce((sum, item) => {
    const price = item.discount 
      ? Math.round(item.price * (1 - item.discount / 100))
      : item.price;
    return sum + price * item.quantity;
  }, 0);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ productId, quantity }));
    }
  };

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <h2>{t('cartEmpty', language)}</h2>
            <p>
              {language === 'ru'
                ? 'Ваша корзина пуста. Добавьте товары, чтобы сделать заказ.'
                : 'Your cart is empty. Add products to make an order.'
              }
            </p>
            <Link to="/products" className="btn btn-primary">
              <FaArrowLeft className="icon" />
              {t('continueShopping', language)}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>{t('cart', language)}</h1>
          <Link to="/products" className="continue-shopping">
            <FaArrowLeft className="icon" />
            {t('continueShopping', language)}
          </Link>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {items.map(item => {
              const discountedPrice = item.discount 
                ? Math.round(item.price * (1 - item.discount / 100))
                : item.price;
              const itemTotal = discountedPrice * item.quantity;

              return (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-category">{item.category}</p>
                  </div>
                  
                  <div className="item-quantity">
                    <button 
                      className="quantity-btn"
                      onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <FaMinus />
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      className="quantity-btn"
                      onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                      disabled={item.quantity >= item.stock}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  
                  <div className="item-price">
                    {item.discount > 0 && (
                      <span className="original-price">
                        {item.price.toLocaleString()} ₽
                      </span>
                    )}
                    <span className="current-price">
                      {discountedPrice.toLocaleString()} ₽
                    </span>
                    <span className="total-price">
                      {itemTotal.toLocaleString()} ₽
                    </span>
                  </div>
                  
                  <button 
                    className="remove-btn"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="cart-summary">
            <h2>{t('cartTotal', language)}</h2>
            
            <div className="summary-row">
              <span>{language === 'ru' ? 'Товары' : 'Products'}</span>
              <span>{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
            </div>
            
            <div className="summary-row">
              <span>{language === 'ru' ? 'Сумма' : 'Subtotal'}</span>
              <span>{total.toLocaleString()} ₽</span>
            </div>
            
            <div className="summary-row">
              <span>{language === 'ru' ? 'Доставка' : 'Delivery'}</span>
              <span>{language === 'ru' ? 'Бесплатно' : 'Free'}</span>
            </div>
            
            <div className="summary-total">
              <span>{language === 'ru' ? 'Итого' : 'Total'}</span>
              <span>{total.toLocaleString()} ₽</span>
            </div>
            
            <button className="checkout-btn">
              {t('checkout', language)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 