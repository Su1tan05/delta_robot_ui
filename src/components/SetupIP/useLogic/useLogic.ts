import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux";
import {
  setOpenErrorAlert,
  setWebsocketIP,
} from "../../../redux/features/motorInfo/appDataSlice";
import { useRosContext } from "../../RosProvider";

const WEBSOCKET_IP_KEY = "websocketIP";

export const useLogic = () => {
  const [IPValue, setIPValue] = useState<string>("");
  const dispatch = useAppDispatch();
  const ros = useRosContext();

  const isErrorAlectOpen = useAppSelector(
    (state) => state.appData.isErrorAlectOpen
  );

  const handleChangeTextField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIPValue(e.target.value);
  };

  const handelClickConnectButton = () => {
    ros?.close();
    localStorage.setItem(WEBSOCKET_IP_KEY, IPValue);
    dispatch(setWebsocketIP(IPValue));
    ros?.connect(IPValue);
  };

  const handelClickDisconnectButton = () => {
    ros?.close();
  };

  useEffect(() => {
    setIPValue(localStorage.getItem(WEBSOCKET_IP_KEY) ?? "");
  }, []);

  const handleCloseAlert = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setOpenErrorAlert(false));
  };

  return {
    handelClickConnectButton,
    handleChangeTextField,
    handelClickDisconnectButton,
    isErrorAlectOpen,
    handleCloseAlert,
    IPValue,
  };
};
