// src/redux/slices/temperatureSlice.js
import { createSlice } from '@reduxjs/toolkit';

const temperatureSlice = createSlice({
  name: 'temperature',
  initialState: {
    unit: 'Celsius',
  },
  reducers: {
    setTemperatureUnit: (state, action) => {
      state.unit = action.payload;
    },
  },
});
console.log("Coming from Slice");
export const { setTemperatureUnit } = temperatureSlice.actions;
export default temperatureSlice.reducer;
