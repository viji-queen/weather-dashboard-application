import { configureStore } from '@reduxjs/toolkit';
import temperatureReducer from './temparatureSlice';
import themeReducer from './themeSlice'
const store = configureStore({
  reducer: {
    temperature: temperatureReducer,
    theme: themeReducer
  },
});

export default store;