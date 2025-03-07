import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosConfig";

export const fetchPackages = createAsyncThunk(
  "packagesList/fetchPackages",
  async () => {
    try {
      const response = await axiosInstance.get("/products/packages");

      return response.data;
    } catch (error) {
      // console.log(error);
    }
  }
);

const initialState = {
  packages: [],
  status: "idle",
  error: null,
};

const productsListSlice = createSlice({
  name: "packagesList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPackages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPackages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.packages = action.payload;
      })
      .addCase(fetchPackages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { actions } = productsListSlice;
export default productsListSlice.reducer;
