import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const name = "@@SEARCH";
const initialState = "";

const searchSlice = createSlice({
  name,
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setText } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;

export const selectSearchText = (state: RootState) => state.search;
