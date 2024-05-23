import { useEffect } from "react";
import { PidTuning } from "../components";
import { MainContainer } from "./styles";
import { useAppDispatch } from "../redux";
import { setPIDValues } from "../redux/features/motorInfo/pidControllerSlice";

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
      <PidTuning />
    </MainContainer>
  );
};
