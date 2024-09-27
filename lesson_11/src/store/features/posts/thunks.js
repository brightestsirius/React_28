import { createAsyncThunk } from "@reduxjs/toolkit";
import { SLICE_NAME } from "./constants";

import service from "../../../services/posts";

const fetchPosts = createAsyncThunk(`${SLICE_NAME}/fetchPosts`, async (value, thunkAPI) => {
    try{
        return await service.get();
    } catch(err){
        if(!err.response) throw err;
        return thunkAPI.rejectWithValue(err.response.data);
    }
});

const fetchPostCompleted = createAsyncThunk(
  `${SLICE_NAME}/fetchPostCompleted`,
  async (item, thunkAPI) => {
    await service.put(item.id, { ...item, completed: !item.completed });
    thunkAPI.dispatch(fetchPosts());
  }
);

const fetchAddPost = createAsyncThunk(`${SLICE_NAME}/fetchAddPost`, async (item, thunkAPI) => {
  try{
    await service.post(item);
    thunkAPI.dispatch(fetchPosts());
  } catch(err){
    if(!err.response) throw err;
        return thunkAPI.rejectWithValue(err.response.data);
  }
})

export { fetchPosts, fetchPostCompleted, fetchAddPost };
