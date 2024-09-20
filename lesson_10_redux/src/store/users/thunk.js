import { createAsyncThunk } from "@reduxjs/toolkit";
import { featureName } from "./constants";

import service from "./../../services/users";

const thunks = {
  getUsers: createAsyncThunk(`${featureName}/getUsers`, async () => {
    return await service.get();
  }),
};
export default thunks;
