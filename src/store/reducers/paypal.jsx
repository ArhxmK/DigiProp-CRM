import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosConfig";

const initialState = { k: null };

export const fetchk = createAsyncThunk("cart/fetchApiKey", async () => {
  try {
    const response = await axiosInstance.get("/p/k");
    const { data, success } = response.data;
    // console.log(data)
    if (success) return data;
  } catch (error) {
    console.error(error.message)
    throw error;
  }
});

const cartSlice = createSlice({
  name: "k",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchk.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.k = action.payload;
      })
      .addCase(fetchk.rejected, (state, action) => {
        console.error("Error fetching k:", action.error);
      });
  },
});

export default cartSlice.reducer;
