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
    linearAsset: "",
    linearAssetName: "",
    description:"",
    active: false,
  };
  const validationSchema = Yup.object().shape({
    linearAsset: Yup.string().required("Linear Asset Model is required"),
    linearAssetName: Yup.string().required("Linear Asset Name is required"),
    description: Yup.string().required("Description is required"),
  });
  
  
  const linearAssetData = [
    { value: "optionA", label: "Option A" },
    { value: "optionB", label: "Option B" },
    { value: "optionC", label: "Option C" },
  ];
  
  const subItemData = [
    { value: "optionA", label: "Option A" },
    { value: "optionB", label: "Option B" },
    { value: "optionC", label: "Option C" },
  ];



  const Linear_Asset = () => {
    const [open, setOpen] = useState(false);
    const [rows, setrows] = useState([]);
    console.log(JSON.stringify(rows));
    const columns = [
      { field: "id", headerName: "No", width: 70 },
      { field: "linearAsset", headerName: "Linear Asset Model", width: 350 },
      { field: "linearAssetName", headerName: "Linear Asset Name", width: 250 },
      { field: "description", headerName: "Description", width: 250 },
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
        linearAsset: values.linearAsset,
        linearAssetName: values.linearAssetName,
        description: values.description
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
  
                    <Button style={{ width: "42ch", height:"6ch", fontSize: "20px" }}
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
                        &nbsp;  Linear Asset &nbsp;
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
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h5" component="h5">
                Linear Asset
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
                      error={touched.linearAsset && Boolean(errors.linearAsset)}
                    >
                      <InputLabel>Linear Asset Model Name</InputLabel>
                      <Field
                        name="linearAsset"
                        label="Linear Asset Model Name"
                        as={Select}
                        labelId="linearAsset-label"
                        id="linearAsset"
                        value={values.linearAsset}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.linearAsset && Boolean(errors.linearAsset)}
                        color="warning"
                      >
                        {linearAssetData.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Field>
                      {touched.linearAsset && errors.linearAsset && (
                        <div className="error">{errors.linearAsset}</div>
                      )}
                    </FormControl>
  
                    <br />

                    <FormControl
                      variant="outlined"
                      margin="dense"
                      size="small"
                      style={{ width: "45ch" }}
                      error={touched.linearAssetName && Boolean(errors.linearAssetName)}
                    >
                    
                    <TextField
                      name="linearAssetName"
                      label="Linear Asset Name"
                      variant="outlined"
                      fullWidth={false}
                      margin="dense"
                      value={values.linearAssetName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.linearAssetName && Boolean(errors.linearAssetName)}
                      helperText={touched.linearAssetName && errors.linearAssetName}
                      color="warning"
                      size="small"
                      style={{ width: "45ch" }}
                      InputProps={{ style: { height: "40px", fontSize: "15px" } }}
                    />
  
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
                      style={{ width: "45ch" }}
                      InputProps={{ style: { height: "40px", fontSize: "15px" } }}
                    />
  
                    </FormControl>

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
  
  export default Linear_Asset;
  