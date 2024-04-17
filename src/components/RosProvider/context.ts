import { createContext, useContext } from "react";
import ROSLIB from "roslib";

export const rosContext = createContext<[ROSLIB.Ros, ROSLIB.Topic] | null>(null);

export const useRosContext = () => {
  if (!rosContext) {
    throw new Error("useRosContext must be used within a RosProvider");
  }
  return useContext(rosContext);
};