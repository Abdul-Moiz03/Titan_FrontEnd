import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";
// import CreateIssuanceRequisitionModal from "./CreateIssuanceRequisitionModal";
import EditIcon from "@mui/icons-material/Edit";
// import Create_Profile from "./Create_Profile";
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
    field: "fatherName",
    headerName: "Father Name",
    width: 170,
    type: "string",
  },

  {
    field: "department",
    headerName: "Department",
    width: 100,
    type: "string",
  },

  {
    field: "designation",
    headerName: "Designation",
    width: 100,
    type: "string",
  },

  {
    field: "contact",
    headerName: "Contact No",
    type: "number",
    width: 170,
    headerAlign: "center",
    align: "center",
  },

  {
    field: "email",
    headerName: "Email",
    width: 170,
    type: "string",
  },

  {
    field: "active",
    headerName: "Active",
    width: 70,
    renderCell: (params) => <Switchbtn id={params.row.id} />,
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
    fatherName: 35,
    contact: 35,
  },
  {
    id: 2,
    Name: "Lannister",
    fatherName: "Cersei",
    contact: 42,
  },
  {
    id: 3,
    Name: "Lannister",
    fatherName: "Jaime",
    contact: 45,
  },
  {
    id: 4,
    Name: "Stark",
    fatherName: "Arya",
    contact: 16,
  },
  {
    id: 5,
    Name: "Targaryen",
    fatherName: "Daenerys",
    contact: null,
  },
  {
    id: 6,
    Name: "Melisandre",
    fatherName: null,
    contact: 150,
  },
  {
    id: 7,
    Name: "Clifford",
    fatherName: "Ferrara",
    contact: 44,
  },
];


export default function Emp_Setting() {
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
                  Employees
                </Typography>

                <Button
                    type="submit"
                    // disabled={isSubmitting}
                    fullWidth={false}
                    variant="contained"
                    sx={{
                      mt: 2,
                      mb: 2,
                      backgroundColor: "#FBB515",
                      color: "black",
                      "&:hover": {
                        backgroundColor: "#FABE4B",
                      },
                    }}
                  >
                    &nbsp; Sync from HR &nbsp;
                  </Button>

                {/* <Create_Profile /> */}

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
