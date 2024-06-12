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
    setPositionTopic
  } = useRosTopics();

  const [sliderXValue, setSliderXValue] = useState(0);
  const [sliderYValue, setSliderYValue] = useState(0);
  const [sliderZValue, setSliderZValue] = useState(0);

  const [sliderM1Value, setSliderM1Value] = useState(0);
  const [sliderM2Value, setSliderM2Value] = useState(0);
  const [sliderM3Value, setSliderM3Value] = useState(0);

  const handleResetSliders = () => {
    setSliderXValue(0);
    setSliderYValue(0);
    setSliderZValue(0);
    setSliderM1Value(0);
    setSliderM2Value(0);
    setSliderM3Value(0);
    // stopMotor1Topic.publish(new ROSLIB.Message({}));
    // stopMotor2Topic.publish(new ROSLIB.Message({}));
    // stopMotor3Topic.publish(new ROSLIB.Message({}));
  };

  const getSliderChangeHandler = (sliderType: SliderHandlerTypes) => ({
    ChangeHangler: (_e: Event, value: number | number[]) => {
      if (Array.isArray(value)) {
        return;
      }
      if (sliderType === SliderHandlerTypes.Motor1_slider) {
        setSliderM1Value(value);
      }
      if (sliderType === SliderHandlerTypes.Motor2_slider) {
        setSliderM2Value(value);
      }
      if (sliderType === SliderHandlerTypes.Motor3_slider) {
        setSliderM3Value(value);
      }

      if (sliderType === SliderHandlerTypes.PostionX_slider) {
        setSliderXValue(value);
      }
      if (sliderType === SliderHandlerTypes.PostionY_slider) {
        setSliderYValue(value);
      }
      if (sliderType === SliderHandlerTypes.PostionZ_slider) {
        setSliderZValue(value);
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

      if (sliderType === SliderHandlerTypes.PostionX_slider) {
        setPositionTopic.publish(new ROSLIB.Message({data: [value, sliderYValue, sliderZValue] }));
      }
      if (sliderType === SliderHandlerTypes.PostionY_slider) {
        setPositionTopic.publish(new ROSLIB.Message({data: [sliderXValue, value, sliderZValue] }));
      }
      if (sliderType === SliderHandlerTypes.PostionZ_slider) {
        setPositionTopic.publish(new ROSLIB.Message({data: [sliderXValue, sliderYValue, value] }));
      }
    },
  });

  return {
    sliderXValue,
    sliderYValue,
    sliderZValue,
    sliderM1Value,
    sliderM2Value,
    sliderM3Value,
    handleResetSliders,
    getSliderChangeHandler,
  };
};
