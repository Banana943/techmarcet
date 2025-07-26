import { createSlice } from '@reduxjs/toolkit';
import { getTheme, setTheme as setThemeStorage, getLanguage, setLanguage as setLanguageStorage } from '../../utils/localStorage';

const initialState = {
  theme: getTheme(),
  language: getLanguage(),
  searchQuery: '',
  isMobileMenuOpen: false,
  isLoading: false,
  error: null
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      state.theme = newTheme;
      setThemeStorage(newTheme);
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      setThemeStorage(action.payload);
    },
    toggleLanguage: (state) => {
      const newLanguage = state.language === 'ru' ? 'en' : 'ru';
      state.language = newLanguage;
      setLanguageStorage(newLanguage);
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
      setLanguageStorage(action.payload);
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
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
  toggleTheme,
  setTheme,
  toggleLanguage,
  setLanguage,
  setSearchQuery,
  toggleMobileMenu,
  closeMobileMenu,
  setLoading,
  setError,
  clearError
} = appSlice.actions;

export default appSlice.reducer; 