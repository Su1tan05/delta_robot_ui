import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PidControllerModel {
  motor1PIDValues: [number, number, number];
  motor2PIDValues: [number, number, number];
  motor3PIDValues: [number, number, number];
}

const initialState: PidControllerModel = {
  motor1PIDValues: [0, 0, 0],
  motor2PIDValues: [0, 0, 0],
  motor3PIDValues: [0, 0, 0],
};

export const pidControllerSlice = createSlice({
  name: "pidControllerSlice",
  initialState,
  reducers: {
    resetMotor1PIDValues: (state) => {
      state.motor1PIDValues = [0, 0, 0];
    },

    resetMotor2PIDValues: (state) => {
      state.motor2PIDValues = [0, 0, 0];
    },

    resetMotor3PIDValues: (state) => {
      state.motor3PIDValues = [0, 0, 0];
    },

    setMotor1KpValue(state, action: PayloadAction<number>) {
      state.motor1PIDValues[0] = action.payload;
    },

    setMotor1KiValue(state, action: PayloadAction<number>) {
      state.motor1PIDValues[1] = action.payload;
    },

    setMotor1KdValue(state, action: PayloadAction<number>) {
      state.motor1PIDValues[2] = action.payload;
    },

    setMotor2KpValue(state, action: PayloadAction<number>) {
      state.motor2PIDValues[0] = action.payload;
    },

    setMotor2KiValue(state, action: PayloadAction<number>) {
      state.motor2PIDValues[1] = action.payload;
    },

    setMotor2KdValue(state, action: PayloadAction<number>) {
      state.motor2PIDValues[2] = action.payload;
    },

    setMotor3KpValue(state, action: PayloadAction<number>) {
      state.motor3PIDValues[0] = action.payload;
    },

    setMotor3KiValue(state, action: PayloadAction<number>) {
      state.motor3PIDValues[1] = action.payload;
    },

    setMotor3KdValue(state, action: PayloadAction<number>) {
      state.motor3PIDValues[2] = action.payload;
    },

    setPIDValues(state, action: PayloadAction<[number, number, number][]>) {
      state.motor1PIDValues = action.payload[0];
      state.motor2PIDValues = action.payload[1];
      state.motor3PIDValues = action.payload[2];
    },
  },
});

export const {
  resetMotor1PIDValues,
  resetMotor2PIDValues,
  resetMotor3PIDValues,
  setMotor1KpValue,
  setMotor1KiValue,
  setMotor1KdValue,
  setMotor2KpValue,
  setMotor2KiValue,
  setMotor2KdValue,
  setMotor3KpValue,
  setMotor3KiValue,
  setMotor3KdValue,
  setPIDValues,
} = pidControllerSlice.actions;

export default pidControllerSlice.reducer;
