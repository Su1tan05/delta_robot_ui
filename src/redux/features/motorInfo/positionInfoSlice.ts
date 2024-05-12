import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PositionInfoState {
  x: number;
  y: number;
  z: number;
}

const initialState: PositionInfoState = {
  x: 0,
  y: 0,
  z: 0,
};

export const positionInfoSlice = createSlice({
  name: "positionInfo",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<PositionInfoState>) => {
      state = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setValue } = positionInfoSlice.actions;

export default positionInfoSlice.reducer;
