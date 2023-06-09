import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
// import '../styles.css';
import { Button } from "@mui/material";

const columns = [
  { field: "no", headerName: "No", width: 70 },
  { field: "roles", headerName: "Roles", width: 950 },
  {
    field: "actions",
    headerName: "Actions",
    width: 90,
    renderCell: (params) => {
      const [hoveredIcon, setHoveredIcon] = useState(null);

      const handleIconMouseEnter = (iconName) => {
        setHoveredIcon(iconName);
      };

      const handleIconMouseLeave = () => {
        setHoveredIcon(null);
      };

      return (
        <div className="icon-wrapper">
          <Button sx={{ color: "black" }}>
            <DeleteIcon
              style={{
                color: hoveredIcon === "delete" ? "#FBB515" : "inherit",
              }}
              onMouseEnter={() => handleIconMouseEnter("delete")}
              onMouseLeave={handleIconMouseLeave}
            />
          </Button>
        </div>
      );
    },
  },
];

const rows = [
  { id: 1, empName: "Snow", userName: "Jon", credentials: 35 },
  { id: 2, empName: "Lannister", userName: "Cersei", credentials: 42 },
  { id: 3, empName: "Lannister", userName: "Jaime", credentials: 45 },
];

export default function CreateUserTable() {
  return (
    <div style={{ height: 220, width: "100%", backgroundColor: "white" }}>
      <DataGrid
        rowHeight={35}
        rows={rows}
        columns={columns}
        pageSize={3}
        rowsPerPageOptions={[3]}
        // checkboxSelection
      />
    </div>
  );
}
