import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./constants";

import {fetchPosts} from './thunks'

const initialState = {
  posts: [],
  isLoading: false,
  isError: false
};

export const slice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    sortPosts: (state) => {
      state.posts = state.posts.sort((a,b) => b.completed - a.completed)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, {payload}) => {
        state.posts = payload;
        state.isLoading = false;
      })
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.posts = [];
        state.isError = payload;
      })
  },
});

export const { sortPosts } = slice.actions;

export default slice.reducer;