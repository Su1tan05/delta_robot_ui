import { Button, Grid } from "@mui/material";
import { ActionButtons, MotorController, Plot3D, UploadFile } from "../components";
import { AditionalButtonsContainer, MainContainer, SeparationContainer } from "./styles";
import Divider from "@mui/material/Divider";

export const HomePage = () => {
  return (
    <MainContainer>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <SeparationContainer margin="0 0 0 30px">
          <Grid item xs={12}>
            <ActionButtons />
            <Divider />
            <UploadFile />
            <Divider />
            <AditionalButtonsContainer>
              <Button variant="contained" color="primary" fullWidth>
                Добавить точку
              </Button>
            </AditionalButtonsContainer>
            <MotorController/>
            </Grid>
        </SeparationContainer>
      </Grid>
      <Grid item xs={6}>
        <SeparationContainer margin="0 30px 0 0">
          <Grid item xs={8}>
            <Plot3D />
          </Grid>
          <Grid item xs={4}>
            motor real time data
          </Grid>
        </SeparationContainer>
      </Grid>
    </Grid>
    </MainContainer>
  );
};
