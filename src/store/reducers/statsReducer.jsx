import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosConfig";

export const fetchStats = createAsyncThunk("stats/getstats", async () => {
  try {
    const response = await axiosInstance.get("/order/getstats");
    // console.log(response, 'response')
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  stats: null,
  status: "idle",
  error: null,
};

const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    // Reducer functions (actions) go here
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStats.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStats.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.stats = action.payload.data;
      })
      .addCase(fetchStats.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { actions } = statsSlice;
export default statsSlice.reducer;
