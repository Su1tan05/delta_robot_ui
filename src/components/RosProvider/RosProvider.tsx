import { ReactNode, useEffect, useRef, useState } from "react";
import { rosContext } from "./context";
import ROSLIB from "roslib";
import {
  setCalculatedTrajectoryData,
  setData,
  setPositionData,
} from "../../redux/features/motorInfo/motorInfoSlice";
import { useAppDispatch, useAppSelector } from "../../redux";
import { setOpenErrorAlert } from "../../redux/features/motorInfo/appDataSlice";

type RosProviderProps = {
  children: ReactNode;
};
export const RosProvider = ({ children }: RosProviderProps) => {
  const websocketIP = useAppSelector((state) => state.appData.websocketIP);

  const isRealTimePlotEnabled = useAppSelector(
    (state) => state.appData.isRealTimePlotEnabled
  );

  const dispatch = useAppDispatch();

  const [ros] = useState<ROSLIB.Ros>(new ROSLIB.Ros({}));

  var motorMonitoringSub = useRef(
    new ROSLIB.Topic({
      ros: ros,
      name: "/monitoring",
      messageType: "std_msgs/Float32MultiArray",
    })
  ).current;

  var robotPositionSub = useRef(
    new ROSLIB.Topic({
      ros: ros,
      name: "/robot_position",
      messageType: "std_msgs/Float32MultiArray",
    })
  ).current;

  var calculatedTrajectorySub = useRef(
    new ROSLIB.Topic({
      ros: ros,
      name: "/calculated_trajectory",
      messageType: "std_msgs/String",
    })
  ).current;

  useEffect(() => {
    ros.on("error", (_e) => dispatch(setOpenErrorAlert(true)));

    if (isRealTimePlotEnabled === true) {
      motorMonitoringSub.subscribe((message: any) => {
        dispatch(setData(message.data));
      });

      robotPositionSub.subscribe((message: any) => {
        dispatch(setPositionData(message.data));
      });

      calculatedTrajectorySub.subscribe((message: any) => {
        dispatch(setCalculatedTrajectoryData(message.data));
      });
    } else if (isRealTimePlotEnabled === false) {
      motorMonitoringSub.unsubscribe();
      robotPositionSub.unadvertise();
      calculatedTrajectorySub.unadvertise();
    }
  }, [ros, isRealTimePlotEnabled]);
  return <rosContext.Provider value={ros}>{children}</rosContext.Provider>;
};
