import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button, Switch } from "@mui/material";
// import CreateIssuanceRequisitionModal from "./CreateIssuanceRequisitionModal";
import EditIcon from "@mui/icons-material/Edit";
import NewWorkRequestModal from "./NewWorkRequestModal";
// import Schedule_Work_Order from "./Schedule_Work_Order";
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
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "Name",
    headerName: "Name",
    width: 180,
    type: "string",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "typeofmaintenance",
    headerName: "Type of Maintenance",
    type: "number",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "AssetModel",
    headerName: "Asset Model",
    type: "number",
    width: 180,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "active",
    headerName: "Active ",
    // description: 'This column has a value getter and is not sortable.',
    // sortable: false,

    width: 100,
    headerAlign: "center",
    align: "center",

    // valueGetter: (params) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    renderCell: (params) => <Switchbtn id={params.row.id} />,
  },
  {
    field: "actions",
    headerName: "Actions",
    headerAlign: "center",
    align: "center",
    width: 180,
    renderCell: (params) => <Viewbtn id={params.row.id} />,
  },
];
const viewpurchaserequisition = (id) => {
  console.log(id);
};
const Viewbtn = (props) => {
  const [HoveredIcon, setHoveredIcon] = useState(null);

  const handleIconMouseEnter = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleIconMouseLeave = () => {
    setHoveredIcon(null);
  };
  return (
    <div className="icon-wrapper">
      <Button sx={{ color: "black" }}>
        <VisibilityIcon
          style={{
            color: HoveredIcon === "visibility" ? "#FBB515" : "inherit",
          }}
          onMouseEnter={() => handleIconMouseEnter("visibility")}
          onMouseLeave={handleIconMouseLeave}
          onClick={() => {
            viewpurchaserequisition(props.id);
          }}
        />
      </Button>
      <Button sx={{ color: "black" }}>
        <EditIcon
          style={{ color: HoveredIcon === "edit" ? "#FBB515" : "inherit" }}
          onMouseEnter={() => handleIconMouseEnter("edit")}
          onMouseLeave={handleIconMouseLeave}
        />
      </Button>
    </div>
  );
};

const rows = [
  {
    id: 1,
    Name: "Snow",
    typeofmaintenance: 35,
    AssetModel: 35,

    active: false,
  },
  {
    id: 2,
    Name: "Lannister",
    typeofmaintenance: "Cersei",
    AssetModel: 42,

    active: false,
  },
  {
    id: 3,
    Name: "Lannister",
    typeofmaintenance: "Jaime",
    AssetModel: 45,
  },
  {
    id: 4,
    Name: "Stark",
    typeofmaintenance: "Arya",
    AssetModel: 16,
  },
  {
    id: 5,
    Name: "Targaryen",
    typeofmaintenance: "Daenerys",
    AssetModel: null,
  },
  {
    id: 6,
    Name: "Melisandre",
    typeofmaintenance: null,
    AssetModel: 150,
  },
  {
    id: 7,
    Name: "Clifford",
    typeofmaintenance: "Ferrara",
    AssetModel: 44,
  },
];

const WorkProcedure = () => {
  return (
    <>
      <Box sx={{ px: 2, height: 600, width: "auto" }}>
        {/* <CreateIssuanceRequisitionModal /> */}
        {/* <Schedule_Work_Order /> */}
        <NewWorkRequestModal />
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
};

export default WorkProcedure;
