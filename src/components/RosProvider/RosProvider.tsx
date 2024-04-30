import { ReactNode, useState } from "react";
import { rosContext } from "./context";
import ROSLIB from "roslib";
import { ROS_WEBSOCKET_URL } from "./constants";
import { useDispatch } from "react-redux";
import { setData } from "../../features/motorInfo/motorInfoSlice";

type RosProviderProps = {
  children: ReactNode;
};
export const RosProvider = ({ children }: RosProviderProps) => {
    const [ros] = useState(() => {
        return new ROSLIB.Ros({ url: ROS_WEBSOCKET_URL });
    })

    var motor1MonitoringSub = new ROSLIB.Topic({
      ros: ros,
      name: "/monitoring",
      messageType: "std_msgs/Float32MultiArray",
    });

    const dispatch = useDispatch();

    motor1MonitoringSub.subscribe((message: any) => {
      console.log(message);
      dispatch(
        setData(message.data),
      );
    });

    return <rosContext.Provider value={ros}>{children}</rosContext.Provider>;
};