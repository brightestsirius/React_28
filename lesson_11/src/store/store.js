import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import list from "./features/list/slice";
import { usersApi } from "./services/users";

export const store = configureStore({
  reducer: { list, [usersApi.reducerPath]: usersApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

setupListeners(store.dispatch);