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
    assetModel: "",
    assetName: "",
    code:"",
    brand:"",
    department:"",
    subDept:"",
    location:"",
    description:"",
    active: false,
  };
  const validationSchema = Yup.object().shape({
    assetModel: Yup.string().required("Asset Model is required"),
    assetName: Yup.string().required("Asset Name is required"),
    code: Yup.string().required("Code is required"),
    brand: Yup.string().required("Brand is required"),
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

  
  const Equipment = () => {
    const [open, setOpen] = useState(false);
    const [rows, setrows] = useState([]);
    console.log(JSON.stringify(rows));
    const columns = [
      { field: "id", headerName: "No", width: 70 },
      { field: "assetModel", headerName: "Asset Model", width: 200 },
      { field: "assetName", headerName: "Asset Name", width: 150 },
      { field: "brand", headerName: "Brand", width: 150 },
      { field: "department", headerName: "Department", width: 150 },
      { field: "subDept", headerName: "Sub Department", width: 150 },
      { field: "description", headerName: "Type", width: 100 },
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
        assetModel: values.assetModel,
        assetName: values.assetName,
        brand:values.brand,
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
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h5" component="h5">
                Equipment Asset
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
                      <InputLabel>Select Asset Model</InputLabel>
                      <Field
                        name="assetModel"
                        label="Select Asset Model"
                        as={Select}
                        labelId="assetModel-label"
                        id="assetModel"
                        value={values.assetModel}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.assetModel && Boolean(errors.assetModel)}
                        color="warning"
                      >
                        {assetModelData.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Field>
                      {touched.assetModel && errors.assetModel && (
                        <div className="error">{errors.assetModel}</div>
                      )}
                    </FormControl>
  
                    <br />

                    <Box sx={{ display: 'flex', marginBottom: 0 }}>
  
                    <FormControl
                      variant="outlined"
                      margin="dense"
                      size="small"
                      style={{ width: "29ch" }}
                      error={touched.assetName && Boolean(errors.assetName)}
                    >
                    
                    <TextField
                      name="assetName"
                      label="Select Asset"
                      variant="outlined"
                      fullWidth={false}
                      margin="dense"
                      value={values.assetName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.assetName && Boolean(errors.assetName)}
                      helperText={touched.assetName && errors.assetName}
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
                      style={{ width: "15ch"}}
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
                      style={{ width: "15ch"}}
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
                      error={touched.brand && Boolean(errors.brand)}
                    >
                      <InputLabel>Brand</InputLabel>
                      <Field
                        name="brand"
                        label="Brand"
                        as={Select}
                        labelId="brand-label"
                        id="brand"
                        value={values.brand}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.brand && Boolean(errors.brand)}
                        color="warning"
                      >
                        {brandData.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Field>
                      {touched.brand && errors.brand && (
                        <div className="error">{errors.brand}</div>
                      )}
                    </FormControl>
  
                    <br />

                    <FormControl
                      variant="outlined"
                      margin="dense"
                      size="small"
                      style={{ width: "45ch" }}
                      error={touched.department && Boolean(errors.department)}
                    >
                      <InputLabel>department</InputLabel>
                      <Field
                        name="department"
                        label="department"
                        as={Select}
                        labelId="department-label"
                        id="department"
                        value={values.department}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.department && Boolean(errors.department)}
                        color="warning"
                      >
                        {departmentData.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Field>
                      {touched.department && errors.department && (
                        <div className="error">{errors.department}</div>
                      )}
                    </FormControl>

                    <br />

                    <FormControl
                      variant="outlined"
                      margin="dense"
                      size="small"
                      style={{ width: "45ch" }}
                      error={touched.subDept && Boolean(errors.subDept)}
                    >
                      <InputLabel>Sub Department</InputLabel>
                      <Field
                        name="subDept"
                        label="Sub Department"
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

                    <FormControl
                      variant="outlined"
                      margin="dense"
                      size="small"
                      style={{ width: "45ch" }}
                      error={touched.location && Boolean(errors.location)}
                    >
                      <InputLabel>Location</InputLabel>
                      <Field
                        name="location"
                        label="location Name"
                        as={Select}
                        labelId="location-label"
                        id="location"
                        value={values.location}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.location && Boolean(errors.location)}
                        color="warning"
                      >
                        {locationData.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Field>
                      {touched.location && errors.location && (
                        <div className="error">{errors.location}</div>
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
  
  export default Equipment;
  