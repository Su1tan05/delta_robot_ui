import { useEffect, useState } from "react";
import { useRosContext } from "../../RosProvider";
import ROSLIB from "roslib";

export type MotorData = {
  motor1Angle: number;
  motor2Angle: number;
  motor3Angle: number;
};

export const useLogic = () => {
  const rosContextResult = useRosContext();
  const ros = rosContextResult;

  if (!ros) {
    return;
  }

  const stopMotor1 = new ROSLIB.Topic({
    ros: ros,
    name: "/stop_motor1",
    messageType: "std_msgs/Empty",
  });

  const stopMotor2 = new ROSLIB.Topic({
    ros: ros,
    name: "/stop_motor2",
    messageType: "std_msgs/Empty",
  });
  
  const stopMotor3 = new ROSLIB.Topic({
    ros: ros,
    name: "/stop_motor3",
    messageType: "std_msgs/Empty",
  });

  const setMotor1Angle = new ROSLIB.Topic({
    ros: ros,
    name: "/set_angle_motor1",
    messageType: "std_msgs/Float32",
  });

  
  const setMotor2Angle = new ROSLIB.Topic({
    ros: ros,
    name: "/set_angle_motor2",
    messageType: "std_msgs/Float32",
  });

  
  const setMotor3Angle = new ROSLIB.Topic({
    ros: ros,
    name: "/set_angle_motor3",
    messageType: "std_msgs/Float32",
  });

  const [message1, setMessage1] = useState(() => {
    return new ROSLIB.Message({
      data: 0,
    });
  });

  const [message2, setMessage2] = useState(() => {
    return new ROSLIB.Message({
      data: 0,
    });
  });

  const [message3, setMessage3] = useState(() => {
    return new ROSLIB.Message({
      data: 0,
    });
  });

  const stopAllMotors = () => {
    console.log("stop all motors");
    stopMotor1.publish(new ROSLIB.Message({}));
    stopMotor2.publish(new ROSLIB.Message({}));
    stopMotor3.publish(new ROSLIB.Message({}));
  }

  useEffect(() => {
    setMotor1Angle.publish(message1);
  }, [message1]);

  useEffect(() => {
    setMotor2Angle.publish(message2);
  }, [message2]);

  useEffect(() => {
    setMotor3Angle.publish(message3);
  }, [message3]);

  return { setMessage1, setMessage2, setMessage3, stopAllMotors};
};