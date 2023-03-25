import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CreateUserTable from "./CreateUserTable";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import Table from "./Table";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import "../styles.css";

const menuStyle = {
  "&:hover": {
    backgroundColor: "#FABE4B",
    cursor: "pointer",
  },
};

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "userName", headerName: "User Name", width: 900 },
  {
    field: "actions",
    headerName: "Actions",
    width: 90,
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
        </div>
      );
    },
  },
];

const rows = [
  { id: 1, empName: "Snow", userName: "Jon", credentials: 35 },
  { id: 2, empName: "Lannister", userName: "Cersei", credentials: 42 },
  { id: 3, empName: "Lannister", userName: "Jaime", credentials: 45 },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        type="submit"
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
        &nbsp; &nbsp; Add &nbsp; &nbsp;
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h6">
              Create New Profile
            </Typography>
            <br />
            <FormControl sx={{ m: 1, minWidth: 400 }}>
              <InputLabel
                id="demo-simple-select-helper-label"
                sx={{ mt: -1, mb: 1 }}
                color="warning"
              >
                {" "}
                Profie Name
              </InputLabel>
              <Select
                style={{ width: "45ch", height: "40px" }}
                color="warning"
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                label="Profile Name"
                onChange={handleChange}
              >
                {/* <MenuItem value="Select" sx={menuStyle}>
                  <em>Select</em>
                </MenuItem> */}

                <MenuItem value={10} sx={menuStyle}>
                  Ten
                </MenuItem>
                <MenuItem value={20} sx={menuStyle}>
                  Twenty
                </MenuItem>
                <MenuItem value={30} sx={menuStyle}>
                  Thirty
                </MenuItem>
              </Select>
            </FormControl>
            <Box
              sx={{
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
              }}
            >
              <TextField
                margin="dense"
                required
                fullWidth={false}
                name="userName"
                label="User Name"
                type="userName"
                id="userName"
                autoComplete="userName"
                size="small"
                color="warning"
                style={{ width: "40ch" }}
                InputProps={{ style: { height: "40px", fontSize: "15px" } }}
              />
              &nbsp; &nbsp;
              <Button
                onClick={handleOpen}
                type="submit"
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
                &nbsp; &nbsp; ADD &nbsp; &nbsp;
              </Button>
            </Box>

            <Table rows={rows} columns={columns} height={250} />

            {/* <CreateUserTable/> */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
              }}
            >
              <Button
                onClick={handleOpen}
                type="submit"
                fullWidth={false}
                variant="contained"
                sx={{
                  mt: 2,
                  mb: 0,
                  backgroundColor: "#FBB515",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#FABE4B",
                  },
                }}
              >
                &nbsp; CANCEL &nbsp;
              </Button>
              &nbsp; &nbsp;
              <Link to="/Profile" style={{ textDecoration: "none" }}>
                <Button
                  onClick={handleOpen}
                  type="submit"
                  fullWidth={false}
                  variant="contained"
                  sx={{
                    mt: 2,
                    mb: 0,
                    backgroundColor: "#FBB515",
                    color: "black",
                    "&:hover": {
                      backgroundColor: "#FABE4B",
                    },
                  }}
                >
                  &nbsp; &nbsp; SAVE &nbsp; &nbsp;
                </Button>
              </Link>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
