import {
  GridActionsCellItem,
  GridColDef,
  GridRowModes,
  GridRowModesModel,
} from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import { useState } from "react";

export const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "id",
    width: 80,
    editable: false,
    type: "number",
    align: "left",
    headerAlign: "left",
  },
  {
    field: "X",
    headerName: "X",
    width: 80,
    editable: true,
    type: "number",
    align: "left",
    headerAlign: "left",
  },
  {
    field: "Y",
    headerName: "Y",
    type: "number",
    width: 80,
    align: "left",
    headerAlign: "left",
    editable: true,
  },
  {
    field: "Z",
    headerName: "Z",
    type: "number",
    width: 80,
    align: "left",
    headerAlign: "left",
    editable: true,
  },
  {
    field: "endEffectorStatus",
    headerName: "endEffectorStatus",
    width: 220,
    editable: true,
    type: "string",
  },
  {
    field: "actions",
    type: "actions",
    headerName: "Actions",
    width: 100,
    cellClassName: "actions",
    getActions: ({ id }) => {
      return [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          // onClick={handleDeleteClick(id)}
          color="inherit"
        />,
      ];
    },
  },
];
