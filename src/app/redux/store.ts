
import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import toggleReducer from "./toggleSlice";
const store = configureStore({
  reducer: {
    menu: menuReducer,
    toggle: toggleReducer,
  }
});

export type RootState = ReturnType<typeof menuReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
