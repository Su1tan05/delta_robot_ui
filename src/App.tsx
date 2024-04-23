import { Grid } from "@mui/material";
import Iframe from 'react-iframe';

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
      {/* <Iframe url="http://localhost:1111/"
        width="1200px"
        height="600px"
        id=""
        className=""
        display="block"
        position="relative"/> */}
    </RosProvider>
  );
}
