import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Switch } from "@mui/material";
import { useEffect } from "react";
import Brand_Modal from "./Brand_Modal";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "brandName",
    headerName: "Brand Name",
    width: 800,
  },
  {
    field: "status",
    headerName: "status",
    width: 250,
    renderCell: (params) => <Switchbtn id={params.row.id} />,
  },
];
const Switchbtn = (props) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(props.id);
  };
  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    ></Switch>
  );
};

export default function Brand() {
  const [rowss, setRowss] = useState([]);

  const GettingData = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:8007/api/Brands", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      const arr = [];
      setRowss(arr);
      for (let i = 0; i < data.length; i++) {
        const obj = { ...data[i], id: i + 1 };
        const { id, brandName, status } = obj;
        arr.push({ id, brandName, status });
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  // useEffect(() => {
  //   GettingData();
  // }, []);
  GettingData();
  return (
    <>
      <Box sx={{ px: 2, height: 600, width: "auto" }}>
        <Brand_Modal />
        <DataGrid
          rows={rowss}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 8,
              },
            },
          }}
          pageSizeOptions={[8]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
}
