import { useEffect, useRef, useState } from "react";
import { useRosContext } from "../../RosProvider";
import ROSLIB from "roslib";
import { CircleArray } from "../../../models/CircleArray";

type MotorMonitoringDTO = {
  x: number;
  y: number;
  z: number;
};
const motor1CircleArray = new CircleArray<MotorMonitoringDTO>(10);
const motor2CircleArray = new CircleArray<MotorMonitoringDTO>(10);
const motor3CircleArray = new CircleArray<MotorMonitoringDTO>(10);

export const useLogic = () => {
  const ros = useRef(useRosContext());
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

    var motor1MonitoringSub = new ROSLIB.Topic({
      ros: ros.current!,
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
      ros: ros.current!,
      name: "/motor2_monitoring",
      messageType: "geometry_msgs/Vector3",
    });

    motor2MonitoringSub.subscribe(function (message: any) {
        setMotor2Monitoring({
          x: message.x,
          y: message.y,
          z: message.z,
        });
        motor2CircleArray.add({
          x: message.x,
          y: message.y,
          z: message.z,
        });
    });

    var motor3MonitoringSub = new ROSLIB.Topic({
      ros: ros.current!,
      name: "/motor3_monitoring",
      messageType: "geometry_msgs/Vector3",
    });

    motor3MonitoringSub.subscribe(function (message: any) {
        setMotor3Monitoring({
          x: message.x,
          y: message.y,
          z: message.z,
        });
        motor3CircleArray.add({
          x: message.x,
          y: message.y,
          z: message.z,
        });
    });

    const handleUnsubscribe = () => {
      motor1MonitoringSub.unsubscribe();
      motor2MonitoringSub.unsubscribe();
      motor3MonitoringSub.unsubscribe();
    }

    return () => {
      handleUnsubscribe();
    };
  }, []);

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
    motor1Monitoring,
    motor2Monitoring,
    motor3Monitoring,
    viewMotor1Data,
    viewMotor2Data,
    viewMotor3Data
  };
};
