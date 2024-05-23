import { GridRowId, GridRowModes, GridRowsProp } from "@mui/x-data-grid";
import { useState } from "react";

const initialRows: GridRowsProp = [
  {
    id: 1,
    x: 0,
    y: 0,
    z: 0,
    ecdEffectorStatus: "enabled",
  },
];

export const useLogic = () => {
    const [id, setId] = useState();
    const [rows, setRows] = useState(initialRows);


    const handleClickAddRecordButton = () => {
        const id = 2;
        setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
      };

    const handleDeleteClick = (id: GridRowId) => () => {
        setRows(rows.filter((row) => row.id !== id));
    };    

    return {rows}
};
