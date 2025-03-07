import React from "react";
import { Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const UserTableData = ({ tableRows, handleDelete }) => {
  const columns = [
    { field: "id", headerName: "User ID", flex: 1, minWidth: 100 },
    { field: "username", headerName: "Username", flex: 1, minWidth: 150 },
    { field: "email", headerName: "Email", flex: 1, minWidth: 200 },
    { field: "role", headerName: "Role", flex: 1, minWidth: 120 },
    {
      field: "delete",
      headerName: "Action",
      flex: 1,
      minWidth: 100,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={() => handleDelete(params.row.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={tableRows}
        columns={columns}
        pageSize={5}
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

export default UserTableData;
