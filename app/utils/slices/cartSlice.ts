import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
interface cartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
interface initialStateProps {
  items: cartItem[];
  total: number;
  shipping: number;
  vat: number;
}
const initialState: initialStateProps = {
  items: [],
  total: 0,
  shipping: 50,
  vat: 20,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<Pick<cartItem, "id">>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    updateQuantity: (
      state,
      action: PayloadAction<Pick<cartItem, "quantity" | "id">>
    ) => {
      const matchingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (matchingItem) matchingItem.quantity += action.payload.quantity;
    },
    calculateTotals: (state) => {
      state.total = state.items.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );
      state.vat = state.total * 0.2;
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.vat = 0;
    },
  },
});

export const {
  clearCart,
  calculateTotals,
  updateQuantity,
  addToCart,
  removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
