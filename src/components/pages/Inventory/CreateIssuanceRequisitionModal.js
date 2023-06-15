import React from "react";
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

// const style = {
//   position: "relative",
//   top: "50%",
//   left: "50%",
//   height: "80%",
//   transform: "translate(-50%, -50%)",
//   width: 1200,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
//   overflow: "scroll",
// };

const initialValues = {
  UserName: "",
  EquipmentName: "",
  Quantity: "",
  Description: "",
};
const validationSchema = Yup.object().shape({
  UserName: Yup.string().required("User Name is required"),
  Description: Yup.string().required("Description is required"),
  EquipmentName: Yup.string().required("Text is required"),
  Quantity: Yup.number().required("Quantity is required"),
});

const UserNameData = [
  { value: "Option1", label: "Option 1" },
  { value: "Option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const CreateIssuanceRequisitionModal = () => {
  const [open, setOpen] = useState(false);
  const [rows, setrows] = useState([]);
  console.log(JSON.stringify(rows));
  const columns = [
    { field: "id", headerName: "No", width: 70 },
    { field: "EquipmentName", headerName: "Equipment Name", width: 750 },
    { field: "Quantity", headerName: "Quantity", width: 140 },
    {
      field: "delete",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <IconButton onClick={() => handleDelete(params.row.id)}>
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    // Construct the row data for the DataGrid
    const rowData = {
      id: rows.length + 1,
      EquipmentName: values.EquipmentName,
      Quantity: values.Quantity,
    };
    // Update the formData state with the new row data
    setrows((prevFormData) => [...prevFormData, rowData]);
    console.log(values);
    // Reset the form
    resetForm();
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = (id) => {
    setrows((prevFormData) => prevFormData.filter((row) => row.id !== id));
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
      <AddButton onClickHandle={handleOpen} caption="New" />

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
          <Box
            sx={{
              position: "relative",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              maxWidth: 1200,
              maxHeight: "90%",
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
              overflow: "scroll",
            }}
          >
            <Typography id="transition-modal-title" variant="h4" component="h4">
              Create Issuance Requisition
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
                  <FormControl
                    variant="outlined"
                    margin="dense"
                    size="small"
                    style={{ width: "45ch" }}
                    error={touched.UserName && Boolean(errors.UserName)}
                  >
                    <InputLabel>User Name</InputLabel>
                    <Field
                      name="UserName"
                      label="User Name"
                      as={Select}
                      labelId="UserName-label"
                      id="UserName"
                      value={values.UserName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.UserName && Boolean(errors.UserName)}
                      color="warning"
                      InputProps={{
                        style: { height: "40px", fontSize: "15px" },
                      }}
                    >
                      {UserNameData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Field>
                    {touched.UserName && errors.UserName && (
                      <div className="error">{errors.UserName}</div>
                    )}
                  </FormControl>
                  <br />
                  <TextField
                    name="Description"
                    label="Description"
                    variant="outlined"
                    multiline={true}
                    rows={3}
                    fullWidth={false}
                    margin="dense"
                    value={values.Description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.Description && Boolean(errors.Description)}
                    helperText={touched.Description && errors.Description}
                    color="warning"
                    size="small"
                    style={{ width: "45ch" }}
                    InputProps={{ style: { fontSize: "15px" } }}
                  />
                  <br />
                  <TextField
                    name="EquipmentName"
                    label="Equipment Name"
                    variant="outlined"
                    fullWidth={false}
                    margin="dense"
                    value={values.EquipmentName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.EquipmentName && Boolean(errors.EquipmentName)
                    }
                    helperText={touched.EquipmentName && errors.EquipmentName}
                    color="warning"
                    size="small"
                    style={{ width: "22ch" }}
                    InputProps={{ style: { height: "40px", fontSize: "15px" } }}
                  />

                  <TextField
                    name="Quantity"
                    label="Quantity"
                    variant="outlined"
                    fullWidth={false}
                    margin="dense"
                    value={values.Quantity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.Quantity && Boolean(errors.Quantity)}
                    helperText={touched.Quantity && errors.Quantity}
                    color="warning"
                    size="small"
                    style={{ width: "22ch", marginLeft: "10px" }}
                    InputProps={{ style: { height: "40px", fontSize: "15px" } }}
                  />
                  <br />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
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
                  <Table rows={rows} columns={columns} />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "right",
                      alignEquipmentNames: "center",
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
                    {/* <Link to="/Roles" style={{ textDecoration: "none" }}> */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      fullWidth={false}
                      onClick={handleAPI}
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
                    {/* </Link> */}
                  </Box>
                  {/* <Button variant="contained" color="primary">
                        Submit
                      </Button> */}
                </Form>
              )}
            </Formik>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default CreateIssuanceRequisitionModal;
