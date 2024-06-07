import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AppData {
    attachedFileName: string | undefined
    websocketIP: string | undefined
}

const initialState: AppData = {
  attachedFileName: undefined,
  websocketIP: undefined
};

export const appDataSlice = createSlice({
  name: "appDataSlice",
  initialState,
  reducers: {
    resetAttachedFile: (state) => {
      state.attachedFileName = undefined
    },

    setWebsocketIP: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
        state.websocketIP = action.payload;
    },

    setAttachedFileName: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
        state.attachedFileName = action.payload;
    },
  },
});

export const { setAttachedFileName, resetAttachedFile, setWebsocketIP } = appDataSlice.actions;

export default appDataSlice.reducer;
