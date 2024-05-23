import { MouseEventHandler, useRef, useState } from "react";
import { useRosContext } from "../../RosProvider";
import ROSLIB from "roslib";
import { Motor, SliderHandlerTypes } from "../enums";
import { first } from "lodash";
import { useAppDispatch, useAppSelector } from "../../../redux";
import {
  resetMotor1PIDValues,
  resetMotor2PIDValues,
  resetMotor3PIDValues,
  setMotor1KdValue,
  setMotor1KiValue,
  setMotor1KpValue,
  setMotor2KdValue,
  setMotor2KiValue,
  setMotor2KpValue,
  setMotor3KdValue,
  setMotor3KiValue,
  setMotor3KpValue,
} from "../../../redux/features/motorInfo/pidControllerSlice";

export const useLogic = () => {
  const [isSuccsessAlectOpen, setOpenSuccsessAlect] = useState(false);

  const dispatch = useAppDispatch();

  const motor1PIDValues = useAppSelector(
    (state) => state.pidControllerValues.motor1PIDValues
  );

  const motor2PIDValues = useAppSelector(
    (state) => state.pidControllerValues.motor2PIDValues
  );

  const motor3PIDValues = useAppSelector(
    (state) => state.pidControllerValues.motor3PIDValues
  );

  const ros = useRosContext();

  const setMotor1PID = useRef(
    new ROSLIB.Topic({
      ros: ros!,
      name: "/set_PID_motor1",
      messageType: "geometry_msgs/Vector3",
    })
  ).current;

  const setMotor2PID = useRef(
    new ROSLIB.Topic({
      ros: ros!,
      name: "/set_PID_motor2",
      messageType: "geometry_msgs/Vector3",
    })
  ).current;

  const setMotor3PID = useRef(
    new ROSLIB.Topic({
      ros: ros!,
      name: "/set_PID_motor3",
      messageType: "geometry_msgs/Vector3",
    })
  ).current;

  const handleResetSliders = (motor: Motor) => () => {
    switch (motor) {
      case Motor.firstMotor:
        dispatch(resetMotor1PIDValues());
        break;
      case Motor.secondMotor:
        dispatch(resetMotor2PIDValues());
        break;
      case Motor.thirdMotor:
        dispatch(resetMotor3PIDValues());
        break;
      default:
        console.log(`Incorrect Motor type`);
    }
  };

  const handleSavePIDValues = () => {
    setMotor1PID.publish(
      new ROSLIB.Message({
        x: motor1PIDValues[0],
        y: motor1PIDValues[1],
        z: motor1PIDValues[2],
      })
    );

    setMotor2PID.publish(
      new ROSLIB.Message({
        x: motor2PIDValues[0],
        y: motor2PIDValues[1],
        z: motor2PIDValues[2],
      })
    );

    setMotor3PID.publish(
      new ROSLIB.Message({
        x: motor3PIDValues[0],
        y: motor3PIDValues[1],
        z: motor3PIDValues[2],
      })
    );

    localStorage.setItem("motor1PIDValues", motor1PIDValues.toString());
    localStorage.setItem("motor2PIDValues", motor2PIDValues.toString());
    localStorage.setItem("motor3PIDValues", motor3PIDValues.toString());

    setOpenSuccsessAlect(true);

  };

  const handleCloseAlert = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccsessAlect(false);
  };

  const getSliderValues = (motor: Motor) => {
    var slider1Value = 0;
    var slider2Value = 0;
    var slider3Value = 0;

    switch (motor) {
      case Motor.firstMotor:
        slider1Value = motor1PIDValues[0];
        slider2Value = motor1PIDValues[1];
        slider3Value = motor1PIDValues[2];
        break;
      case Motor.secondMotor:
        slider1Value = motor2PIDValues[0];
        slider2Value = motor2PIDValues[1];
        slider3Value = motor2PIDValues[2];
        break;
      case Motor.thirdMotor:
        slider1Value = motor3PIDValues[0];
        slider2Value = motor3PIDValues[1];
        slider3Value = motor3PIDValues[2];
        break;
      default:
        console.log(`Incorrect Motor type`);
    }

    return { slider1Value, slider2Value, slider3Value };
  };

  const getSliderChangeHandler = (
    motor: Motor,
    sliderType: SliderHandlerTypes
  ) => ({
    ChangeHangler: (_e: Event, value: number | number[]) => {
      if (Array.isArray(value)) {
        return;
      }
      switch (motor) {
        case Motor.firstMotor:
          if (sliderType === SliderHandlerTypes.P_slider) {
            dispatch(setMotor1KpValue(value));
          }
          if (sliderType === SliderHandlerTypes.I_slider) {
            dispatch(setMotor1KiValue(value));
          }
          if (sliderType === SliderHandlerTypes.D_slider) {
            dispatch(setMotor1KdValue(value));
          }
          break;
        case Motor.secondMotor:
          if (sliderType === SliderHandlerTypes.P_slider) {
            dispatch(setMotor2KpValue(value));
          }
          if (sliderType === SliderHandlerTypes.I_slider) {
            dispatch(setMotor2KiValue(value));
          }
          if (sliderType === SliderHandlerTypes.D_slider) {
            dispatch(setMotor2KdValue(value));
          }
          break;
        case Motor.thirdMotor:
          if (sliderType === SliderHandlerTypes.P_slider) {
            dispatch(setMotor3KpValue(value));
          }
          if (sliderType === SliderHandlerTypes.I_slider) {
            dispatch(setMotor3KiValue(value));
          }
          if (sliderType === SliderHandlerTypes.D_slider) {
            dispatch(setMotor3KdValue(value));
          }
          break;
        default:
          console.log(`Incorrect Motor type`);
      }
    },
  });

  return {
    getSliderChangeHandler,
    getSliderValues,
    handleResetSliders,
    isSuccsessAlectOpen,
    handleCloseAlert,
    handleSavePIDValues
  };
};
