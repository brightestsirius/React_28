import { configureStore } from "@reduxjs/toolkit";

import counter from "./counter/counterSlice";
import users from "./users/slice";

export const store = configureStore({
  reducer: {
    counter: counter,
    users: users,
  },
});
