import { createSlice } from '@reduxjs/toolkit';
import { getFavorites, setFavorites } from '../../utils/localStorage';

const initialState = {
  items: getFavorites(),
  isLoading: false,
  error: null
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);
      
      if (!existingItem) {
        state.items.push(product);
        setFavorites(state.items);
      }
    },
    removeFromFavorites: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item.id !== productId);
      setFavorites(state.items);
    },
    clearFavorites: (state) => {
      state.items = [];
      setFavorites(state.items);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    }
  }
});

export const {
  addToFavorites,
  removeFromFavorites,
  clearFavorites,
  setLoading,
  setError,
  clearError
} = favoritesSlice.actions;

// Селекторы
export const selectFavoritesItems = (state) => state.favorites.items;
export const selectFavoritesCount = (state) => state.favorites.items.length;
export const selectFavoritesLoading = (state) => state.favorites.isLoading;
export const selectFavoritesError = (state) => state.favorites.error;
export const selectIsInFavorites = (state, productId) => 
  state.favorites.items.some(item => item.id === productId);

export default favoritesSlice.reducer; 