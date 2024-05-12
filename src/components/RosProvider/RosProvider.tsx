import { ReactNode, useEffect, useState } from "react";
import { rosContext } from "./context";
import ROSLIB from "roslib";
import { ROS_WEBSOCKET_URL } from "./constants";
import { setData } from "../../redux/features/motorInfo/motorInfoSlice";
import { useAppDispatch } from "../../redux";

type RosProviderProps = {
  children: ReactNode;
};
export const RosProvider = ({ children }: RosProviderProps) => {
  const [ros] = useState(() => {
    return new ROSLIB.Ros({ url: ROS_WEBSOCKET_URL });
  });

  var motorMonitoringSub = new ROSLIB.Topic({
    ros: ros,
    name: "/monitoring",
    messageType: "std_msgs/Float32MultiArray",
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    motorMonitoringSub.subscribe((message: any) => {
      dispatch(setData(message.data));
    });

    return () => {
      motorMonitoringSub.unsubscribe();
    }
  }, []);
  return <rosContext.Provider value={ros}>{children}</rosContext.Provider>;
};