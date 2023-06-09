import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";
// import CreateIssuanceRequisitionModal from "./CreateIssuanceRequisitionModal";
import EditIcon from "@mui/icons-material/Edit";
import NewWorkRequestModal from "./NewWorkRequestModal";
// import Schedule_Work_Order from "./Schedule_Work_Order";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "UserNameID",
    headerName: "User Name(ID)",
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
    field: "type",
    headerName: "Type",
    type: "number",
    width: 180,
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
    field: "WorkOrderID",
    headerName: "Work Order ID",
    type: "number",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "date",
    headerName: "Date",
    type: "number",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "time",
    headerName: "Time",
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

var today = new Date();
var date1 =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time1 =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const rows = [
  {
    id: 1,
    UserNameID: "Snow",
    assetname: 35,
    type: 35,
    status: 35,
    WorkOrderID: 50,
    date: date1,
    time: time1,
  },
  {
    id: 2,
    UserNameID: "Lannister",
    assetname: "Cersei",
    type: 42,
    status: 35,
    WorkOrderID: 60,
    date: date1,
    time: time1,
  },
  {
    id: 3,
    UserNameID: "Lannister",
    assetname: "Jaime",
    type: 45,
    status: 35,
    WorkOrderID: 70,
    date: date1,
    time: time1,
  },
  {
    id: 4,
    UserNameID: "Stark",
    assetname: "Arya",
    type: 16,
    status: 35,
    WorkOrderID: 80,
    date: date1,
    time: time1,
  },
  {
    id: 5,
    UserNameID: "Targaryen",
    assetname: "Daenerys",
    type: null,
    status: 35,
    WorkOrderID: 90,
    date: date1,
    time: time1,
  },
  {
    id: 6,
    UserNameID: "Melisandre",
    assetname: null,
    type: 150,
    status: 35,
    WorkOrderID: 100,
    date: date1,
    time: time1,
  },
  {
    id: 7,
    UserNameID: "Clifford",
    assetname: "Ferrara",
    type: 44,
    status: 35,
    WorkOrderID: 110,
    date: date1,
    time: time1,
  },
];

const WorkRequest = () => {
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

export default WorkRequest;
