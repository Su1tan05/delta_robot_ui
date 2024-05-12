import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TrajectoryPointsModel } from "../../../models/TrajectoryPointsModel";

const initialState: TrajectoryPointsModel = {
  id: 0,
  trajectoryPoints: [[0, 0, 0]],
  moveRobot: false,
};

export const uploadFileSlice = createSlice({
  name: "uploadFileSlice",
  initialState,
  reducers: {
    resetAll: (state) => {
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

export const { setTrajectoryPoints } = uploadFileSlice.actions;

export default uploadFileSlice.reducer;
