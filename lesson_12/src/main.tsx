import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import './index.css'

import { store } from "./store/store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root") as HTMLBodyElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
