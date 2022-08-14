import { createSlice } from "@reduxjs/toolkit";
interface Counter {
  counter: number;
}
const INITIAL_STATE: Counter = {
  counter: 0,
};
const sliceCounter = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    increment: (state: Counter): void => {
      state.counter + 1;
    },
    decrement: (state: Counter): void => {
      if (state.counter === 0) {
        state.counter;
      } else {
        state.counter - 1;
      }
    },
  },
});
// usado no store
export default sliceCounter.reducer;
export const { increment, decrement } = sliceCounter.actions;

