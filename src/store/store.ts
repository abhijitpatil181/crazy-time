import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducer";

const { VITE_IS_LOCAL } = import.meta.env;

export const store = configureStore({
  reducer,
  devTools: VITE_IS_LOCAL === "true",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
