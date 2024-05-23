import { Grid } from "@mui/material";
import { MotorController, MotorInfo, PidTuning, TrajectoryController } from "../components";

export const ManualControllPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Grid item xs={12}>
          <TrajectoryController />
        </Grid>
        <Grid item xs={12}>
          <MotorController />
        </Grid>
        <Grid item xs={12}>
          <PidTuning />
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <MotorInfo />
      </Grid>
    </Grid>
  );
};
