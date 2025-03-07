import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosConfig";

export const fetchDesigners = createAsyncThunk(
  "/order/getDesigners",
  async () => {
    try {
      const response = await axiosInstance.get("/designer/auth");
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  designers: [],
  status: "idle",
  error: null,
};

const ordersListSlice = createSlice({
  name: "ordersList",
  initialState,
  reducers: {
    // Reducer functions (actions) go here
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDesigners.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDesigners.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.designers = action.payload;
      })
      .addCase(fetchDesigners.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { actions } = ordersListSlice;
export default ordersListSlice.reducer;
