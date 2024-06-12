import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  banners: [],
  status: "idle",
  error: null,
};

// Async thunk to fetch banners
export const fetchBanners = createAsyncThunk(
  "banners/fetchBanners",
  async () => {
    const response = await axios.get("https://admin.corelabs.work/api/banners");
    // console.log(response.data);
    return response.data.banners; // Return the banners array
  }
);

const bannerSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBanners.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBanners.fulfilled, (state, action) => {
        state.status = "succeeded";
        // console.log("Fetched banners:", action.payload);
        state.banners = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchBanners.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default bannerSlice.reducer;
