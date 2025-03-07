import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const {
        _id,
        title,
        price,
        image,
        quantity,
        variants,
        checkboxid,
        specialOffer,
      } = action.payload;

      const existingItemIndex = state.cartItems.findIndex(
        (item) => item._id === _id
      );
      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex].quantity += 1;
        state.cartItems[existingItemIndex].subtotal =
          state.cartItems[existingItemIndex].quantity * price;
      } else {
        const newItem = {
          _id,
          title,
          quantity: quantity || 1,
          image,
          price,
          subtotal: price,
          checkboxid,
        };
        if (variants) {
          newItem.variants = variants;
        } else if (specialOffer) {
          newItem.specialOffer = specialOffer;
        }
        state.cartItems.push(newItem);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    clearCart(state) {
      state.cartItems = [];
      localStorage.removeItem("cart");
    },
    removeFromCart(state, action) {
      const { _id } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item._id !== _id);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    updateCartItemQuantity(state, action) {
      const { _id, quantity } = action.payload;
      const existingItem = state.cartItems.find((item) => item._id === _id);
      if (existingItem) {
        // console.log(existingItem)
        existingItem.quantity = quantity;
        existingItem.subtotal = existingItem.price * quantity;
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
