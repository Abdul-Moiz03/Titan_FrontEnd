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
  ProcedureName: "",
  TypeOfMaintenance: "",
  SubItemPosition: "",
  SelectAsset: "",
  MethodName: "",
  CheckPoint: "",
  Description: "",
};
const validationSchema = Yup.object().shape({
  ProcedureName: Yup.string().required("Group Name is required"),
  TypeOfMaintenance: Yup.string().required("Category Name is required"),
  SubItemPosition: Yup.string().required("Text is required"),
  SelectAsset: Yup.string().required("Group Name is required"),
  MethodName: Yup.string().required("Group Name is required"),
  CheckPoint: Yup.string().required("Group Name is required"),
  Description: Yup.string().required("Group Name is required"),
});

const ProcedureNameData = [
  { value: "ProcedureName", label: "Group Name" },
  { value: "TypeOfMaintenance", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const TypeOfMaintenanceData = [
  { value: "optionA", label: "Option A" },
  { value: "optionB", label: "Option B" },
  { value: "optionC", label: "Option C" },
];
const SelectAssetData = [
  { value: "optionA", label: "Option A" },
  { value: "optionB", label: "Option B" },
  { value: "optionC", label: "Option C" },
];
const MethodNameData = [
  { value: "optionA", label: "Option A" },
  { value: "optionB", label: "Option B" },
  { value: "optionC", label: "Option C" },
];
const CheckPointData = [
  { value: "ProcedureName", label: "Group Name" },
  { value: "TypeOfMaintenance", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
const AddProcedureModal = () => {
  const [open, setOpen] = useState(false);
  const [rows, setrows] = useState([]);
  console.log(JSON.stringify(rows));
  const columns = [
    { field: "id", headerName: "No", width: 70 },
    {
      field: "MethodName",
      headerName: "Method Name",
      width: 400,
    },
    { field: "SubItemPosition", headerName: "Position", width: 200 },
    { field: "CheckPoint", headerName: "Check Point", width: 200 },
    { field: "Description", headerName: "Description", width: 200 },
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
      SubItemPosition: values.SubItemPosition,
      TypeOfMaintenance: values.TypeOfMaintenance,
      ProcedureName: values.ProcedureName,
      SelectAsset: values.SelectAsset,
      MethodName: values.MethodName,
      CheckPoint: values.CheckPoint,
      Description: values.Description,
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
      <AddButton onClickHandle={handleOpen} caption="Procedure" />

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
              Add Procedure
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
                    error={
                      touched.ProcedureName && Boolean(errors.ProcedureName)
                    }
                  >
                    <InputLabel>Procedure Name</InputLabel>
                    <Field
                      name="ProcedureName"
                      label="Procedure Name"
                      as={Select}
                      labelId="ProcedureName-label"
                      id="ProcedureName"
                      value={values.ProcedureName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.ProcedureName && Boolean(errors.ProcedureName)
                      }
                      color="warning"
                      InputProps={{
                        style: { height: "40px", fontSize: "15px" },
                      }}
                    >
                      {ProcedureNameData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Field>
                    {touched.ProcedureName && errors.ProcedureName && (
                      <div className="error">{errors.ProcedureName}</div>
                    )}
                  </FormControl>
                  <br />
                  <FormControl
                    variant="outlined"
                    margin="dense"
                    size="small"
                    style={{ width: "45ch" }}
                    error={
                      touched.TypeOfMaintenance &&
                      Boolean(errors.TypeOfMaintenance)
                    }
                  >
                    <InputLabel>Type Of Maintenance</InputLabel>
                    <Field
                      name="TypeOfMaintenance"
                      label="Type Of Maintenance"
                      as={Select}
                      labelId="TypeOfMaintenance-label"
                      id="TypeOfMaintenance"
                      value={values.TypeOfMaintenance}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.TypeOfMaintenance &&
                        Boolean(errors.TypeOfMaintenance)
                      }
                      color="warning"
                    >
                      {TypeOfMaintenanceData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Field>
                    {touched.TypeOfMaintenance && errors.TypeOfMaintenance && (
                      <div className="error">{errors.TypeOfMaintenance}</div>
                    )}
                  </FormControl>
                  <br />
                  <FormControl
                    variant="outlined"
                    margin="dense"
                    size="small"
                    style={{ width: "45ch" }}
                    error={touched.SelectAsset && Boolean(errors.SelectAsset)}
                  >
                    <InputLabel>Select Asset</InputLabel>
                    <Field
                      name="SelectAsset"
                      label="Select Asset"
                      as={Select}
                      labelId="SelectAsset-label"
                      id="SelectAsset"
                      value={values.SelectAsset}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.SelectAsset && Boolean(errors.SelectAsset)}
                      color="warning"
                      InputProps={{
                        style: { height: "40px", fontSize: "15px" },
                      }}
                    >
                      {SelectAssetData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Field>
                    {touched.SelectAsset && errors.SelectAsset && (
                      <div className="error">{errors.SelectAsset}</div>
                    )}
                  </FormControl>
                  <br />
                  <TextField
                    name="SubItemPosition"
                    label="Sub Item Position"
                    variant="outlined"
                    fullWidth={false}
                    margin="dense"
                    value={values.SubItemPosition}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.SubItemPosition && Boolean(errors.SubItemPosition)
                    }
                    helperText={
                      touched.SubItemPosition && errors.SubItemPosition
                    }
                    color="warning"
                    size="small"
                    style={{ width: "22ch" }}
                    InputProps={{ style: { height: "40px", fontSize: "15px" } }}
                  />
                  <FormControl
                    variant="outlined"
                    margin="dense"
                    size="small"
                    style={{ width: "23ch" }}
                    error={touched.MethodName && Boolean(errors.MethodName)}
                  >
                    <InputLabel>Method Name</InputLabel>
                    <Field
                      name="MethodName"
                      label="Method Name"
                      as={Select}
                      labelId="MethodName-label"
                      id="MethodName"
                      value={values.MethodName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.MethodName && Boolean(errors.MethodName)}
                      color="warning"
                      InputProps={{
                        style: { height: "40px", fontSize: "15px" },
                      }}
                    >
                      {MethodNameData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Field>
                    {touched.MethodName && errors.MethodName && (
                      <div className="error">{errors.MethodName}</div>
                    )}
                  </FormControl>
                  <br />
                  <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h6"
                  >
                    Health and Safety Checklist
                  </Typography>
                  <FormControl
                    variant="outlined"
                    margin="dense"
                    size="small"
                    style={{ width: "23ch" }}
                    error={touched.MethodName && Boolean(errors.MethodName)}
                  >
                    <InputLabel>Check Point</InputLabel>
                    <Field
                      name="CheckPoint"
                      label="Check Point"
                      as={Select}
                      labelId="CheckPoint-label"
                      id="CheckPoint"
                      value={values.CheckPoint}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.CheckPoint && Boolean(errors.CheckPoint)}
                      color="warning"
                      InputProps={{
                        style: { height: "40px", fontSize: "15px" },
                      }}
                    >
                      {CheckPointData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Field>
                    {touched.CheckPoint && errors.CheckPoint && (
                      <div className="error">{errors.CheckPoint}</div>
                    )}
                  </FormControl>
                  <TextField
                    name="Description"
                    label="Description"
                    variant="outlined"
                    fullWidth={false}
                    margin="dense"
                    value={values.Description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.Description && Boolean(errors.Description)}
                    helperText={touched.Description && errors.Description}
                    color="warning"
                    size="small"
                    style={{ width: "22ch" }}
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
                      alignItems: "center",
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

export default AddProcedureModal;
