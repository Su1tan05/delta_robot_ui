import { ChangeEvent, ChangeEventHandler, useRef, useState } from "react";
import { useRosContext } from "../../RosProvider";
import ROSLIB from "roslib";
import { set } from "lodash";

export const useLogic = () => {

  const ros = useRosContext();

  const setMotor1AngleTopic = useRef(
    new ROSLIB.Topic({
      ros: ros!,
      name: "/set_angle_motor1",
      messageType: "std_msgs/Float32",
    })
  );

  const [textFieldTheta1Value, setTextFieldTheta1Value] = useState<string>();
  const [textFieldDtValue, setTextFieldDtValue] = useState<string>();

  const handleTheta1ListChange = (_e: ChangeEvent<HTMLInputElement>) => {
    setTextFieldTheta1Value(_e.target.value);
  };

  const handleDtChange = (_e: ChangeEvent<HTMLInputElement>) => {
    setTextFieldDtValue(_e.target.value);
  };

  const hangleSendTrajectoryButton = () => {
    if (textFieldTheta1Value && textFieldDtValue) {
      const parsedAnglesList = parseAngles(textFieldTheta1Value);
      console.log(parsedAnglesList, parseFloat(textFieldDtValue));
      let i = 0;
      const intervalId = setInterval(() => {
        setMotor1AngleTopic.current.publish(new ROSLIB.Message({ data: parsedAnglesList[i] }));
        console.log("data sended to motor1 " + parsedAnglesList[i]);
        i++;
        if (i >= parsedAnglesList.length) {
          clearInterval(intervalId);
        }
      }, parseFloat(textFieldDtValue));
    }
  };

  const parseAngles = (angles: string) => {
    const cleanedString = angles.replace(/[\[\]]/g, '').replace(/\s+/g, ' ');
    return cleanedString.split(" ").map((angle) => parseFloat(angle));
  }


  return {handleTheta1ListChange, handleDtChange, hangleSendTrajectoryButton};
}