import { Box, Grid } from "@mui/material";
import { MotorController, MotorInfo } from "../components";
import { MainContainer } from "./styles";

export const PlotsPage = () => {
  return (
    <MainContainer>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <MotorInfo />
        </Grid>
        <Grid item xs={4} position={"fixed"} right={0} bottom={0} top={60}>
            <MotorController />
        </Grid>
      </Grid>
    </MainContainer>
  );
};
