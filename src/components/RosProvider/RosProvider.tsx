import { ReactNode, useEffect, useRef, useState } from "react";
import { rosContext } from "./context";
import ROSLIB from "roslib";
import { setData } from "../../redux/features/motorInfo/motorInfoSlice";
import { useAppDispatch, useAppSelector } from "../../redux";

type RosProviderProps = {
  children: ReactNode;
};
export const RosProvider = ({ children }: RosProviderProps) => {
  const websocketIP = useAppSelector((state) => state.appData.websocketIP);

  const dispatch = useAppDispatch();

  const [ros] = useState<ROSLIB.Ros>(new ROSLIB.Ros({}));

  var motorMonitoringSub = useRef(
    new ROSLIB.Topic({
      ros: ros,
      name: "/monitoring",
      messageType: "std_msgs/Float32MultiArray",
    })
  ).current;

  useEffect(() => {
    motorMonitoringSub.subscribe((message: any) => {
      dispatch(setData(message.data));
    });

    return () => {
      motorMonitoringSub.unsubscribe();
    };
  }, [ros]);

  return <rosContext.Provider value={ros}>{children}</rosContext.Provider>;
};
