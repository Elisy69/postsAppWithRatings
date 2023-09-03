import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import ratingsReducer from "../features/posts/likesDislikesSlice";
import { jsonplaceholderApi } from "/Users/strashevskyelisey/Desktop/coding/TestTasks/JSONplaceholderStandardTask/src/services/jsonplaceholder.ts";

export const store = configureStore({
  reducer: {
    ratings: ratingsReducer,
    [jsonplaceholderApi.reducerPath]: jsonplaceholderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonplaceholderApi.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
