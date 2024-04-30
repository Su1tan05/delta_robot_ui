import { useEffect } from "react";
import { CircleArray } from "../../../models/CircleArray";
import { useSelector } from "react-redux";
import type { RootState } from "../../../app/store";

type MotorMonitoringDTO = {
  x: number;
  y: number;
  z: number;
};
const motor1CircleArray = new CircleArray<MotorMonitoringDTO>(10);
const motor2CircleArray = new CircleArray<MotorMonitoringDTO>(10);
const motor3CircleArray = new CircleArray<MotorMonitoringDTO>(10);

export const useLogic = () => {
  const initialTheta1 = useSelector(
    (state: RootState) => state.motorinfo.initialTheta1
  );
  const realTheta1 = useSelector(
    (state: RootState) => state.motorinfo.realTheta1
  );
  const initialTheta2 = useSelector(
    (state: RootState) => state.motorinfo.initialTheta2
  );
  const realTheta2 = useSelector(
    (state: RootState) => state.motorinfo.realTheta2
  );
  const initialTheta3 = useSelector(
    (state: RootState) => state.motorinfo.initialTheta3
  );
  const realTheta3 = useSelector(
    (state: RootState) => state.motorinfo.realTheta3
  );

  const time = useSelector((state: RootState) => state.motorinfo.time);

  motor1CircleArray.add({
    x: initialTheta1,
    y: realTheta1,
    z: time,
  });

  motor2CircleArray.add({
    x: initialTheta2,
    y: realTheta2,
    z: time,
  });

  motor3CircleArray.add({
    x: initialTheta3,
    y: realTheta3,
    z: time,
  });

  const viewMotor1Data = {
    specifiedAngle: motor1CircleArray.state.map((item) => item.x),
    realAngle: motor1CircleArray.state.map((item) => item.y),
    time: motor1CircleArray.state.map((item) => item.z),
  };

  const viewMotor2Data = {
    specifiedAngle: motor2CircleArray.state.map((item) => item.x),
    realAngle: motor2CircleArray.state.map((item) => item.y),
    time: motor2CircleArray.state.map((item) => item.z),
  };

  const viewMotor3Data = {
    specifiedAngle: motor3CircleArray.state.map((item) => item.x),
    realAngle: motor3CircleArray.state.map((item) => item.y),
    time: motor3CircleArray.state.map((item) => item.z),
  };

  return {
    motorData: {
      initialTheta1,
      realTheta1,
      initialTheta2,
      realTheta2,
      initialTheta3,
      realTheta3,
    },
    viewMotor1Data,
    viewMotor2Data,
    viewMotor3Data,
  };
};
