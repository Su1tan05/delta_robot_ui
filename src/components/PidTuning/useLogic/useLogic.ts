import { useEffect, useState } from "react";
import { useRosContext } from "../../RosProvider";
import ROSLIB from "roslib";

export const useLogic = () => {
  const rosContextResult = useRosContext();
  const ros = rosContextResult;

  if (!ros) {
    return;
  }

  const pidTuningTopic = new ROSLIB.Topic({
    ros: ros,
    name: "/pid_tunings",
    messageType: "geometry_msgs/Vector3",
  });

  const [message, setMessage] = useState(() => {
    return new ROSLIB.Message({
      x: 0,
      y: 0,
      z: 0,
    });
  });

  useEffect(() => {
    console.log("Publishing message to /pid_tuning topic: ", message);
    pidTuningTopic.publish(message);
  }, [message]);

  return {setMessage}
};
