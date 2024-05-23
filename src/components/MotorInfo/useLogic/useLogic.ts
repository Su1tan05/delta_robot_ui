import { CircleArray } from "../../../models/CircleArray";
import { useAppSelector } from "../../../redux";

type MotorMonitoringDTO = {
  x: number;
  y: number;
  z: number;
};


type MotorMonitoringDTONEW = {
  x: number;
  y: number;
  z: number;
  pwm: number;
};

const motor1CircleArray = new CircleArray<MotorMonitoringDTO>(50);
const motor2CircleArray = new CircleArray<MotorMonitoringDTO>(50);
const motor3CircleArray = new CircleArray<MotorMonitoringDTONEW>(50);

export const useLogic = () => {
  const initialTheta1 = useAppSelector(
    (state) => state.motorinfo.initialTheta1
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

  const motor3PWM = useAppSelector(
    (state) => state.motorinfo.pwm3
  );

  const time = useAppSelector((state) => state.motorinfo.time);

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
    pwm: motor3PWM
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
    pwm: motor3CircleArray.state.map((item)=> item.pwm)
  };

  return {
    motorData: {
      initialTheta1,
      realTheta1,
      initialTheta2,
      realTheta2,
      initialTheta3,
      realTheta3,
      motor3PWM
    },
    viewMotor1Data,
    viewMotor2Data,
    viewMotor3Data,
  };
};
