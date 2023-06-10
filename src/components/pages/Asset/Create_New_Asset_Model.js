import {
    Modal,
    Button,
    TextField,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Box,
    FormControlLabel,
    Checkbox,
    Typography,
    IconButton,
  } from "@mui/material";
  import { Formik, Form, Field } from "formik";
  import { useState } from "react";
  import * as Yup from "yup";
  import Backdrop from "@mui/material/Backdrop";
  import Fade from "@mui/material/Fade";
  import { AddButton } from "../../../assets/buttons/AddButton";
  import Linear_Asset_Model from "./Linear_Asset_Model";
  import Equipment_Model from "./Equipment_Model";
  import DeleteIcon from "@mui/icons-material/Delete";
  import { Switch } from "@mui/material";
  
  const style = {
    position: "relative",
    top: "50%",
    left: "50%",
    height: "45%",
    transform: "translate(-50%, -50%)",
    width: 470,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    // overflow: "scroll",
  };
  
  
  
  const Create_New_Asset = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen = () => {
      setOpen(true);
    };
    const handleAPI = () => {
      /**api call here */
      setOpen(true);
    };
    return (
      <>
        <AddButton onClickHandle={handleOpen} caption="New Asset" />
  
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
            <Box sx={style} >
            <br/>
              <Typography id="transition-modal-title" variant="h4" component="h4" style={{ textAlign: "center" }}>
                Create New Asset
              </Typography>

                    <br/>
                    <Linear_Asset_Model/>
                    <br/>
                    <Equipment_Model/>

            </Box>
          </Fade>
        </Modal>
      </>
    );
  };
  
  export default Create_New_Asset;
  