import React from "react";
import { Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const OrdersTableData = ({ tableRows, handleDelete }) => {
  console.log("🚀 Received tableRows:", tableRows); // Debugging log

  const rows = tableRows.map((row) => ({
    ...row,
    id: row.id, // Ensure DataGrid has an ID field
  }));

  const columns = [
    { field: "id", headerName: "Order ID", flex: 1, minWidth: 100 },
    { field: "service", headerName: "Service", flex: 1, minWidth: 150 },
    { field: "property", headerName: "Property", flex: 1, minWidth: 200 },
    { field: "postcode", headerName: "Postcode", flex: 1, minWidth: 120 },
    { field: "property_value", headerName: "Property Value", flex: 1, minWidth: 120 },
    { field: "bedrooms", headerName: "Bedrooms", flex: 1, minWidth: 100 },
    { field: "selected_date", headerName: "Date", flex: 1, minWidth: 120 },
    { field: "selected_time", headerName: "Time", flex: 1, minWidth: 120 },
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
          onClick={() => {
            console.log(`🛑 Deleting order with ID: ${params.row.id}`); // Debugging log
            handleDelete(params.row.id);
          }}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={rows} // Use modified rows with ID
        columns={columns}
        pageSize={5}
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

export default OrdersTableData;
