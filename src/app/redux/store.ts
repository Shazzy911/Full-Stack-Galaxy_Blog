
import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer 
  }
});

export type RootState = ReturnType<typeof menuReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
