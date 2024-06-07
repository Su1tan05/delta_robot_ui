import { LiteralUnion, MRT_Row, MRT_TableInstance } from "material-react-table";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux";
import { TrajectoryPoint } from "../../../models/TrajectoryPointsModel";
import {
  addTrajectoryPoint,
  editTrajectoryPoint,
  removeDataByIndex,
} from "../../../redux/features/motorInfo/uploadFileSlice";

export const useLogic = () => {
  const [data, setData] = useState<TableTrajectoryData[]>([]);

  const dispatch = useAppDispatch();

  const trajectoryPoints = useAppSelector(
    (state) => state.trajectoryInfo.trajectoryPoints
  );

  const handleDeleteRow = (row: MRT_Row<TableTrajectoryData>) => {
    dispatch(removeDataByIndex(row.index));
  };

  const handleAddNewData = (table: MRT_TableInstance<TableTrajectoryData>) => {
    table.setCreatingRow(true);
  };

  const handleEditingRowSave = (
    row: MRT_Row<TableTrajectoryData>,
    table: MRT_TableInstance<TableTrajectoryData>,
    values: Record<LiteralUnion<"X" | "Y" | "Z">, any>
  ) => {
    const trajectroryPoint: TrajectoryPoint = [values.X, values.Y, values.Z];
    dispatch(editTrajectoryPoint({ index: row.index, point: trajectroryPoint }));
    table.setEditingRow(null);
  };

  const handleCreatingRowSave = (
    table: MRT_TableInstance<TableTrajectoryData>,
    values: Record<LiteralUnion<"X" | "Y" | "Z">, any>
  ) => {
    const trajectroryPoint: TrajectoryPoint = [values.X, values.Y, values.Z];
    dispatch(addTrajectoryPoint(trajectroryPoint));
    table.setCreatingRow(null);
  };

  const fillTableData = (trajectoryPoints: TrajectoryPoint[]) => {
    var tableData: TableTrajectoryData[] = [];

    for (var i = 0; i <= trajectoryPoints.length; i++) {
      const point = trajectoryPoints[i];
      if (point !== undefined) {
        const tablePoint: TableTrajectoryData = {
          X: point[0],
          Y: point[1],
          Z: point[2],
        };
        tableData.push(tablePoint);
      }
    }

    setData(tableData);
  };

  useEffect(() => {
    fillTableData(trajectoryPoints);
  }, [trajectoryPoints]);

  return {
    data,
    handleAddNewData,
    handleCreatingRowSave,
    handleDeleteRow,
    handleEditingRowSave,
  };
};
