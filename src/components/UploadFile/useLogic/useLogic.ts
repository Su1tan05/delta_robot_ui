import { useState, ChangeEvent } from "react";
import { parseFile } from "../../../utils/FileParsingUtils";
import { useAppDispatch } from "../../../redux";
import { setTrajectoryPoints } from "../../../redux/features/motorInfo/uploadFileSlice";
import { TrajectoryPointsModel } from "../../../models/TrajectoryPointsModel";

export const useLogic = () => {
  const dispatch = useAppDispatch();

  const [file, setFile] = useState<File | null>(null);

  const handleAttachFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const attachedFile = e.target.files?.[0];

    if (!attachedFile) {
      return;
    }

    const json = await parseFile<TrajectoryPointsModel>(attachedFile);
    dispatch(setTrajectoryPoints(json))
    setFile(attachedFile);
  };

  const handleDetachFile = () => {
    setFile(null);
  };

  const handleUploadFile = () => {
    console.log("Uploading file...");
    console.log(file);
  };

  const fileName = file?.name;

  const hasAttachedFile = Boolean(file !== null);

  return {
    handleAttachFile,
    handleUploadFile,
    fileName,
    hasAttachedFile,
    handleDetachFile,
  };
};
