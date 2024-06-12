import { useRef } from "react";
import { useRosContext } from "../../RosProvider";
import ROSLIB from "roslib";

export const useRosTopics = () => {
  const ros = useRosContext();

  const setPositionTopic = useRef(
    new ROSLIB.Topic({
      ros: ros!,
      name: "/set_position",
      messageType: "std_msgs/Float32MultiArray",
    })
  );

  const stopMotor1Topic = useRef(
    new ROSLIB.Topic({
      ros: ros!,
      name: "/stop_motor1",
      messageType: "std_msgs/Empty",
    })
  );

  const stopMotor2Topic = useRef(
    new ROSLIB.Topic({
      ros: ros!,
      name: "/stop_motor2",
      messageType: "std_msgs/Empty",
    })
  );

  const stopMotor3Topic = useRef(
    new ROSLIB.Topic({
      ros: ros!,
      name: "/stop_motor3",
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
    stopMotor1Topic: stopMotor1Topic.current,
    stopMotor2Topic: stopMotor2Topic.current,
    stopMotor3Topic: stopMotor3Topic.current,
    setMotor1AngleTopic: setMotor1AngleTopic.current,
    setMotor2AngleTopic: setMotor2AngleTopic.current,
    setMotor3AngleTopic: setMotor3AngleTopic.current,
    setPositionTopic: setPositionTopic.current
  };
};
