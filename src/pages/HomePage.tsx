import { Box, Button, Grid } from "@mui/material";
import {
  ActionButtons,
  MotorController,
  MotorInfo,
  Plot3D,
  UploadFile,
} from "../components";
import {
  AditionalButtonsContainer,
  MainContainer,
  SeparationContainer,
} from "./styles";
import Divider from "@mui/material/Divider";

export const HomePage = () => {
  return (
    <MainContainer>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <SeparationContainer margin="0 0 0 30px">
            <Grid item xs={12}>
              <ActionButtons />
              <Divider />
              <UploadFile />
              <Divider />
              <AditionalButtonsContainer>
                <Button variant="contained" color="primary" fullWidth>
                  Построить графики трактории
                </Button>
                <Button variant="contained" color="primary" sx={{marginTop: "5px"}} fullWidth>
                  Добавить точку
                </Button>
              </AditionalButtonsContainer>
            </Grid>
          </SeparationContainer>
          <SeparationContainer margin="10px 0 0 30px">
            <MotorController />
          </SeparationContainer>
        </Grid>
        <Grid item xs={8}>
          <SeparationContainer margin="0 30px 0 0">
            <MotorInfo />
          </SeparationContainer>
          {/* <SeparationContainer margin="10px 30px 0 0">
            <Grid item xs={8}>
              <Plot3D />
            </Grid>
            <Grid item xs={4}>
              motor real time data
            </Grid>
          </SeparationContainer> */}
        </Grid>
      </Grid>
    </MainContainer>
  );
};
