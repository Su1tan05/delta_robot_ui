import ROSLIB from "roslib";
import { useRosTopics } from "./useRosTopics";
import { useAppSelector } from "../../../redux";

export const useLogic = () => {
  const {
    resetAllTopic,
    setMotor1AngleTopic,
    setMotor2AngleTopic,
    setMotor3AngleTopic,
  } = useRosTopics();
  const delay = 120;

  const calculatedTheta1 = useAppSelector(
    (state) => state.motorinfo.calculatedTheta1
  );

  const calculatedTheta2 = useAppSelector(
    (state) => state.motorinfo.calculatedTheta2
  );

  const calculatedTheta3 = useAppSelector(
    (state) => state.motorinfo.calculatedTheta3
  );

  const calculatedTime = useAppSelector(
    (state) => state.motorinfo.calculatedTime
  );

  const handleResetAll = () => {
    resetAllTopic.publish(new ROSLIB.Message({}));
  };

  const sendAngleData = async (
    angles: number[],
    topic: ROSLIB.Topic<ROSLIB.Message>,
    delay: number
  ) => {
    for (let angle of angles) {
      const message = new ROSLIB.Message({ data: angle });
      topic.publish(message);

      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  };

  const sendAllData = async () => {
    await Promise.all([
      sendAngleData(calculatedTheta1, setMotor1AngleTopic, delay),
      sendAngleData(calculatedTheta2, setMotor2AngleTopic, delay),
      sendAngleData(calculatedTheta3, setMotor3AngleTopic, delay),
    ]);
  };

  // Начало отправки данных

  const handleStartButton = () => {
    sendAllData()
    .then(() => {
      console.log("Все данные отправлены");
    })
    .catch((error) => {
      console.error("Ошибка при отправке данных:", error);
    });
  }

  return {
    handleResetAll,
    handleStartButton
  };
};
