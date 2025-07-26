import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../store/slices/appSlice';
import authReducer from '../store/slices/authSlice';
import cartReducer from '../store/slices/cartSlice';
import favoritesReducer from '../store/slices/favoritesSlice';
import productsReducer from '../store/slices/productsSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
    products: productsReducer,
  },
});
