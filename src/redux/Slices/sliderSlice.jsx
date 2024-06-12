import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  sliders: [],
  status: "idle",
  error: null,
};

// Async thunk to fetch sliders
export const fetchSliders = createAsyncThunk(
  "sliders/fetchSliders",
  async () => {
    const response = await axios.get("https://admin.corelabs.work/api/sliders");
    // console.log(response.data);
    return response.data.sliders; // Return the sliders array
  }
);

const sliderSlice = createSlice({
  name: "sliders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSliders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSliders.fulfilled, (state, action) => {
        state.status = "succeeded";
        // console.log("Fetched sliders:", action.payload);
        state.sliders = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchSliders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default sliderSlice.reducer;
