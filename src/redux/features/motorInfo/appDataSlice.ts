import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AppData {
    attachedFileName: string | undefined
}

const initialState: AppData = {
  attachedFileName: undefined
};

export const appDataSlice = createSlice({
  name: "appDataSlice",
  initialState,
  reducers: {
    resetAttachedFile: (state) => {
      state.attachedFileName = undefined
    },

    setAttachedFileName: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
        state.attachedFileName = action.payload;
    },
  },
});

export const { setAttachedFileName, resetAttachedFile } = appDataSlice.actions;

export default appDataSlice.reducer;
