import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from '@mui/material/Link';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import titan from "../titan.png";
import Container from "@mui/material/Container";
import { sizing } from "@mui/system";
import TopBar from "./TopBar";
import UserTable from "./UserTable";
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CreateUserModal from "./CreateUserModal";
import Table from "./Table";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import AddProfileModal from "./AddProfileModal";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "profileName", headerName: "Profile Name", width: 500 },
  { field: "userNumber", headerName: "Number of Username", width: 240 },
  {
    field: "actions",
    headerName: "Actions",
    width: 220,
    renderCell: (params) => {
      const [hoveredIcon, setHoveredIcon] = useState(null);

      const handleIconMouseEnter = (iconName) => {
        setHoveredIcon(iconName);
      };

      const handleIconMouseLeave = () => {
        setHoveredIcon(null);
      };

      return (
        <div className="icon-wrapper">
          <Button sx={{ color: "black" }}>
            <DeleteIcon
              style={{
                color: hoveredIcon === "delete" ? "#FBB515" : "inherit",
              }}
              onMouseEnter={() => handleIconMouseEnter("delete")}
              onMouseLeave={handleIconMouseLeave}
            />
          </Button>
          <Button sx={{ color: "black" }}>
            <EditIcon
              style={{ color: hoveredIcon === "edit" ? "#FBB515" : "inherit" }}
              onMouseEnter={() => handleIconMouseEnter("edit")}
              onMouseLeave={handleIconMouseLeave}
            />
          </Button>
          <Button sx={{ color: "black" }}>
            <VisibilityIcon
              style={{
                color: hoveredIcon === "visibility" ? "#FBB515" : "inherit",
              }}
              onMouseEnter={() => handleIconMouseEnter("visibility")}
              onMouseLeave={handleIconMouseLeave}
            />
          </Button>
        </div>
      );
    },
  },
];

const rows = [
  { id: 1, profileName: "Jon", userNumber: 35 },
  { id: 2, profileName: "Cersei", userNumber: 42 },
  { id: 3, profileName: "Jaime", userNumber: 45 },
  { id: 4, profileName: "Arya", userNumber: 16 },
  { id: 5, profileName: "Daenerys", userNumber: 33 },
  { id: 6, profileName: "Rossini", userNumber: 150 },
  { id: 7, profileName: "Ferrara", userNumber: 44 },
  { id: 8, profileName: "Rossini", userNumber: 36 },
  { id: 9, profileName: "Harvey", userNumber: 65 },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const theme = createTheme();

export default function Profile() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={2}
          elevation={0}
          sx={{
            // backgroundImage: 'url(https://source.unsplash.com/random)',
            // backgroundRepeat: 'no-repeat',
            backgroundColor: "#FFFFFF",
            // (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            sx={{
              my: 12,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              // alignItems: 'center',
              justifyContent: "left",
            }}
          >
            {/* <Box >
              <img display="block" src={titan} width={164} height={57} alt="titan logo" />
              </Box>
              <Box sx={{my: 5}}>
              <Typography  display={'block'} component="h1" variant="h3" fontFamily={''} fontStyle="normal" color={'white'} fontSize={'30'}>
              that’ll help your company break production records
              </Typography>
              </Box>
              <Box>
              <Typography display={'block'} color={'white'}>
               We only need your email and password, and you'll be on your way. 
              </Typography>
              </Box> */}
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={10}
          component={Paper}
          square
          sx={{ background: "#F5F6F8" }}
        >
          <TopBar moduleName="Profile" />

          <Container component="main" maxWidth="lg">
            <Box
              sx={{
                marginTop: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
              }}
            >
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
                  Profile
                </Typography>

                <AddProfileModal />

                {/* <Button onClick={handleOpen}
              type="submit"
              fullWidth={false}
              variant="contained"
              sx={{ mt: 2, mb: 2, backgroundColor:'#FBB515', color:"black"}}
            >
              ADD USERS
            </Button> */}
              </Box>

              <Table
                rows={rows}
                columns={columns}
                rowHeight={50}
                height={365}
              />

              {/* <UserTable/> */}
            </Box>
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
