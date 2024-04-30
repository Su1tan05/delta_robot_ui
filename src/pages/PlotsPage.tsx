import { Grid } from "@mui/material";
import { MotorInfo } from "../components";
import { MainContainer } from "./styles";

export const PlotsPage = () => {
  return (
    <MainContainer>
      <Grid container spacing={2}>
        <Grid item xs={6}>
        <MotorInfo/>
        </Grid>
      </Grid>
    </MainContainer>
  );
};
