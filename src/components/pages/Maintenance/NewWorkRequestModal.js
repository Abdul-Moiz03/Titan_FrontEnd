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
  SelectAsset: "",
  UserName: "",

  Headofproblem: "",
  Description: "",
  active: false,
};
const validationSchema = Yup.object().shape({
  SelectAsset: Yup.string().required("Asset is required"),
  UserName: Yup.string().required("UserName is required"),

  Headofproblem: Yup.string().required("Head of problem is required"),
  Description: Yup.string().required("Description is required"),
});

const SelectAssetData = [
  { value: "optionA", label: "Option A" },
  { value: "optionB", label: "Option B" },
  { value: "optionC", label: "Option C" },
];
const HeadofproblemData = [
  { value: "SelectAssetModel", label: "Group Name" },
  { value: "SelectAsset", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
const NewWorkRequestModal = () => {
  const [open, setOpen] = useState(false);
  const [rows, setrows] = useState([]);
  console.log(JSON.stringify(rows));
  const columns = [
    { field: "id", headerName: "No", width: 70 },
    { field: "UserName", headerName: "User Name", width: 200 },
    { field: "SelectAsset", headerName: "Asset", width: 200 },
    { field: "Headofproblem", headerName: "Head of problem", width: 200 },

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
      Headofproblem: values.Headofproblem,
      SelectAsset: values.SelectAsset,
      UserName: values.UserName,
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
      <AddButton onClickHandle={handleOpen} caption="Work Request" />

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
              Work Request
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

                  <FormControl
                    variant="outlined"
                    margin="dense"
                    size="small"
                    style={{ width: "45ch" }}
                    error={touched.SelectAsset && Boolean(errors.SelectAsset)}
                  >
                    <InputLabel>Head of problem</InputLabel>
                    <Field
                      name="Headofproblem"
                      label="Head of problem"
                      as={Select}
                      labelId="Headofproblem-label"
                      id="Headofproblem"
                      value={values.Headofproblem}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.Headofproblem && Boolean(errors.Headofproblem)
                      }
                      color="warning"
                    >
                      {HeadofproblemData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Field>
                    {touched.Headofproblem && errors.Headofproblem && (
                      <div className="error">{errors.Headofproblem}</div>
                    )}
                  </FormControl>
                  <br />
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
                    style={{ width: "45ch" }}
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

export default NewWorkRequestModal;
