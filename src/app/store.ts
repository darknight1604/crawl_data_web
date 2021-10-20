import { configureStore } from "@reduxjs/toolkit";
import { crawlData } from "../services/crawlData";

export const store = configureStore({
  reducer: {
    [crawlData.reducerPath]: crawlData.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(crawlData.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch