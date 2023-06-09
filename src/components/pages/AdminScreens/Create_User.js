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
    width: 1200,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflow: "scroll",
  };
  
  const initialValues = {
    Department: "",
    EmpName: "",
    UserName: "",
    SetPassword: "",
    active: false,
  };
  const validationSchema = Yup.object().shape({
    Department: Yup.string().required("Department is required"),
    EmpName: Yup.string().required("Employee Name is required"),
    UserName: Yup.string().required("UserName is required"),
    SetPassword: Yup.string().required("Password is required"),
    Roles: Yup.string().required("Roles is required"),
  });
  
  const DepartmentData = [
    { value: "Department", label: "Group Name" },
    { value: "EmpName", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  
  const EmpData = [
    { value: "optionA", label: "Option A" },
    { value: "optionB", label: "Option B" },
    { value: "optionC", label: "Option C" },
  ];

  const Create_User = () => {
    const [open, setOpen] = useState(false);
    const [rows, setrows] = useState([]);
    console.log(JSON.stringify(rows));
    const columns = [
      { field: "id", headerName: "No", width: 70 },
      { field: "Roles", headerName: "Roles", width: 900 },

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
        Roles: values.Roles,
       
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
        <AddButton onClickHandle={handleOpen} caption="User" />
  
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
                Create User
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
                        touched.Department &&
                        Boolean(errors.Department)
                      }
                    >
                      <InputLabel>Department</InputLabel>
                      <Field
                        name="Department"
                        label="Department"
                        as={Select}
                        labelId="Department-label"
                        id="Department"
                        value={values.Department}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.Department &&
                          Boolean(errors.Department)
                        }
                        color="warning"
                        InputProps={{
                          style: { height: "40px", fontSize: "15px" },
                        }}
                      >
                        {DepartmentData.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Field>
                      {touched.Department && errors.Department && (
                        <div className="error">{errors.Department}</div>
                      )}
                    </FormControl>
                    <br />
                    <FormControl
                      variant="outlined"
                      margin="dense"
                      size="small"
                      style={{ width: "45ch" }}
                      error={touched.EmpName && Boolean(errors.EmpName)}
                    >
                      <InputLabel>Employee Name</InputLabel>
                      <Field
                        name="EmpName"
                        label="Select Employee Name"
                        as={Select}
                        labelId="EmpName-label"
                        id="EmpName"
                        value={values.EmpName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.EmpName && Boolean(errors.EmpName)}
                        color="warning"
                      >
                        {EmpData.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Field>
                      {touched.EmpName && errors.EmpName && (
                        <div className="error">{errors.EmpName}</div>
                      )}
                    </FormControl>

                    <br />
          
                    <TextField
                        name="UserName"
                        label="User Name"
                        variant="outlined"
                        fullWidth={false}
                        margin="dense"
                        value={values.UserName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.UserName && Boolean(errors.UserName)}
                        helperText={touched.UserName && errors.UserName}
                        color="warning"
                        size="small"
                        style={{ width: "45ch" }}
                        InputProps={{ style: { height: "40px", fontSize: "15px" } }}
                    />

                    <br />
  
                    <TextField
                      name="SetPassword"
                      label="Set Password"
                      variant="outlined"
                      fullWidth={false}
                      margin="dense"
                      value={values.SetPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.SetPassword && Boolean(errors.SetPassword)}
                      helperText={touched.SetPassword && errors.SetPassword}
                      color="warning"
                      size="small"
                      style={{ width: "45ch" }}
                      InputProps={{ style: { height: "40px", fontSize: "15px" } }}
                    />
                    <br />

                    <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                    
                    <TextField
                      name="Roles"
                      label="Roles"
                      variant="outlined"
                      fullWidth={false}
                      margin="dense"
                      value={values.Roles}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.Roles && Boolean(errors.Roles)}
                      helperText={touched.Roles && errors.Roles}
                      color="warning"
                      size="small"
                      style={{ width: "45ch" }}
                      InputProps={{ style: { height: "40px", fontSize: "15px" } }}
                    />

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
  
  export default Create_User;
  