import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
// import '../styles.css';
import { Button } from "@mui/material";

export default function DataTable({ rows, columns, height, rowHeight }) {
  return (
    <div
      style={{ height: height || 400, width: "100%", backgroundColor: "white" }}
    >
      <DataGrid
        rowHeight={rowHeight}
        rows={rows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
        hideFooterPagination={rows.length === 0}
        disableSelectionOnClick
      />
    </div>
  );
}
