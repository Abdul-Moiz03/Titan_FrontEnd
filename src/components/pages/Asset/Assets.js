import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";
// import CreateIssuanceRequisitionModal from "./CreateIssuanceRequisitionModal";
import EditIcon from "@mui/icons-material/Edit";
import Create_Asset from "./Create_Asset";
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
    field: "assetModel",
    headerName: "Asset Model",
    width: 270,
    type: "string",
  },
  {
    field: "assetName",
    headerName: "Asset Name",
    width: 200,
    type: "string",
  },

  {
    field: "type",
    headerName: "Type",
    width: 200,
    type: "string",
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
    assetName: "Snow",
    assetModel: "Snow",
  },
  {
    id: 2,
    assetName: "Lannister",
    assetModel: "Snow",
  },
  {
    id: 3,
    assetName: "Lannister",
    assetModel: "Snow",
  },
  {
    id: 4,
    assetName: "Stark",
    assetModel: "Snow",
  },
  {
    id: 5,
    assetName: "Targaryen",
    assetModel: "Snow",
  },
  {
    id: 6,
    assetName: "Melisandre",
    assetModel: "Snow",
  },
  {
    id: 7,
    assetName: "Clifford",
    assetModel: "Snow",
  },
];


export default function Assets() {
  return (
    <>
      <Box sx={{ px: 2, height: 600, width: "auto"  }}>

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
                  Assets
                </Typography>

                <Create_Asset />

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
