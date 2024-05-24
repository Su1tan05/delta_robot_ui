import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import { useColumns, useLogic } from "./useLogic";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const Table = () => {
  const {data, handleAddNewData, handleCreatingRowSave, handleDeleteRow, handleEditingRowSave } = useLogic();
  const columns = useColumns();

  const table = useMaterialReactTable({
    columns,
    data,
    enableEditing: true,
    enableColumnOrdering: true,

    onEditingRowSave: ({ row, table, values}) => {
      handleEditingRowSave(row, table, values);
    },

    onCreatingRowSave: ({ table, values }) => {
      handleCreatingRowSave(table, values);
    },

    renderTopToolbarCustomActions: ({ table }) => (
      <Button onClick={() => handleAddNewData(table)}>+</Button>
    ),

    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: 'flex', gap: '1rem' }}>
        <Tooltip title="Edit">
          <IconButton onClick={() => table.setEditingRow(row)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => handleDeleteRow(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),

  });

  return <MaterialReactTable table={table} />;
};
