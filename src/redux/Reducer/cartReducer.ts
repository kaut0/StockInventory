import {createSlice} from '@reduxjs/toolkit';
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
    cartData: state => {},
  },
});

export const {cartData} = cartSlice.actions;
export default cartSlice.reducer;
