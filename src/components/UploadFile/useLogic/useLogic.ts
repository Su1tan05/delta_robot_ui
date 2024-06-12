import { useState, ChangeEvent } from "react";
import { parseFile } from "../../../utils/FileParsingUtils";
import { useAppDispatch, useAppSelector } from "../../../redux";
import {
  resetTrajectoryPoints,
  setTrajectoryPoints,
} from "../../../redux/features/motorInfo/uploadFileSlice";
import { TrajectoryPointsModel } from "../../../models/TrajectoryPointsModel";
import {
  resetAttachedFile,
  setAttachedFileName,
} from "../../../redux/features/motorInfo/appDataSlice";

export const useLogic = () => {
  const dispatch = useAppDispatch();

  const [file, setFile] = useState<File | null>(null);
  const fileName = useAppSelector((state) => state.appData.attachedFileName);

  const handleAttachFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const attachedFile = e.target.files?.[0];

    if (!attachedFile) {
      return;
    }

    const json = await parseFile<TrajectoryPointsModel>(attachedFile);
    dispatch(setTrajectoryPoints(json));
    setFile(attachedFile);
    dispatch(setAttachedFileName(attachedFile?.name));

    e.target.value = '';
  };

  const handleDetachFile = () => {
    dispatch(resetAttachedFile());
    dispatch(resetTrajectoryPoints());
    setFile(null);
  };

  const handleUploadFile = () => {
    console.log("Uploading file...");
    console.log(file);
  };

  const hasAttachedFile = Boolean(fileName !== undefined);

  return {
    handleAttachFile,
    handleUploadFile,
    fileName,
    hasAttachedFile,
    handleDetachFile,
  };
};
