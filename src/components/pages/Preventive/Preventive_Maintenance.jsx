import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";
// import CreateIssuanceRequisitionModal from "./CreateIssuanceRequisitionModal";
import EditIcon from "@mui/icons-material/Edit";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "assetmodel",
    headerName: "Asset Model",
    width: 180,
    type: "string",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "assetname",
    headerName: "Asset Name",
    type: "number",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "scheduledworkorder",
    headerName: "Scheduled Work Order",
    type: "number",
    width: 180,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "inspections",
    headerName: "Inspections",
    // description: 'This column has a value getter and is not sortable.',
    // sortable: false,

    width: 100,
    headerAlign: "center",
    align: "center",

    // valueGetter: (params) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: "meterreadings",
    headerName: "Meter Readings",
    type: "number",
    width: 150,
    headerAlign: "center",
    align: "center",
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
    assetmodel: "Snow",
    assetname: 35,
    scheduledworkorder: 35,
    inspections: 35,
    meterreadings: 50,
  },
  {
    id: 2,
    assetmodel: "Lannister",
    assetname: "Cersei",
    scheduledworkorder: 42,
    inspections: 35,
    meterreadings: 60,
  },
  {
    id: 3,
    assetmodel: "Lannister",
    assetname: "Jaime",
    scheduledworkorder: 45,
    inspections: 35,
    meterreadings: 70,
  },
  {
    id: 4,
    assetmodel: "Stark",
    assetname: "Arya",
    scheduledworkorder: 16,
    inspections: 35,
    meterreadings: 80,
  },
  {
    id: 5,
    assetmodel: "Targaryen",
    assetname: "Daenerys",
    scheduledworkorder: null,
    inspections: 35,
    meterreadings: 90,
  },
  {
    id: 6,
    assetmodel: "Melisandre",
    assetname: null,
    scheduledworkorder: 150,
    inspections: 35,
    meterreadings: 100,
  },
  {
    id: 7,
    assetmodel: "Clifford",
    assetname: "Ferrara",
    scheduledworkorder: 44,
    inspections: 35,
    meterreadings: 110,
  },
];

export default function Preventive_Maintenance() {
  return (
    <>
      <Box sx={{ px: 2, height: 600, width: "auto" }}>
        {/* <CreateIssuanceRequisitionModal /> */}

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
