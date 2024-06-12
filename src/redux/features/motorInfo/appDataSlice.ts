import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AppData {
  attachedFileName: string | undefined;
  websocketIP: string | undefined;
  isErrorAlectOpen: boolean;
  isRealTimePlotEnabled: boolean;
  clearPlots: boolean;
}

const initialState: AppData = {
  attachedFileName: undefined,
  websocketIP: undefined,
  isErrorAlectOpen: false,
  isRealTimePlotEnabled: true,
  clearPlots: false,
};

export const appDataSlice = createSlice({
  name: "appDataSlice",
  initialState,
  reducers: {
    resetAttachedFile: (state) => {
      state.attachedFileName = undefined;
    },

    setRealTimePlotStatus: (state, action: PayloadAction<boolean>) => {
      state.isRealTimePlotEnabled = action.payload;
    },

    setClearPlots: (state, action: PayloadAction<boolean>) => {
      state.clearPlots = action.payload;
    },

    setOpenErrorAlert: (state, action: PayloadAction<boolean>) => {
      state.isErrorAlectOpen = action.payload;
    },

    setWebsocketIP: (state, action: PayloadAction<string | undefined>) => {
      state.websocketIP = action.payload;
    },

    setAttachedFileName: (state, action: PayloadAction<string | undefined>) => {
      state.attachedFileName = action.payload;
    },
  },
});

export const {
  setAttachedFileName,
  resetAttachedFile,
  setWebsocketIP,
  setOpenErrorAlert,
  setRealTimePlotStatus,
  setClearPlots,
} = appDataSlice.actions;

export default appDataSlice.reducer;
