import { Grid } from "@mui/material";
import {
  PidTuning,
  RosProvider,
  MotorInfo,
  MotorController,
} from "./components";

export function App() {
  return (
    <RosProvider>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Grid item xs={12}>
            <PidTuning />
          </Grid>
          <Grid item xs={12}>
            <MotorController />
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <MotorInfo />
        </Grid>
      </Grid>
    </RosProvider>
  );
}
