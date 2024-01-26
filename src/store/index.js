import { configureStore } from "@reduxjs/toolkit";

import tourReducer from "../reducers/tourReducer";
import tracksReducer from "../reducers/tracksReducer";
import newsReducer from "../reducers/newsReducer";
import shopReducer from "../reducers/shopReducer";

export const store = configureStore({
  reducer: {
    tour: tourReducer,
    news: newsReducer,
    tracks: tracksReducer,
    shop: shopReducer,
  },
  devTools: true,
});