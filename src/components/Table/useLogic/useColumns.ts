import { MRT_ColumnDef } from "material-react-table";
import { useMemo } from "react";

export const useColumns = () => {
  const columns = useMemo<MRT_ColumnDef<TableTrajectoryData>[]>(
    () => [
      {
        accessorKey: "X",
        header: "X",
        muiTableHeadCellProps: { style: { color: "green" } }, 
        enableHiding: false, 
        enableEditing: true,
      },
      {
        accessorKey: "Y", 
        header: "Y",
        muiTableHeadCellProps: { style: { color: "green" } }, 
        enableHiding: false, 
        enableEditing: true,
      },
      {
        accessorKey: "Z",
        header: "Z",
        muiTableHeadCellProps: { style: { color: "green" } }, 
        enableHiding: false, 
        enableEditing: true,
      }
    ],
    []
  );
  return columns
};