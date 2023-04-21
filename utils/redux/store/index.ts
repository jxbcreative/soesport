import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slice/ProductSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      product: productSlice,
    },
  });
}

export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
