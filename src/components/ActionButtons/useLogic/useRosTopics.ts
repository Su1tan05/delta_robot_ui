import { useRef } from "react";
import { useRosContext } from "../../RosProvider";
import ROSLIB from "roslib";

export const useRosTopics = () => {
  const ros = useRosContext();

  const resetAllTopic = useRef(
    new ROSLIB.Topic({
      ros: ros!,
      name: "/reset_all",
      messageType: "std_msgs/Empty",
    })
  );

  const setMotor1AngleTopic = useRef(
    new ROSLIB.Topic({
      ros: ros!,
      name: "/set_angle_motor1",
      messageType: "std_msgs/Float32",
    })
  );

  const setMotor2AngleTopic = useRef(
    new ROSLIB.Topic({
      ros: ros!,
      name: "/set_angle_motor2",
      messageType: "std_msgs/Float32",
    })
  );

  const setMotor3AngleTopic = useRef(
    new ROSLIB.Topic({
      ros: ros!,
      name: "/set_angle_motor3",
      messageType: "std_msgs/Float32",
    })
  );

  return {
    resetAllTopic: resetAllTopic.current,
    setMotor1AngleTopic: setMotor1AngleTopic.current,
    setMotor2AngleTopic: setMotor2AngleTopic.current,
    setMotor3AngleTopic: setMotor3AngleTopic.current,
  };
};
