import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../redux";
import { setWebsocketIP } from "../../../redux/features/motorInfo/appDataSlice";
import { useRosContext } from "../../RosProvider";

const WEBSOCKET_IP_KEY = "websocketIP";

export const useLogic = () => {
  const [IPValue, setIPValue] = useState<string>("");
  const dispatch = useAppDispatch();
  const ros = useRosContext();


  const handleChangeTextField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIPValue(e.target.value);
  };

  const handelClickConnectButton = () => {
    ros?.close();
    localStorage.setItem(WEBSOCKET_IP_KEY, IPValue);
    dispatch(setWebsocketIP(IPValue));
    ros?.connect(IPValue)
  };

  const handelClickDisconnectButton = () => {
    ros?.close();
  };

  useEffect(() => {
    setIPValue(localStorage.getItem(WEBSOCKET_IP_KEY) ?? "");
  }, []);

  return {
    handelClickConnectButton,
    handleChangeTextField,
    handelClickDisconnectButton,
    IPValue,
  };
};
