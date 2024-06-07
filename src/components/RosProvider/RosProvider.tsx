import { ReactNode, useEffect, useState } from "react";
import { rosContext } from "./context";
import ROSLIB from "roslib";
import { ROS_WEBSOCKET_URL } from "./constants";
import { setData } from "../../redux/features/motorInfo/motorInfoSlice";
import { useAppDispatch, useAppSelector } from "../../redux";

type RosProviderProps = {
  children: ReactNode;
};
export const RosProvider = ({ children }: RosProviderProps) => {
  const websocketIP = useAppSelector((state) => state.appData.websocketIP);

  const dispatch = useAppDispatch();

  const [ros, setRos] = useState(() => {
    return new ROSLIB.Ros({ url: ROS_WEBSOCKET_URL });
  });

  useEffect(() => {
    setRos(new ROSLIB.Ros({ url: websocketIP }));

    var motorMonitoringSub = new ROSLIB.Topic({
      ros: ros,
      name: "/monitoring",
      messageType: "std_msgs/Float32MultiArray",
    });

    motorMonitoringSub.subscribe((message: any) => {
      dispatch(setData(message.data));
    });

    return () => {
      motorMonitoringSub.unsubscribe();
    };
  }, [websocketIP]);

  return <rosContext.Provider value={ros}>{children}</rosContext.Provider>;
};
