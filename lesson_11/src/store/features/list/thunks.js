import { createAsyncThunk } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./constants";

import service from "../../../services/posts";

const thunks = {
  fetchList: createAsyncThunk(
    `${SLICE_NAME}/fetchList`,
    async (data, { rejectWithValue }) => {
      try {
        return await service.get();
      } catch (err) {
        if (!err.response) throw err;
        return rejectWithValue(err.response.data);
      }
    }
  ),
  fetchListItemCompleted: createAsyncThunk(
    `${SLICE_NAME}/fetchListItemCompleted`,
    async (item, { rejectWithValue, dispatch }) => {
      try {
        await service.put(item.id, {
          ...item,
          completed: !item.completed,
        });
        dispatch(thunks.fetchList());
      } catch (err) {
        if (!err.response) throw err;
        return rejectWithValue(err.response.data);
      }
    }
  ),
};

export default thunks;
