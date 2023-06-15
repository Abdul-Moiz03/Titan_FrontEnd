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
  
  const style = {
    position: "relative",
    top: "50%",
    left: "50%",
    height: "80%",
    transform: "translate(-50%, -50%)",
    width: 1200,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflow: "scroll",
  };
  
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
    workOrderType: "",
    requestID:"",
    headOfProblem:"",
    department:"",
    subDept:"",
    location:"",
    description:"",
    active: false,
  };
  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("Asset Model is required"),
    workOrderType: Yup.string().required("Asset Name is required"),
    requestID: Yup.string().required("requestID is required"),
    headOfProblem: Yup.string().required("Brand is required"),
    department: Yup.string().required("Department is required"),
    subDept: Yup.string().required("Sub Department is required"),
    location: Yup.string().required("Location is required"),
    description: Yup.string().required("Description is required"),
  });
  
  
  const assetModelData = [
    { value: "optionA", label: "Option A" },
    { value: "optionB", label: "Option B" },
    { value: "optionC", label: "Option C" },
  ];
  
  const locationData = [
    { value: "optionA", label: "Option A" },
    { value: "optionB", label: "Option B" },
    { value: "optionC", label: "Option C" },
  ];
  const brandData = [
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
  
  
  const Work_Order = () => {
    const [open, setOpen] = useState(false);
    const [rows, setrows] = useState([]);
    console.log(JSON.stringify(rows));
    const columns = [
      { field: "id", headerName: "No", width: 70 },
      { field: "assetName", headerName: "Asset Name", width: 350 },
      { field: "assetType", headerName: "Asset Type", width: 350 },
      { field: "location", headerName: "Location", width: 150 },
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
        workOrderType: values.workOrderType,
        headOfProblem:values.headOfProblem,
        department:values.department,
        subDept:values.subDept,
        description: values.description,
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
        {/* <AddButton onClickHandle={handleOpen} caption="Linear Asset Model" /> */}
  
                    {/* <Button style={{ width: "42ch", height:"6ch", fontSize: "20px" }}
                        type="submit"
                        // disabled={isSubmitting}
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
                        &nbsp;  Equipment &nbsp;
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
          <Fade in={open}> */}
            <Box sx={{ px: 3, width: "auto"  }}>
              <Typography id="transition-modal-title" variant="h4" component="h4">
                Work Order
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
                      style={{ width: "45ch"}}
                      error={touched.linearAsset && Boolean(errors.linearAsset)}
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
                        style={{ backgroundColor: "white" }}
                      >
                        {assetModelData.map((option) => (
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
                      style={{ width: "22ch" }}
                      error={touched.workOrderType && Boolean(errors.workOrderType)}
                    >
                    
                    <TextField
                      name="workOrderType"
                      label="Work Order Type"
                      variant="outlined"
                      fullWidth={false}
                      margin="dense"
                      value={values.workOrderType}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.workOrderType && Boolean(errors.workOrderType)}
                      helperText={touched.workOrderType && errors.workOrderType}
                      color="warning"
                      size="small"
                      style={{ width: "22ch" , backgroundColor: "white"}}
                      InputProps={{ style: { height: "40px", fontSize: "15px" } }}
                    />
  
                    </FormControl>
  
                    &nbsp; &nbsp; 
  
                    <FormControl
                      variant="outlined"
                      margin="dense"
                      size="small"
                      style={{ width: "22ch"}}
                      error={touched.requestID && Boolean(errors.requestID)}
                    >
                    
                    <TextField
                      name="requestID"
                      label="Request ID"
                      variant="outlined"
                      fullWidth={false}
                      margin="dense"
                      value={values.requestID}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.requestID && Boolean(errors.requestID)}
                      helperText={touched.requestID && errors.requestID}
                      color="warning"
                      size="small"
                      style={{ width: "22ch", backgroundColor: "white"}}
                      InputProps={{ style: { height: "40px", fontSize: "15px" } }}
                    />
  
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
                        style={{  backgroundColor: "white"}}
                        error={touched.headOfProblem && Boolean(errors.headOfProblem)}
                        color="warning"
                      >
                        {brandData.map((option) => (
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
                      error={touched.description && Boolean(errors.description)}
                    >
                    
                    <TextField
                      name="description"
                      label="Description"
                      multiline={true}
                      rows={3}
                      variant="outlined"
                      fullWidth={false}
                      margin="dense"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.description && Boolean(errors.description)}
                      helperText={touched.description && errors.description}
                      color="warning"
                      size="small"
                      style={{ width: "45ch",  backgroundColor: "white" }}
                      InputProps={{ style: {  fontSize: "15px"} }}
                      
                    />
  
                    </FormControl>
  
                    <br />
  
                    <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
  
                    <Button
                      // type="submit"
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
                      &nbsp; &nbsp; Add New Asset &nbsp; &nbsp;
                    </Button>
  
                    </Box>
  
                    <Table rows={rows} columns={columns} height={300}/>
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
  
  
                      {/* </Link> */}
                    </Box>
  
                    <br/>
  
                    <BottomNavBar/>
  
                    
  
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
  
  export default Work_Order;
  