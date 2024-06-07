import { useEffect } from "react";
import { PidTuning, SetupIP } from "../components";
import { MainContainer } from "./styles";
import { useAppDispatch } from "../redux";
import { setPIDValues } from "../redux/features/motorInfo/pidControllerSlice";
import { Box, Divider, Grid, Typography } from "@mui/material";

export const SettingsPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getMotorValuesFromLS = (motorValuesKey: string) => {
      return (
        localStorage
          .getItem(motorValuesKey)
          ?.split(",")
          .map((item) => parseInt(item, 10)) ?? [0, 0, 0]
      );
    };

    const pidValues = [
      getMotorValuesFromLS("motor1PIDValues"),
      getMotorValuesFromLS("motor2PIDValues"),
      getMotorValuesFromLS("motor3PIDValues"),
    ] as [number, number, number][];

    dispatch(setPIDValues(pidValues));
  }, []);

  return (
    <MainContainer>
      <Grid container spacing={3}>
        <Grid item xs={5} alignContent="center" marginLeft={15}>
          <Typography variant="h4">Настройка PID регулятора</Typography>
          <PidTuning />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={6}>
        <Typography variant="h4">Настройка подключения к ROS</Typography>
        <SetupIP/>
        </Grid>
      </Grid>
    </MainContainer>
  );
};
