import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";
import CreateUserModal from "../AdminScreens/CreateUserModal";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "requestpersonname",
    headerName: "Request Person Name(ID)",
    width: 450,
    type: "string",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "noofequipments",
    headerName: "No of Equipments",
    type: "number",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "workorderid",
    headerName: "Work Order ID",
    type: "number",
    width: 110,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "status",
    headerName: "Status",
    // description: 'This column has a value getter and is not sortable.',
    // sortable: false,

    width: 100,
    headerAlign: "center",
    align: "center",

    // valueGetter: (params) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 250,
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
    </div>
  );
};

const rows = [
  {
    id: 1,
    requestpersonname: "Snow",
    noofequipments: 35,
    workorderid: 35,
    status: 35,
  },
  {
    id: 2,
    requestpersonname: "Lannister",
    noofequipments: "Cersei",
    workorderid: 42,
    status: 35,
  },
  {
    id: 3,
    requestpersonname: "Lannister",
    noofequipments: "Jaime",
    workorderid: 45,
    status: 35,
  },
  {
    id: 4,
    requestpersonname: "Stark",
    noofequipments: "Arya",
    workorderid: 16,
    status: 35,
  },
  {
    id: 5,
    requestpersonname: "Targaryen",
    noofequipments: "Daenerys",
    workorderid: null,
    status: 35,
  },
  {
    id: 6,
    requestpersonname: "Melisandre",
    noofequipments: null,
    workorderid: 150,
    status: 35,
  },
  {
    id: 7,
    requestpersonname: "Clifford",
    noofequipments: "Ferrara",
    workorderid: 44,
    status: 35,
  },
];

export default function IssuanceDetail() {
  return (
    <>
      <CreateUserModal />
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
