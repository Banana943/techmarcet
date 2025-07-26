import { createSlice } from '@reduxjs/toolkit';
import { products, searchProducts as searchProductsUtil, filterProductsByCategory, sortProducts as sortProductsUtil } from '../../utils/productsData';

const initialState = {
  products,
  filteredProducts: products,
  selectedCategory: 'all',
  sortBy: 'name',
  sortOrder: 'asc',
  isLoading: false,
  error: null
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    searchProducts: (state, action) => {
      const query = action.payload;
      state.filteredProducts = searchProductsUtil(query, state.products);
    },
    filterByCategory: (state, action) => {
      const category = action.payload;
      state.selectedCategory = category;
      state.filteredProducts = filterProductsByCategory(category, state.products);
    },
    sortProducts: (state, action) => {
      const { sortBy, sortOrder } = action.payload;
      state.sortBy = sortBy;
      state.sortOrder = sortOrder;
      state.filteredProducts = sortProductsUtil(state.filteredProducts, sortBy, sortOrder);
    },
    clearFilters: (state) => {
      state.selectedCategory = 'all';
      state.sortBy = 'name';
      state.sortOrder = 'asc';
      state.filteredProducts = state.products;
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
  setProducts,
  searchProducts,
  filterByCategory,
  sortProducts,
  clearFilters,
  setLoading,
  setError,
  clearError
} = productsSlice.actions;

// Селекторы
export const selectAllProducts = (state) => state.products.products;
export const selectFilteredProducts = (state) => state.products.filteredProducts;
export const selectSelectedCategory = (state) => state.products.selectedCategory;
export const selectSortBy = (state) => state.products.sortBy;
export const selectSortOrder = (state) => state.products.sortOrder;
export const selectProductsLoading = (state) => state.products.isLoading;
export const selectProductsError = (state) => state.products.error;
export const selectProductById = (state, productId) => 
  state.products.products.find(product => product.id === productId);

export default productsSlice.reducer; 