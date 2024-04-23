import { ReactNode, useState } from "react";
import { rosContext } from "./context";
import ROSLIB from "roslib";
import { ROS_WEBSOCKET_URL } from "./constants";

type RosProviderProps = {
  children: ReactNode;
};
export const RosProvider = ({ children }: RosProviderProps) => {
    const [ros] = useState(() => {
        return new ROSLIB.Ros({ url: ROS_WEBSOCKET_URL });
    })
    return <rosContext.Provider value={ros}>{children}</rosContext.Provider>;
};