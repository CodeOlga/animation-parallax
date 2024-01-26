import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { request } from "../utils/common";
import { shopItemCollectionQuery } from "../utils/queries";

const initialState = {
  items: [],
  isLoading: false,
};

export const getShopItems = createAsyncThunk(
  'shopItems/getShopItems',
  async (_, thunkAPI) => {
    try {
      const data = await request(shopItemCollectionQuery);

      const { items } = data.shopItemCollection;

      return items; 

    } catch (err) {
      return thunkAPI.rejectWithValue(err)
  }

})

const shopItemsSlice = createSlice({
  name: 'shopItems',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getShopItems.pending, (state) => {
      state.isLoading = true;
      })
      .addCase(getShopItems.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(getShopItems.rejected, (state) => {
        state.isLoading = false;
      })
  }
});

export default shopItemsSlice.reducer;



