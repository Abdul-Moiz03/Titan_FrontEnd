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
  import { Switch } from "@mui/material";
  
  const style = {
    position: "relative",
    top: "50%",
    left: "50%",
    height: "80%",
    transform: "translate(-50%, -50%)",
    width: 500,
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
    facilityName: "",
    floorName: "",
    subDept: "",
    funcLocName: "",
    code: "",
    funcLocDesc:"",
    active: false,
  };
  const validationSchema = Yup.object().shape({
    facilityName: Yup.string().required("Facility Name is required"),
    floorName: Yup.string().required("Floor Name is required"),
    subDept: Yup.string().required("Sub Department is required"),
    funcLocName: Yup.string().required("Functional Loc Name is required"),
    code: Yup.string().required("Code required"),
    funcLocDesc: Yup.string().required("Functional Loc Desc is required"),
  });
  
  
  const facilityData = [
    { value: "optionA", label: "Option A" },
    { value: "optionB", label: "Option B" },
    { value: "optionC", label: "Option C" },
  ];

  const floorData = [
    { value: "optionA", label: "Option A" },
    { value: "optionB", label: "Option B" },
    { value: "optionC", label: "Option C" },
  ];

  const subDeptData = [
    { value: "optionA", label: "Option A" },
    { value: "optionB", label: "Option B" },
    { value: "optionC", label: "Option C" },
  ];
  
  const Create_Floor = () => {
    const [open, setOpen] = useState(false);
    const [rows, setrows] = useState([]);
    console.log(JSON.stringify(rows));
    const columns = [
      { field: "id", headerName: "No", width: 70 },
      { field: "funcLocName", headerName: "Name", width: 450 },
      { field: "funcLocDesc", headerName: "No of Functional Locations", width: 400 },
      {
        field: "active",
        headerName: "Active",
        width: 100,
        renderCell: (params) => <Switchbtn id={params.row.id} />,
      },
  
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
        funcLocName: values.funcLocName,
        funcLocDesc: values.funcLocDesc,
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
        <AddButton onClickHandle={handleOpen} caption="Location" />
  
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
              <Typography id="transition-modal-title" variant="h5" component="h5">
                Create Functional Location
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
                      style={{ width: "50ch", marginBottom: "12px" }}
                      error={touched.facilityName && Boolean(errors.facilityName)}
                    >
                      <InputLabel>Facility Name</InputLabel>
                      <Field
                        name="facilityName"
                        label="Select Facility Name"
                        as={Select}
                        labelId="facilityName-label"
                        id="facilityName"
                        value={values.facilityName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.facilityName && Boolean(errors.facilityName)}
                        color="warning"
                      >
                        {facilityData.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Field>
                      {touched.facilityName && errors.facilityName && (
                        <div className="error">{errors.facilityName}</div>
                      )}
                    </FormControl>
  
                    <br />

                    <FormControl
                      variant="outlined"
                      margin="dense"
                      size="small"
                      style={{ width: "50ch", marginBottom: "12px" }}
                      error={touched.floorName && Boolean(errors.floorName)}
                    >
                    
                    <InputLabel>Floor Name</InputLabel>
                      <Field
                        name="floorName"
                        label="Select Floor Name"
                        as={Select}
                        labelId="floorName-label"
                        id="floorName"
                        value={values.floorName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.floorName && Boolean(errors.floorName)}
                        color="warning"
                      >
                        {floorData.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Field>
                      {touched.floorName && errors.floorName && (
                        <div className="error">{errors.floorName}</div>
                      )}

                    </FormControl>

                    <br />

                    <FormControl
                      variant="outlined"
                      margin="dense"
                      size="small"
                      style={{ width: "50ch" }}
                      error={touched.subDept && Boolean(errors.subDept)}
                    >
                    
                    <InputLabel>Sub Department</InputLabel>
                      <Field
                        name="subDept"
                        label="Select Sub Department"
                        as={Select}
                        labelId="subDept-label"
                        id="subDept"
                        value={values.subDept}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.subDept && Boolean(errors.subDept)}
                        color="warning"
                      >
                        {subDeptData.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Field>
                      {touched.subDept && errors.subDept && (
                        <div className="error">{errors.subDept}</div>
                      )}

                    </FormControl>

                    <br />

                    <Box sx={{ display: 'flex', marginBottom: 0 }}>
  
                    <FormControl
                      variant="outlined"
                      margin="dense"
                      size="small"
                      style={{ width: "29ch" }}
                      error={touched.funcLocName && Boolean(errors.funcLocName)}
                    >
                    
                    <TextField
                      name="funcLocName"
                      label="Functional Location Name"
                      variant="outlined"
                      fullWidth={false}
                      margin="dense"
                      value={values.funcLocName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.funcLocName && Boolean(errors.funcLocName)}
                      helperText={touched.funcLocName && errors.funcLocName}
                      color="warning"
                      size="small"
                      style={{ width: "29ch" }}
                      InputProps={{ style: { height: "40px", fontSize: "15px" } }}
                    />
  
                    </FormControl>

                    &nbsp; &nbsp; 
  
                    <FormControl
                      variant="outlined"
                      margin="dense"
                      size="small"
                      style={{ width: "20ch"}}
                      error={touched.code && Boolean(errors.code)}
                    >
                    
                    <TextField
                      name="code"
                      label="Code"
                      variant="outlined"
                      fullWidth={false}
                      margin="dense"
                      value={values.code}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.code && Boolean(errors.code)}
                      helperText={touched.code && errors.code}
                      color="warning"
                      size="small"
                      style={{ width: "20ch"}}
                      InputProps={{ style: { height: "40px", fontSize: "15px" } }}
                    />
  
                    </FormControl>
                    
                    </Box>
  
                    <br />

                    <FormControl
                      variant="outlined"
                      margin="dense"
                      size="small"
                      style={{ width: "50ch", marginTop:0  }}
                      error={touched.funcLocDesc && Boolean(errors.funcLocDesc)}
                    >
                    
                    <TextField
                      name="funcLocDesc"
                      label="Functional Location Description"
                      variant="outlined"
                      fullWidth={false}
                      margin="dense"
                      value={values.funcLocDesc}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.funcLocDesc && Boolean(errors.funcLocDesc)}
                      helperText={touched.funcLocDesc && errors.funcLocDesc}
                      color="warning"
                      size="small"
                      style={{ width: "50ch", marginTop:0  }}
                      InputProps={{ style: { height: "80px", fontSize: "15px" } }}
                    />
  
                    </FormControl>

                    <br />

                    <FormControlLabel
                    control={
                      <Checkbox
                        name="active"
                        checked={values.active}
                        onChange={handleChange}
                      />
                    }
                    label="Active"
                  />
  
                     
                    {/* <Table rows={rows} columns={columns} height={300}/> */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "right",
                        alignItems: "center",
                      }}
                    >

                      {/* <Link to="/floorName" style={{ textDecoration: "none" }}> */}
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
  
  export default Create_Floor;
  