import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../redux";
import { setWebsocketIP } from "../../../redux/features/motorInfo/appDataSlice";

const WEBSOCKET_IP_KEY = "websocketIP";

export const useLogic = () => {
  const [IPValue, setIPValue] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleChangeTextField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIPValue(e.target.value);
  };

  const handelClickConnectButton = () => {
    localStorage.setItem(WEBSOCKET_IP_KEY, IPValue);
    dispatch(setWebsocketIP(IPValue));
  };

  useEffect(() => {
    setIPValue(localStorage.getItem(WEBSOCKET_IP_KEY) ?? "");
  }, []);

  return {
    handelClickConnectButton,
    handleChangeTextField,
    IPValue,
  };
};
