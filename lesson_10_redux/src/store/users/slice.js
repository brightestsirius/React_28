import { createSlice } from "@reduxjs/toolkit";
import { featureName } from "./constants";
import thunks from "./thunk";

const initialState = {
  users: [],
};

export const slice = createSlice({
  name: featureName,
  initialState,
  reducers: {
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunks.getUsers.fulfilled, (state, { payload }) => {
      state.users = payload;
    });
  },
});

export default slice.reducer;
