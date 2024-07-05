
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import toggleReducer from "./toggleSlice";

// Combine reducers if you have multiple slices
const rootReducer = combineReducers({
  menu: menuReducer,
  toggle: toggleReducer,
  // Add other reducers as needed
});

const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof menuReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
