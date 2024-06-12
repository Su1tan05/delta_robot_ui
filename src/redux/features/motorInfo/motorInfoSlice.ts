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

  
  calculatedTheta1: number[]
  calculatedTheta2: number[]
  calculatedTheta3: number[]
  calculatedTime: number[]
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
  calculatedTheta1: [],
  calculatedTheta2: [],
  calculatedTheta3: [],
  calculatedTime: [],
};

const parseDataString = (dataString: string): number[][] => {
  // Remove the outer double quotes and split the string into an array of strings
  const arrayStrings = dataString.slice(1, -1).split('], [');

  // Further process each array string to convert it into an array of numbers
  return arrayStrings.map(arrayStr => {
    // Remove any remaining brackets and whitespace, then split by comma
    return arrayStr.replace(/[\[\]]/g, '').split(',').map(Number);
  });
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

    setCalculatedTrajectoryData: (state, action: PayloadAction<string>) => {
      const data = parseDataString(action.payload);

      state.calculatedTheta1 = data[0];
      state.calculatedTheta2 = data[1];
      state.calculatedTheta3 = data[2];
      state.calculatedTime = data[3];
    },

    setPositionData: (state, action: PayloadAction<number[]>) => {
      state.x = action.payload[0] ?? state.x;
      state.y = action.payload[1] ?? state.y;
      state.z = action.payload[2] ?? state.z;
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
  setCalculatedTrajectoryData,
  setPositionData
} = motorInfoSlice.actions;

export default motorInfoSlice.reducer;