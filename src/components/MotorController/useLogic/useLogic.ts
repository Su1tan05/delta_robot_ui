import { useState } from "react";
import ROSLIB from "roslib";
import { SliderHandlerTypes } from "../enum";
import { useRosTopics } from "./useRosTopics";

export type MotorData = {
  motor1Angle: number;
  motor2Angle: number;
  motor3Angle: number;
};

export const useLogic = () => {
  const {
    stopMotor1Topic,
    stopMotor2Topic,
    stopMotor3Topic,
    setMotor1AngleTopic,
    setMotor2AngleTopic,
    setMotor3AngleTopic,
  } = useRosTopics();

  const [slider1Value, setSlider1Value] = useState(0);
  const [slider2Value, setSlider2Value] = useState(0);
  const [slider3Value, setSlider3Value] = useState(0);

  const handleResetSliders = () => {
    setSlider1Value(0);
    setSlider2Value(0);
    setSlider3Value(0);
    stopMotor1Topic.publish(new ROSLIB.Message({}));
    stopMotor2Topic.publish(new ROSLIB.Message({}));
    stopMotor3Topic.publish(new ROSLIB.Message({}));
  };

  const getSliderChangeHandler = (sliderType: SliderHandlerTypes) => ({
    ChangeHangler: (_e: Event, value: number | number[]) => {
      if (Array.isArray(value)) {
        return;
      }
      if (sliderType === SliderHandlerTypes.Motor1_slider) {
        setSlider1Value(value);
      }
      if (sliderType === SliderHandlerTypes.Motor2_slider) {
        setSlider2Value(value);
      }
      if (sliderType === SliderHandlerTypes.Motor3_slider) {
        setSlider3Value(value);
      }
    },
    ChangeCommitHandler: (_e: unknown, value: number | number[]) => {
      if (Array.isArray(value)) {
        return;
      }
      if (sliderType === SliderHandlerTypes.Motor1_slider) {
        setMotor1AngleTopic.publish(new ROSLIB.Message({ data: value }));
      }
      if (sliderType === SliderHandlerTypes.Motor2_slider) {
        setMotor2AngleTopic.publish(new ROSLIB.Message({ data: value }));
      }
      if (sliderType === SliderHandlerTypes.Motor3_slider) {
        setMotor3AngleTopic.publish(new ROSLIB.Message({ data: value }));
      }
    },
  });

  return {
    slider1Value,
    slider2Value,
    slider3Value,
    handleResetSliders,
    getSliderChangeHandler,
  };
};
