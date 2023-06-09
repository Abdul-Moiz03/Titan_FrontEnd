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
    facilityName: "",
    floorName: "",
    active: false,
  };
  const validationSchema = Yup.object().shape({
    facilityName: Yup.string().required("Profile Name is required"),
    floorName: Yup.string().required("floorName is required"),
  });
  
  
  const ProfileData = [
    { value: "optionA", label: "Option A" },
    { value: "optionB", label: "Option B" },
    { value: "optionC", label: "Option C" },
  ];
  
  const Create_Facility = () => {
    const [open, setOpen] = useState(false);
    const [rows, setrows] = useState([]);
    console.log(JSON.stringify(rows));
    const columns = [
      { field: "id", headerName: "No", width: 70 },
      { field: "floorName", headerName: "Name", width: 450 },
      { field: "noFuncLoc", headerName: "No of Functional Locations", width: 400 },
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
        floorName: values.floorName,
       
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
        <AddButton onClickHandle={handleOpen} caption="Facility" />
  
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
                Create Facility
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
                      error={touched.facilityName && Boolean(errors.facilityName)}
                    >
                      <InputLabel>Facility Name</InputLabel>
                      <Field
                        name="facilityName"
                        label="Select Employee Name"
                        as={Select}
                        labelId="facilityName-label"
                        id="facilityName"
                        value={values.facilityName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.facilityName && Boolean(errors.facilityName)}
                        color="warning"
                      >
                        {ProfileData.map((option) => (
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
  
                    <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
  
  
                    <FormControl
                      variant="outlined"
                      margin="dense"
                      size="small"
                      style={{ width: "45ch" }}
                      error={touched.floorName && Boolean(errors.floorName)}
                    >
                    
                    <TextField
                      name="floorName"
                      label="Floor Name"
                      variant="outlined"
                      fullWidth={false}
                      margin="dense"
                      value={values.floorName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.floorName && Boolean(errors.floorName)}
                      helperText={touched.floorName && errors.floorName}
                      color="warning"
                      size="small"
                      style={{ width: "45ch" }}
                      InputProps={{ style: { height: "40px", fontSize: "15px" } }}
                    />
  
                    </FormControl>
  
                    &nbsp;
                    &nbsp;
  
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
  
  export default Create_Facility;
  