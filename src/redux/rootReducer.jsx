import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import bannerReducer from "./Slices/bannerSlice";
import sliderReducer from "./Slices/sliderSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  banners: bannerReducer,
  sliders: sliderReducer,
});

export default rootReducer;
