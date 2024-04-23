import { useRef, useState } from "react";
import { useRosContext } from "../../RosProvider";
import ROSLIB from "roslib";
import { SliderHandlerTypes } from "../enums";

export const useLogic = () => {
  const [slider1Value, setSlider1Value] = useState<number | number[]>();
  const [slider2Value, setSlider2Value] = useState<number | number[]>();
  const [slider3Value, setSlider3Value] = useState<number | number[]>();

  const ros = useRef(useRosContext());

  const pidTuningTopic = useRef(
    new ROSLIB.Topic({
      ros: ros.current!,
      name: "/pid_tunings",
      messageType: "geometry_msgs/Vector3",
    })
  );

  const handleResetSliders = () => {
    setSlider1Value(0);
    setSlider2Value(0);
    setSlider3Value(0);
    pidTuningTopic.current.publish(
      new ROSLIB.Message({
        x: 0,
        y: 0,
        z: 0,
      })
    );
  };

  const getSliderChangeHandler = (sliderType: SliderHandlerTypes) => ({
    ChangeHangler: (_e: Event, value: number | number[]) => {
      if (Array.isArray(value)) {
        return;
      }
      if (sliderType === SliderHandlerTypes.P_slider) {
        setSlider1Value(value);
      }
      if (sliderType === SliderHandlerTypes.I_slider) {
        setSlider2Value(value);
      }
      if (sliderType === SliderHandlerTypes.D_slider) {
        setSlider3Value(value);
      }
    },
    ChangeCommitHandler: (_e: unknown, value: number | number[]) => {
      if (Array.isArray(value)) {
        return;
      }
      if (sliderType === SliderHandlerTypes.P_slider) {
        pidTuningTopic.current.publish(
          new ROSLIB.Message({ x: value, y: slider2Value, z: slider3Value })
        );
      }
      if (sliderType === SliderHandlerTypes.I_slider) {
        pidTuningTopic.current.publish(
          new ROSLIB.Message({ x: slider1Value, y: value, z: slider3Value })
        );
      }
      if (sliderType === SliderHandlerTypes.D_slider) {
        pidTuningTopic.current.publish(
          new ROSLIB.Message({ x: slider1Value, y: slider2Value, z: value })
        );
      }
    },
  });

  return {
    getSliderChangeHandler,
    handleResetSliders,
    slider1Value,
    slider2Value,
    slider3Value,
  };
};
