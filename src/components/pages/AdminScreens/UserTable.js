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
  { field: "id", headerName: "ID", width: 70 },
  { field: "userName", headerName: "User name", width: 300 },
  { field: "empName", headerName: "Employee name", width: 200 },
  { field: "credentials", headerName: "Send Credentials", width: 200 },
  {
    field: "actions",
    headerName: "Actions",
    width: 250,
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
          <Button sx={{ color: "black" }}>
            <EditIcon
              style={{ color: hoveredIcon === "edit" ? "#FBB515" : "inherit" }}
              onMouseEnter={() => handleIconMouseEnter("edit")}
              onMouseLeave={handleIconMouseLeave}
            />
          </Button>
          <Button sx={{ color: "black" }}>
            <VisibilityIcon
              style={{
                color: hoveredIcon === "visibility" ? "#FBB515" : "inherit",
              }}
              onMouseEnter={() => handleIconMouseEnter("visibility")}
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
  { id: 4, empName: "Stark", userName: "Arya", credentials: 16 },
  { id: 5, empName: "Targaryen", userName: "Daenerys", credentials: 33 },
  { id: 6, empName: "Melisandre", userName: "Rossini", credentials: 150 },
  { id: 7, empName: "Clifford", userName: "Ferrara", credentials: 44 },
  { id: 8, empName: "Frances", userName: "Rossini", credentials: 36 },
  { id: 9, empName: "Roxie", userName: "Harvey", credentials: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%", backgroundColor: "white" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
