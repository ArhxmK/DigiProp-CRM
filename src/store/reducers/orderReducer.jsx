import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosConfig";

export const fetchOrders = createAsyncThunk("order/getOrders", async () => {
  try {
    const response = await axiosInstance.get("/order/getOrders");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const updateOrder = createAsyncThunk(
  "order/updateOrder",
  async ({ id, update }) => {
    try {
      const response = await axiosInstance.put(`/order/update/${id}`, update);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const initialState = {
  orders: [],
  status: "idle",
  error: null,
  updateState: "idle",
  updateError: null,
};

const ordersListSlice = createSlice({
  name: "ordersList",
  initialState,
  reducers: {
    // Reducer functions (actions) go here
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = action.payload.data.orders;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Handling updateOrder actions
      .addCase(updateOrder.pending, (state) => {
        state.updateState = "loading";
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        state.updateState = "succeeded";
        state.orders = action.payload.orders;
      })
      .addCase(updateOrder.rejected, (state, action) => {
        state.status = "failed";
        state.updateError = action.error.message;
      });
  },
});

export const { actions } = ordersListSlice;
export default ordersListSlice.reducer;
