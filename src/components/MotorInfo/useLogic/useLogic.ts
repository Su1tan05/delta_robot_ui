import { useEffect, useState } from "react";
import { CircleArray } from "../../../models/CircleArray";
import { useAppSelector } from "../../../redux";

type PositionMonitoringDTO = {
  x: number;
  y: number;
  z: number;
  time: number;
};

type MotorMonitoringDTO = {
  setpoint: number;
  theta: number
  pwm: number;
  time: number;
};

const motor1CircleArray = new CircleArray<MotorMonitoringDTO>(50);
const motor2CircleArray = new CircleArray<MotorMonitoringDTO>(50);
const motor3CircleArray = new CircleArray<MotorMonitoringDTO>(50);
const positionCircleArray = new CircleArray<PositionMonitoringDTO>(50);

const chartXLimit: number = 30;


export const useLogic = () => {

  const initialTheta1 = useAppSelector(
    (state) => state.motorinfo.initialTheta1
  );

  const x = useAppSelector(
    (state) => state.motorinfo.x
  );

  const y = useAppSelector(
    (state) => state.motorinfo.y
  );

  const z = useAppSelector(
    (state) => state.motorinfo.z
  );

  const realTheta1 = useAppSelector(
    (state) => state.motorinfo.realTheta1
  );
  const initialTheta2 = useAppSelector(
    (state) => state.motorinfo.initialTheta2
  );
  const realTheta2 = useAppSelector(
    (state) => state.motorinfo.realTheta2
  );
  const initialTheta3 = useAppSelector(
    (state) => state.motorinfo.initialTheta3
  );
  const realTheta3 = useAppSelector(
    (state) => state.motorinfo.realTheta3
  );

  const motor1PWM = useAppSelector(
    (state) => state.motorinfo.pwm1
  );

  const motor2PWM = useAppSelector(
    (state) => state.motorinfo.pwm2
  );

  const motor3PWM = useAppSelector(
    (state) => state.motorinfo.pwm3
  );

  const time = useAppSelector((state) => state.motorinfo.time);

  motor1CircleArray.add({
    setpoint: initialTheta1,
    theta: realTheta1,
    time: time,
    pwm: motor1PWM
  });

  motor2CircleArray.add({
    setpoint: initialTheta2,
    theta: realTheta2,
    time: time,
    pwm: motor2PWM
  });

  motor3CircleArray.add({
    setpoint: initialTheta3,
    theta: realTheta3,
    time: time,
    pwm: motor3PWM
  });

  const viewMotor1Data = {
    specifiedAngle: motor1CircleArray.state.map((item) => item.setpoint),
    realAngle: motor1CircleArray.state.map((item) => item.theta),
    time: motor1CircleArray.state.map((item) => item.time),
    pwm: motor1CircleArray.state.map((item) => item.pwm),
  };

  const viewMotor2Data = {
    specifiedAngle: motor2CircleArray.state.map((item) => item.setpoint),
    realAngle: motor2CircleArray.state.map((item) => item.theta),
    time: motor2CircleArray.state.map((item) => item.time),
    pwm: motor2CircleArray.state.map((item) => item.pwm),
  };

  const viewMotor3Data = {
    specifiedAngle: motor3CircleArray.state.map((item) => item.setpoint),
    realAngle: motor3CircleArray.state.map((item) => item.theta),
    time: motor3CircleArray.state.map((item) => item.time),
    pwm: motor3CircleArray.state.map((item) => item.pwm),
  };

  const viewPositionData = {
    x: positionCircleArray.state.map((item) => item.x),
    y: positionCircleArray.state.map((item) => item.y),
    z: positionCircleArray.state.map((item) => item.z),
    time: positionCircleArray.state.map((item) => item.time),
  }

  return {
    motorData: {
      initialTheta1,
      realTheta1,
      initialTheta2,
      realTheta2,
      initialTheta3,
      realTheta3,
      motor1PWM,
      motor2PWM,
      motor3PWM,
      x,
      y,
      z
    },
    viewMotor1Data,
    viewMotor2Data,
    viewMotor3Data,
    viewPositionData
  };
};
