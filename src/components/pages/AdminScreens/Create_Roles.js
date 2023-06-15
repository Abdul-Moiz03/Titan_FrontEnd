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
import Table from "./Table";
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
  RoleName: "",
  Department: "",
  Permission: "",
  active: false,
};
const validationSchema = Yup.object().shape({
  Department: Yup.string().required("Department is required"),
  RoleName: Yup.string().required("Employee Name is required"),
  UserName: Yup.string().required("UserName is required"),
  SetPassword: Yup.string().required("Password is required"),
  Roles: Yup.string().required("Roles is required"),
});

const RolesData = [
  { value: "optionA", label: "Option A" },
  { value: "optionB", label: "Option B" },
  { value: "optionC", label: "Option C" },
];

const DepartmentData = [
  { value: "Department", label: "Group Name" },
  { value: "RoleName", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const PermissionData = [
  { value: "Department", label: "Group Name" },
  { value: "RoleName", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const Create_Roles = () => {
  const [open, setOpen] = useState(false);
  const [deptRows, setDeptRows] = useState([]);
  const [permissionRows, setPermissionRows] = useState([]);
  console.log(JSON.stringify(deptRows));
  console.log(JSON.stringify(permissionRows));

  const deptColumns = [
    { field: "id", headerName: "No", width: 70 },
    { field: "Department", headerName: "Department", width: 900 },

    {
      field: "delete",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <IconButton onClick={() => handleDeptDelete(params.row.id)}>
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  const permColumns = [
    { field: "id", headerName: "No", width: 70 },
    { field: "Permission", headerName: "Permission", width: 900 },

    {
      field: "delete",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <IconButton onClick={() => handlePermDelete(params.row.id)}>
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  const handleDeptSubmit = (values, { setDeptSubmitting, resetForm }) => {
    const deptRowData = {
      id: deptRows.length + 1,
      Department: values.Department,
    };
    setDeptRows((prevDeptRows) => [...prevDeptRows, deptRowData]);
    console.log(values);
    resetForm();
  };

  const handlePermissionSubmit = (values, { setPermSubmitting, resetForm }) => {
    const permRowData = {
      id: permissionRows.length + 1,
      Permission: values.Permission,
    };
    setPermissionRows((prevPermRows) => [...prevPermRows, permRowData]);
    console.log(values);
    resetForm();
  };

  // const onSubmit = (values, { setSubmitting, resetForm }) => {
  //   if (values.formType === 'dept') {
  //     handleDeptSubmit(values, { setSubmitting, resetForm });
  //   } else if (values.formType === 'perm') {
  //     handlePermissionSubmit(values, { setSubmitting, resetForm });
  //   }
  // };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDeptDelete = (id) => {
    setDeptRows((prevFormData) => prevFormData.filter((row) => row.id !== id));
  };

  const handlePermDelete = (id) => {
    setPermissionRows((prevFormData) =>
      prevFormData.filter((row) => row.id !== id)
    );
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
      <AddButton onClickHandle={handleOpen} caption="Roles" />

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
              onSubmit={handlePermissionSubmit}
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
                    error={touched.RoleName && Boolean(errors.RoleName)}
                  >
                    <InputLabel>Role Name</InputLabel>
                    <Field
                      name="RoleName"
                      label="Select Role Name"
                      as={Select}
                      labelId="RoleName-label"
                      id="RoleName"
                      value={values.RoleName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.RoleName && Boolean(errors.RoleName)}
                      color="warning"
                    >
                      {RolesData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Field>
                    {touched.RoleName && errors.RoleName && (
                      <div className="error">{errors.RoleName}</div>
                    )}
                  </FormControl>

                  <br />

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "12%",
                    }}
                  >
                    <Typography
                      id="transition-modal-title"
                      variant="h6"
                      sx={{ textAlign: "left" }}
                    >
                      Department
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        height: "5%",
                      }}
                    >
                      <FormControl
                        variant="outlined"
                        margin="dense"
                        size="small"
                        style={{ width: "45ch" }}
                        error={touched.Department && Boolean(errors.Department)}
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
                            touched.Department && Boolean(errors.Department)
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
                      &nbsp; &nbsp;
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
                  </Box>

                  {/* <Table rows={deptRowData} columns={deptColumns}  height={185}/> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "12%",
                    }}
                  >
                    <Typography
                      id="transition-modal-title"
                      variant="h6"
                      sx={{ textAlign: "left" }}
                    >
                      Permissions
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        height: "5%",
                      }}
                    >
                      <FormControl
                        variant="outlined"
                        margin="dense"
                        size="small"
                        style={{ width: "45ch" }}
                        error={touched.Permission && Boolean(errors.Permission)}
                      >
                        <InputLabel>Permission</InputLabel>
                        <Field
                          name="Permission"
                          label="Permission"
                          as={Select}
                          labelId="Permission-label"
                          id="Permission"
                          value={values.Permission}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.Permission && Boolean(errors.Permission)
                          }
                          color="warning"
                          InputProps={{
                            style: { height: "40px", fontSize: "15px" },
                          }}
                        >
                          {PermissionData.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Field>
                        {touched.Permission && errors.Permission && (
                          <div className="error">{errors.Permission}</div>
                        )}
                      </FormControl>
                      &nbsp; &nbsp;
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
                  </Box>

                  {/* <Table rows={permRowData} columns={permColumns}  height={185}/> */}

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

export default Create_Roles;
