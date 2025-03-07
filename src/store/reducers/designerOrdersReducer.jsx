import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosConfig";

const initialState = {
  designerOrders: null,
  designerData: null,
  loading: false,
  error: null,
};

export const fetchDesignerData = createAsyncThunk(
  "designer/fetchDesignerData",
  async () => {
    const designerId = localStorage.getItem("designerId");
    if (!designerId) {
      throw new Error("designer ID not found in local storage");
    }
    try {
      const response = await axiosInstance.get(
        `/designer/auth/details/${designerId}`
      );
      return response.data;
    } catch (error) {
      console.warn(error.message)
    }
   
  }
);

const designerSlice = createSlice({
  name: "designer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDesignerData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDesignerData.fulfilled, (state, action) => {
        state.loading = false;
        state.designerOrders = action.payload.data.orders;
        state.error = null;
      })
      .addCase(fetchDesignerData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectDesignerData = (state) => state.designerData;
export const selectDesignerLoading = (state) => state.loading;
export const selectDesignerError = (state) => state.error;
export const desginerOrders = (state) => state.desginerOrders;

export default designerSlice.reducer;
