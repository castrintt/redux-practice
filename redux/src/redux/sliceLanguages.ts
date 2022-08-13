import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Languages {
  name: string;
  favorite: boolean;
}

const INITIAL_STATE: Languages[] = [
  {
    name: "java",
    favorite: false,
  },
  {
    name: "c#",
    favorite: false,
  },
  {
    name: "c++",
    favorite: false,
  },
];

const sliceLanguages = createSlice({
  name: "languages",
  initialState: INITIAL_STATE,
  reducers: {
    addLanguages(state, { payload }: PayloadAction<string>) {
      return [...state, { name: payload, favorite: false }];
    },
    toFavorite(state, { payload }: PayloadAction<string>) {
      return state.map((values) =>
        values.name === payload
          ? { ...values, favorite: !values.favorite }
          : values
      );
    },
  },
});

export default sliceLanguages.reducer;
export const { addLanguages, toFavorite } = sliceLanguages.actions;
export const useLanguages = (state: any) => {
  return state.languages as Languages[];
};
