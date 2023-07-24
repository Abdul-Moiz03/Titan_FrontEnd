import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Switch } from "@mui/material";
import UOM_Modal from "./UOM_Modal";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "uomName",
    headerName: "Unit Of Measurement",
    width: 800,
  },
  {
    field: "actions",
    headerName: "Actions",
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

const rows = [
  {
    id: 1,
    name: "Snow",
    active: true,
  },
  {
    id: 2,
    name: "Lannister",
    active: false,
  },
  {
    id: 3,
    name: "Lannister",
    active: false,
  },
  {
    id: 4,
    name: "Stark",
    active: false,
  },
  {
    id: 5,
    name: "Targaryen",
    active: true,
  },
  {
    id: 6,
    name: "Melisandre",
    active: true,
  },
  {
    id: 7,
    name: "Clifford",
    active: false,
  },
  {
    id: 8,
    name: "Frances",
    active: true,
  },
  {
    id: 9,
    name: "Roxie",
    active: false,
  },
];

export default function UOM() {
  const [rowss, setRowss] = useState([]);
  const GettingData = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        "http://localhost:8007/api/UnitOfMeasurements",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      const arr = [];
      setRowss(arr);
      for (let i = 0; i < data.length; i++) {
        const obj = { ...data[i], id: i + 1 };
        const { id, uomName, status } = obj;
        arr.push({ id, uomName, status });
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
        <UOM_Modal />
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
