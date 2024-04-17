import { useEffect, useReducer, useState } from "react";
import { useRosContext } from "../../RosProvider";
import ROSLIB from "roslib";
import { CircleArray } from "../../../models/CircleArray";
import { debounce, throttle } from "lodash";

type MotorMonitoringDTO = {
  x: number;
  y: number;
  z: number;
};
const motor1CircleArray = new CircleArray<MotorMonitoringDTO>(10);

export const useLogic = () => {
  const rosContextResult = useRosContext();
  const ros = rosContextResult;
  const [motor1Monitoring, setMotor1Monitoring] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [motor2Monitoring, setMotor2Monitoring] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [motor3Monitoring, setMotor3Monitoring] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    if (!ros) {
      return;
    }

    var motor1MonitoringSub = new ROSLIB.Topic({
      ros: ros,
      name: "/motor1_monitoring",
      messageType: "geometry_msgs/Vector3",
    });

    motor1MonitoringSub.subscribe((message: any) => {
      setMotor1Monitoring({
        x: message.x,
        y: message.y,
        z: message.z,
      });
      motor1CircleArray.add({
        x: message.x,
        y: message.y,
        z: message.z,
      });
    });

    var motor2MonitoringSub = new ROSLIB.Topic({
      ros: ros,
      name: "/motor2_monitoring",
      messageType: "geometry_msgs/Vector3",
    });

    motor2MonitoringSub.subscribe(function (message: any) {
      //   setMotor2Monitoring({
      //     x: message.x,
      //     y: message.y,
      //     z: message.z,
      //   });
    });

    var motor3MonitoringSub = new ROSLIB.Topic({
      ros: ros,
      name: "/motor3_monitoring",
      messageType: "geometry_msgs/Vector3",
    });

    motor3MonitoringSub.subscribe(function (message: any) {
      //   setMotor3Monitoring({
      //     x: message.x,
      //     y: message.y,
      //     z: message.z,
      //   });
    });

    return () => {
      motor1MonitoringSub.unsubscribe();
      motor2MonitoringSub.unsubscribe();
      motor3MonitoringSub.unsubscribe();
    };
  }, []);

  const viewMotor1Data = {
    angle: motor1CircleArray.state.map((item) => item.y),
    time: motor1CircleArray.state.map((item) => item.z),
  };

  return {
    motor1Monitoring,
    motor2Monitoring,
    motor3Monitoring,
    viewMotor1Data,
  };
};
