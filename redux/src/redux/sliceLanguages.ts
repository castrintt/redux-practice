import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LanguagesObject = { name: string; favorite: boolean };
interface Languages {
  languages: LanguagesObject[];
}

const INITIAL_STATE: Languages = {
  languages: [
    {
      name: "JAVA",
      favorite: false,
    },
    {
      name: "C#",
      favorite: false,
    },
    {
      name: "RUBY",
      favorite: false,
    },
  ],
};

const sliceLanguages = createSlice({
  name: "languages",
  initialState: INITIAL_STATE,
  reducers: {
    addLanguages(state, { payload }: PayloadAction<string>) {
      state.languages.push({ name: payload, favorite: false });
    },
    toFavorite(state, { payload }: PayloadAction<string>) {
      let change = state.languages.map((values) => {
        if (values.name === payload) {
          return {
            ...values,
            favorite: !values.favorite,
          };
        }
        return values;
      });
      state.languages = change;
      return state;
    },
  },
});

export default sliceLanguages.reducer;
export const { addLanguages, toFavorite } = sliceLanguages.actions;
