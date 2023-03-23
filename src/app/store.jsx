import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import { persistStore, persistReducer } from "redux-persist";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
