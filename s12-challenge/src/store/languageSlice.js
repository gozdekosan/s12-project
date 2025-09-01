import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  current: 'en', 
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.current = state.current === 'en' ? 'tr' : 'en';
    },
    setLanguage: (state, action) => {
      state.current = action.payload; 
    },
  },
});

export const { toggleLanguage, setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
