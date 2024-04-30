import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogic = () => {
  const [myState, setMyState] = useState();
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate("/");
  };

  const handleClickModelingButton = () => {};

  const handleClickPlotsButton = () => {
    navigate("/plots");
  };

  const handleClickTableButton = () => {
    navigate("/table");
  };

  const handleClickVersionLink = () => {
    open("https://github.com/Su1tan05/delta_robot_ui/releases")
  };

  const handleClickGithubLogo = () => {
    open("https://github.com/Su1tan05/delta_robot_ui");
  };

  const handleClickSettingsButton = () => {
    navigate("/settings");
  };

  return {
    handleClickLogo,
    handleClickModelingButton,
    handleClickPlotsButton,
    handleClickTableButton,
    handleClickVersionLink,
    handleClickGithubLogo,
    handleClickSettingsButton,
  };
};
