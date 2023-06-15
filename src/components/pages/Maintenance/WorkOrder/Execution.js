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
import { AddButton } from "../../../../assets/buttons/AddButton";
import Table from "../../AdminScreens/Table";
import DeleteIcon from "@mui/icons-material/Delete";
import { Switch } from "@mui/material";
import BottomNavBar from "./BottomNavBar";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


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

const initialValues = {
  userName: "",
  // startDate: "",
  // endDate:"",
  // startTime:"",
  // endTime:"",
  headOfProblem:"",
  remarks:"",
  active: false,
};
const validationSchema = Yup.object().shape({
  userName: Yup.string().required("Asset Model is required"),
  startDate: Yup.string().required("Start Date is required"),
  endDate: Yup.string().required("End Date is required"),
  headOfProblem: Yup.string().required("Head Of Problem is required"),
  startTime: Yup.string().required("Start Time is required"),
  endTime: Yup.string().required("End Time is required"),
  remarks: Yup.string().required("Description is required"),
});


const userNameData = [
  { value: "optionA", label: "Option A" },
  { value: "optionB", label: "Option B" },
  { value: "optionC", label: "Option C" },
];

const locationData = [
  { value: "optionA", label: "Option A" },
  { value: "optionB", label: "Option B" },
  { value: "optionC", label: "Option C" },
];
const HOPData = [
  { value: "optionA", label: "Option A" },
  { value: "optionB", label: "Option B" },
  { value: "optionC", label: "Option C" },
];
const departmentData = [
  { value: "optionA", label: "Option A" },
  { value: "optionB", label: "Option B" },
  { value: "optionC", label: "Option C" },
];
const subDeptData = [
  { value: "optionA", label: "Option A" },
  { value: "optionB", label: "Option B" },
  { value: "optionC", label: "Option C" },
];


const Execution = () => {
    const [open, setOpen] = useState(false);
  const [rows, setrows] = useState([]);
  console.log(JSON.stringify(rows));
  const columns = [
    { field: "id", headerName: "No", width: 70 },
    { field: "userName", headerName: "Name", width: 200 },
    { field: "startDate", headerName: "Start Date", width: 100 },
    { field: "startTime", headerName: "Start Time", width: 100 },
    { field: "endTime", headerName: "End Time", width: 100 },
    { field: "endDate", headerName: "End Date", width: 100 },
    { field: "remarks", headerName: "Remarks", width: 150 },
  //   {
  //     field: "active",
  //     headerName: "Active",
  //     width: 100,
  //     renderCell: (params) => <Switchbtn id={params.row.id} />,
  //   },

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
      startDate: values.startDate,
      startTime: values.startTime,
      endTime: values.endTime,
      endDate: values.endDate,
      headOfProblem:values.headOfProblem,
      remarks: values.remarks,
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
              Execution
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

                  <Box sx={{ display: 'flex', marginBottom: 0 }}>

                        <FormControl
                          variant="outlined"
                          margin="dense"
                          size="small"
                          style={{ width: "23ch"}}
                          error={touched.startDate && Boolean(errors.startDate)}
                        >

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']} >
                              <DatePicker 
                                  name="startDate"
                                  id="startDate"
                                  value={values.startDate} 
                                  onChange={handleChange} 
                                  label="Start Date" 
                                  error={touched.startDate && Boolean(errors.startDate)}
                                  sx={{ width: '70px', backgroundColor: '#FFFFFF' }} />
                            </DemoContainer>
                        </LocalizationProvider>

                        </FormControl>

                        &nbsp; &nbsp; 

                        <FormControl
                          variant="outlined"
                          margin="dense"
                          size="small"
                          // style={{ width: "20ch"}}
                          error={touched.endDate && Boolean(errors.endDate)}
                        >

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer  components={['DatePicker']}>
                              <DatePicker 
                                  name="endDate"
                                  id="endDate" 
                                  value={values.endDate} 
                                  onChange={handleChange} 
                                  label="End Date" 
                                  error={touched.endDate && Boolean(errors.endDate)}
                                  sx={{ width: '50px', backgroundColor: '#FFFFFF' }}  />
                            </DemoContainer>
                        </LocalizationProvider>

                        </FormControl>

                          </Box>

                          <Box sx={{ display: 'flex', marginBottom: 0 }}>

                          <FormControl
                          variant="outlined"
                          margin="dense"
                          size="small"
                          style={{ width: "23ch"}}
                          error={touched.startTime && Boolean(errors.startTime)}
                        >

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['TimePicker']}>
                              <TimePicker 
                                  name="startTime"
                                  id="startTime"
                                  value={values.startTime} 
                                  onChange={handleChange} 
                                  error={touched.startTime && Boolean(errors.startTime)}
                                  label="Start Time" 
                                  sx={{ width: '50px', backgroundColor: '#FFFFFF' }}  />
                            </DemoContainer>
                          </LocalizationProvider>

                          </FormControl>
                          
                          &nbsp; &nbsp; 

                          <FormControl
                          variant="outlined"
                          margin="dense"
                          size="small"
                          // style={{ width: "23ch"}}
                          
                          error={touched.endTime && Boolean(errors.endTime)}
                        >

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['TimePicker']}>
                              <TimePicker 
                                  name="endTime"
                                  id="endTime" 
                                  value={values.endTime} 
                                  onChange={handleChange} 
                                  label="End Time" 
                                  error={touched.endTime && Boolean(errors.endTime)}
                                  sx={{ width: '40px', backgroundColor: '#FFFFFF' }}
                                  />
                            </DemoContainer>
                          </LocalizationProvider>

                          </FormControl>  

                        <br />

                        </Box>
                  <FormControl
                    variant="outlined"
                    margin="dense"
                    size="small"
                    style={{ width: "45ch" }}
                    error={touched.headOfProblem && Boolean(errors.headOfProblem)}
                  >
                    <InputLabel>Head Of Problem</InputLabel>
                    <Field
                      name="headOfProblem"
                      label="Head Of Problem"
                      as={Select}
                      labelId="headOfProblem-label"
                      id="headOfProblem"
                      value={values.headOfProblem}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.headOfProblem && Boolean(errors.headOfProblem)}
                      style={{backgroundColor: "white" }}
                      color="warning"
                    >
                      {HOPData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Field>
                    {touched.headOfProblem && errors.headOfProblem && (
                      <div className="error">{errors.headOfProblem}</div>
                    )}
                  </FormControl>

                  <br />

                  <FormControl
                    variant="outlined"
                    margin="dense"
                    size="small"
                    style={{ width: "45ch" }}
                    error={touched.remarks && Boolean(errors.remarks)}
                  >
                  
                  <TextField
                    name="remarks"
                    label="Remarks"
                    multiline={true}
                    rows={3}
                    variant="outlined"
                    fullWidth={false}
                    margin="dense"
                    value={values.remarks}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.remarks && Boolean(errors.remarks)}
                    helperText={touched.remarks && errors.remarks}
                    color="warning"
                    size="small"
                    style={{ width: "45ch", backgroundColor: "white" }}
                    InputProps={{ style: {  fontSize: "15px"} }}
                  />

                  </FormControl>

                  <br />

                  {/* <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}> */}

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
                    {/* <Link to="/linearAssetName" style={{ textDecoration: "none" }}> */}
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

                  {/* <Button variant="contained" color="primary">
                      Submit
                    </Button> */}
                </Form>
              )}
            </Formik>
          </Box>
        {/* </Fade>
      </Modal> */}
    </>
  );
};

export default Execution;
