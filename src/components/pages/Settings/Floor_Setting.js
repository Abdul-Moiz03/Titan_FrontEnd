import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";
// import CreateIssuanceRequisitionModal from "./CreateIssuanceRequisitionModal";
import EditIcon from "@mui/icons-material/Edit";
import Create_Floor from "./Create_Floor";
import Typography from "@mui/material/Typography";
import { Switch } from "@mui/material";
import { AddButton } from "../../../assets/buttons/AddButton";

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
    width: 170,
    type: "string",
  },

  {
    field: "facilityName",
    headerName: "Facility Name",
    width: 100,
    type: "string",
  },

  {
    field: "functionalLocations",
    headerName: "Functional Locations",
    type: "number",
    width: 400,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "active",
    headerName: "Active",
    width: 100,
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
    functionalLocations: 35,
  },
  {
    id: 2,
    Name: "Lannister",
    functionalLocations: 42,
  },
  {
    id: 3,
    Name: "Lannister",
    functionalLocations: 45,
  },
  {
    id: 4,
    Name: "Stark",
    functionalLocations: 16,
  },
  {
    id: 5,
    Name: "Targaryen",
    functionalLocations: null,
  },
  {
    id: 6,
    Name: "Melisandre",
    functionalLocations: 150,
  },
  {
    id: 7,
    Name: "Clifford",
    functionalLocations: 44,
  },
];


export default function Floor_Setting() {
  return (
    <>
      <Box sx={{ px: 2, height: 600, width: "auto"  }}>
        {/* <CreateIssuanceRequisitionModal /> */}

        <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  fontSize={25}
                  marginBottom={0}
                  style={{ fontWeight: 600 }}
                >
                  Floor
                </Typography>

                <Create_Floor />

        </Box>
        
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
