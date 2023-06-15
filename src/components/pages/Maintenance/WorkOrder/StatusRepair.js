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
  FormLabel,
  Checkbox,
  Typography,
  IconButton,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { AddButton } from "../../../../assets/buttons/AddButton";
import Table from "../../AdminScreens/Table";
import DeleteIcon from "@mui/icons-material/Delete";
import { Switch } from "@mui/material";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';




const initialValues = {
  userName: "",
  faultyItem:"",
  workerVendor:"",
  status:"",
  repairSource:"",
  active: false,
};
const validationSchema = Yup.object().shape({
  userName: Yup.string().required("Asset Model is required"),
  faultyItem: Yup.string().required("Head Of Problem is required"),
  workerVendor: Yup.string().required("Worker or Vendor is required"),
  status: Yup.string().required("Status is required"),
  repairSource: Yup.string().required("Repair Source is required"),
});


const userNameData = [
  { value: "optionA", label: "Option A" },
  { value: "optionB", label: "Option B" },
  { value: "optionC", label: "Option C" },
];

const faultyItemData = [
  { value: "optionA", label: "Option A" },
  { value: "optionB", label: "Option B" },
  { value: "optionC", label: "Option C" },
];
const workerData = [
  { value: "optionA", label: "Option A" },
  { value: "optionB", label: "Option B" },
  { value: "optionC", label: "Option C" },
];



const StatusRepair = () => {
    const [open, setOpen] = useState(false);
  const [rows, setrows] = useState([]);
  console.log(JSON.stringify(rows));
  const columns = [
    { field: "id", headerName: "No", width: 70 },
    { field: "userName", headerName: "Name", width: 200 },
    { field: "status", headerName: "Status", width: 100 },
    { field: "repairSource", headerName: "Repair Source", width: 200 },
    { field: "workerVendor", headerName: "Worker or Vendor", width: 200 },
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
      userName: values.userName,
      status: values.status,
      repairSource: values.repairSource,
      workerVendor: values.workerVendor,
    };
    // Update the formData state with the new row data
    setrows((prevFormData) => [...prevFormData, rowData]);
    console.log(values);
    // Reset the form
    resetForm();
  };

  const handleDelete = (id) => {
    setrows((prevFormData) => prevFormData.filter((row) => row.id !== id));
  };

  const handleAPI = () => {
    /**api call here */
    // setOpen(true);
  };

  // const handleFormSubmit = () => {
  //   console.log("ok");
  // };

  const handleOpen = () => {
    setOpen(true);
  };


  return (
    <>
   
          <Box sx={{ px: 3, width: "auto"  }}>
            <Typography id="transition-modal-title" variant="h5" component="h5">
              Status Repair
            </Typography>

            <br/>

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
                    error={touched.userName && Boolean(errors.userName)}
                  >
                    <InputLabel>User Name</InputLabel>
                    <Field
                      name="userName"
                      label="User Name"
                      as={Select}
                      labelId="userName-label"
                      id="userName"
                      value={values.userName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.userName && Boolean(errors.userName)}
                      color="warning"
                      style={{backgroundColor: "white" }}
                    >
                      {userNameData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Field>
                    {touched.userName && errors.userName && (
                      <div className="error">{errors.userName}</div>
                    )}
                  </FormControl>

                  <br />

                  <FormControl
                    variant="outlined"
                    margin="dense"
                    size="small"
                    style={{ width: "45ch" }}
                    error={touched.faultyItem && Boolean(errors.faultyItem)}
                  >
                    <InputLabel>Faulty Item</InputLabel>
                    <Field
                      name="faultyItem"
                      label="Head Of Problem"
                      as={Select}
                      labelId="faultyItem-label"
                      id="faultyItem"
                      value={values.faultyItem}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.faultyItem && Boolean(errors.faultyItem)}
                      style={{backgroundColor: "white" }}
                      color="warning"
                    >
                      {faultyItemData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Field>
                    {touched.faultyItem && errors.faultyItem && (
                      <div className="error">{errors.faultyItem}</div>
                    )}
                  </FormControl>

                  <br />
                  <br />

                  <FormControl>
                      <FormLabel id="demo-row-radio-buttons-group-label">Status</FormLabel>
                      <RadioGroup
                        row
                        value = {values.status}
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel value="OK" control={<Radio />} label="Female" />
                        <FormControlLabel value="Repairable" control={<Radio />} label="Repairable" />
                        <FormControlLabel value="Fully Damaged" control={<Radio />} label="Fully Damaged" />
                      </RadioGroup>
                  </FormControl>

                  <br />
                  <br />

                  <FormControl>
                      <FormLabel id="demo-row-radio-buttons-group-label">Repair Source</FormLabel>
                      <RadioGroup
                        row
                        value = {values.repairSource}
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel value="In House" control={<Radio />} label="In House" />
                        <FormControlLabel value="Out Source" control={<Radio />} label="Out Source" />
      
                      </RadioGroup>
                  </FormControl>

                  <br />

                  <FormControl
                    variant="outlined"
                    margin="dense"
                    size="small"
                    style={{ width: "45ch" }}
                    error={touched.faultyItem && Boolean(errors.faultyItem)}
                  >
                    <InputLabel>Select Worker or Vendor</InputLabel>
                    <Field
                      name="workerVendor"
                      label="Worker or Vendor"
                      as={Select}
                      labelId="workerVendor-label"
                      id="workerVendor"
                      value={values.workerVendor}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.workerVendor && Boolean(errors.workerVendor)}
                      style={{backgroundColor: "white" }}
                      color="warning"
                    >
                      {workerData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Field>
                    {touched.workerVendor && errors.workerVendor && (
                      <div className="error">{errors.workerVendor}</div>
                    )}
                  </FormControl>

                  <br/>

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

                  <Table rows={rows} columns={columns} height={300}/>


                  
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "right",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      // onClick={handleClose}
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

                  </Box>

                  <br/>

                </Form>
              )}
            </Formik>
          </Box>
    </>
  );
};

export default StatusRepair;
