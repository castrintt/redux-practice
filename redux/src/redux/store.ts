import { configureStore } from "@reduxjs/toolkit";
import sliceLanguages from "./sliceLanguages";
import sliceCounter from "./sliceCounter";

const store = configureStore({
  reducer: {
    languages: sliceLanguages,
    counter: sliceCounter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
