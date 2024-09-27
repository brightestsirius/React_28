import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAME } from "./constants";

import thunks from "./thunks";

const initialState = {
  list: [],
  isLoading: false,
  isError: false,
};

export const slice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setList: (state, { payload }) => {
      state.list = payload;
    },
    sortList: (state) => {
      state.list = state.list.sort((a, b) => b.completed - a.completed);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunks.fetchList.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.isLoading = false;
      })
      .addCase(thunks.fetchList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(thunks.fetchList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
        state.list = [];
      });
  },
});

export const { setList, sortList } = slice.actions;

export default slice.reducer;