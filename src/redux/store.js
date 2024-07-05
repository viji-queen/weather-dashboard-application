import { configureStore } from '@reduxjs/toolkit';
import temperatureReducer from './temparatureSlice';

const store = configureStore({
  reducer: {
    temperature: temperatureReducer,
  },
});

export default store;