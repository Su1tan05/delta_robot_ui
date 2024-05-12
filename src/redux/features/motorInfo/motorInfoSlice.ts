import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MotorInfoState {
  initialTheta1: number;
  initialTheta2: number;
  initialTheta3: number;
  realTheta1: number;
  realTheta2: number;
  realTheta3: number;
  x: number;
  y: number;
  z: number;
  pwm1: number;
  pwm2: number;
  pwm3: number;
  time: number;
}

const initialState: MotorInfoState = {
  initialTheta1: 0,
  initialTheta2: 0,
  initialTheta3: 0,
  realTheta1: 0,
  realTheta2: 0,
  realTheta3: 0,
  x: 0,
  y: 0,
  z: 0,
  pwm1: 0,
  pwm2: 0,
  pwm3: 0,
  time: 0,
};

export const motorInfoSlice = createSlice({
  name: "motorInfo",
  initialState,
  reducers: {
    resetAll: (state) => {
      state.realTheta1 = 0;
      state.realTheta2 = 0;
      state.realTheta3 = 0;
      state.x = 0;
      state.y = 0;
      state.z = 0;
      state.pwm1 = 0;
      state.pwm2 = 0;
      state.pwm3 = 0;
    },

    setData: (state, action: PayloadAction<number[]>) => {
      state.initialTheta1 = action.payload[0] ?? state.initialTheta1;
      state.realTheta1 = action.payload[1] ?? state.realTheta1;
      state.pwm1 = action.payload[2] ?? state.pwm1;

      state.initialTheta2 = action.payload[3] ?? state.initialTheta2;
      state.realTheta2 = action.payload[4] ?? state.realTheta2;
      state.pwm2 = action.payload[5] ?? state.pwm2;

      state.initialTheta3 = action.payload[6] ?? state.initialTheta3;
      state.realTheta3 = action.payload[7] ?? state.realTheta3;
      state.pwm3 = action.payload[8] ?? state.pwm3;

      state.time = action.payload[9] ?? state.time;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setData,
} = motorInfoSlice.actions;

export default motorInfoSlice.reducer;
