import { Box, Button, Grid } from "@mui/material";
import {
  ActionButtons,
  MotorController,
  MotorInfo,
  Plot3D,
  UploadFile,
  useRosContext,
} from "../components";
import {
  AditionalButtonsContainer,
  MainContainer,
  SeparationContainer,
} from "./styles";
import Divider from "@mui/material/Divider";
import { useAppDispatch, useAppSelector } from "../redux";
import { useRef } from "react";
import ROSLIB from "roslib";
import { setClearPlots } from "../redux/features/motorInfo/appDataSlice";

export const HomePage = () => {
  const ros = useRosContext();

  const trajectoryInfo = useAppSelector((state) => state.trajectoryInfo);

  const dispatch = useAppDispatch();

  const setMotor2AngleTopic = useRef(
    new ROSLIB.Topic({
      ros: ros!,
      name: "/trajectory_points",
      messageType: "std_msgs/String",
    })
  ).current;

  const handleClickPlotTrajectoryButton = () => {
    if(trajectoryInfo.trajectoryPoints.length > 1) {
      setMotor2AngleTopic.publish(
        new ROSLIB.Message({ data: JSON.stringify(trajectoryInfo) })
      );
      dispatch(setClearPlots(true));
    }
  };

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
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleClickPlotTrajectoryButton}
                >
                  Построить графики трактории
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: "5px" }}
                  fullWidth
                >
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
        </Grid>
      </Grid>
    </MainContainer>
  );
};
