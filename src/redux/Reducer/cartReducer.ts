import {PayloadAction, createSlice} from '@reduxjs/toolkit';
export interface dataCart {
  data: any;
}

const initialState: dataCart = {
  data: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartData: (state, action: PayloadAction<any>) => {
      state.data = [...state.data, action.payload];
    },
    cartEmpty: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const {cartData, cartEmpty} = cartSlice.actions;
export default cartSlice.reducer;
