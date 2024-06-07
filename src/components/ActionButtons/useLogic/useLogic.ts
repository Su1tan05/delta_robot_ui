import ROSLIB from "roslib";
import { useRosTopics } from "./useRosTopics";

export const useLogic = () => {
  

  
  const { resetAllTopic } = useRosTopics();

  const handleResetAll = () => {
    resetAllTopic.publish(new ROSLIB.Message({}));
  };

  return {
    handleResetAll,
  };
};
