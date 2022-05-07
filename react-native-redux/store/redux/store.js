import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    favoriteMealsReducer: favoriteReducer,
  },
});
