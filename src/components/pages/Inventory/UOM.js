import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Switch } from "@mui/material";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
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
  return (
    <>
      <Box sx={{ px: 2, height: 600, width: "auto" }}>
        <DataGrid
          rows={rows}
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
