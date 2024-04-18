import { configureStore } from "@reduxjs/toolkit";
import queriesSlice from "../features/queriesSlice";

export const store = configureStore({
  reducer: {
    queries: queriesSlice,
  },
});
