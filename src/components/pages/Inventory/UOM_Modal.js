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
import Table from "../AdminScreens/Table";
import DeleteIcon from "@mui/icons-material/Delete";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  height: "80%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

const initialValues = {
  uomName: "",
  status: false,
};
const validationSchema = Yup.object().shape({
  uomName: Yup.string().required("Text is required"),
});

const UOM_Modal = () => {
  const [open, setOpen] = useState(false);

  const onSubmit = async (values, { resetForm }) => {
    // Construct the row data for the DataGrid
    const statusValue = values.status ? "Active" : "UnActive";
    const rowData = {
      uomName: values.uomName,
      status: statusValue,
    };
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        "http://localhost:8007/api/UnitOfMeasurements",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(rowData),
        }
      );
      const data = await response.status;
      console.log(data);
    } catch (err) {
      console.error("Error:", err);
    }

    console.log(JSON.stringify(rowData));
    resetForm();
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <AddButton onClickHandle={handleOpen} caption="UOM" />

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
            <Typography id="transition-modal-title" variant="h4" component="h4">
              Create UOM
            </Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <TextField
                    name="uomName"
                    label="UOM"
                    variant="outlined"
                    fullWidth={false}
                    margin="dense"
                    value={values.uomName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.uomName && Boolean(errors.uomName)}
                    helperText={touched.uomName && errors.brandName}
                    color="warning"
                    size="small"
                    style={{ width: "22ch" }}
                    InputProps={{ style: { height: "40px", fontSize: "15px" } }}
                  />
                  <br />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="status"
                        checked={values.status}
                        onChange={handleChange}
                      />
                    }
                    label="Active"
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "right",
                      alignitems: "center",
                    }}
                  >
                    <Button
                      onClick={handleClose}
                      fullWidth={false}
                      variant="contained"
                      disabled={isSubmitting}
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
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      fullWidth={false}
                      onClick={onSubmit}
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
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default UOM_Modal;
