import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  TrajectoryPoint,
  TrajectoryPointsModel,
} from "../../../models/TrajectoryPointsModel";

const initialState: TrajectoryPointsModel = {
  id: 0,
  trajectoryPoints: [[0, 0, 0]],
  moveRobot: false,
};

export const uploadFileSlice = createSlice({
  name: "uploadFileSlice",
  initialState,
  reducers: {
    removeDataByIndex: (state, action: PayloadAction<number>) => {
      // создается новый массив trajectoryPoints исключая элемены с индексом action.payload
      state.trajectoryPoints = state.trajectoryPoints.filter(
        (_, index) => index !== action.payload
      );
    },

    addTrajectoryPoint: (state, action: PayloadAction<TrajectoryPoint>) => {
      state.trajectoryPoints.push(action.payload);
    },

    editTrajectoryPoint: (state, action: PayloadAction<{ index: number; point: TrajectoryPoint }>) => {
      const { index, point } = action.payload;
      state.trajectoryPoints[index] = point;
    },

    resetTrajectoryPoints: (state) => {
      state.id = 0;
      state.trajectoryPoints = [[0, 0, 0]];
      state.moveRobot = false;
    },

    setTrajectoryPoints: (
      state,
      action: PayloadAction<TrajectoryPointsModel>
    ) => {
      (state.id = action.payload.id),
        (state.trajectoryPoints = action.payload.trajectoryPoints),
        (state.moveRobot = action.payload.moveRobot);
    },
  },
});

export const {
  setTrajectoryPoints,
  resetTrajectoryPoints,
  removeDataByIndex,
  addTrajectoryPoint,
  editTrajectoryPoint
} = uploadFileSlice.actions;

export default uploadFileSlice.reducer;
