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
    equipment: "",
    subItem: "",
    subItemPosition: "",
    dupEquipment: "",
    description:"",
    active: false,
  };
  const validationSchema = Yup.object().shape({
    equipment: Yup.string().required("Linear Asset Name is required"),
    subItem: Yup.string().required("Sub Item Name is required"),
    subItemPosition: Yup.string().required("subItemPosition is required"),
    description: Yup.string().required("Description is required"),
    dupEquipment: Yup.string().required("Duplicate Equipment is required"),
  });
  
  
  const equipmentData = [
    { value: "optionA", label: "Option A" },
    { value: "optionB", label: "Option B" },
    { value: "optionC", label: "Option C" },
  ];
  
  const subItemData = [
    { value: "optionA", label: "Option A" },
    { value: "optionB", label: "Option B" },
    { value: "optionC", label: "Option C" },
  ];


  const subItemPositionData = [
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
      { field: "subItem", headerName: "Name", width: 350 },
      { field: "subItemPosition", headerName: "Sub Item Position", width: 250 },
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
        subItem: values.subItem,
        subItemPosition: values.subItemPosition,
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
                Equipment Model
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
                      style={{ width: "30ch" }}
                      error={touched.equipment && Boolean(errors.equipment)}
                    >
                      <InputLabel>Equipment Name</InputLabel>
                      <Field
                        name="equipment"
                        label="Equipment Name"
                        as={Select}
                        labelId="equipment-label"
                        id="equipment"
                        value={values.equipment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.equipment && Boolean(errors.equipment)}
                        color="warning"
                      >
                        {equipmentData.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Field>
                      {touched.equipment && errors.equipment && (
                        <div className="error">{errors.equipment}</div>
                      )}
                    </FormControl>
  
                    <br />

                    <FormControl
                      variant="outlined"
                      margin="dense"
                      size="small"
                      style={{ width: "30ch" }}
                      error={touched.equipment && Boolean(errors.equipment)}
                    >
                      <InputLabel>Duplicate Equipment</InputLabel>
                      <Field
                        name="dupEquipment"
                        label="Duplicate Equipment"
                        as={Select}
                        labelId="dupEquipment-label"
                        id="dupEquipment"
                        value={values.dupEquipment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.dupEquipment && Boolean(errors.dupEquipment)}
                        color="warning"
                      >
                        {equipmentData.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Field>
                      {touched.dupEquipment && errors.dupEquipment && (
                        <div className="error">{errors.dupEquipment}</div>
                      )}
                    </FormControl>
  
                    <br />

                    <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>

                    <FormControl
                      variant="outlined"
                      margin="dense"
                      size="small"
                      style={{ width: "30ch" }}
                      error={touched.subItem && Boolean(errors.subItem)}
                    >
                      <InputLabel>Sub Item Name</InputLabel>
                      <Field
                        name="subItem"
                        label="subItem Name"
                        as={Select}
                        labelId="subItem-label"
                        id="subItem"
                        value={values.subItem}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.subItem && Boolean(errors.subItem)}
                        color="warning"
                      >
                        {subItemData.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Field>
                      {touched.subItem && errors.subItem && (
                        <div className="error">{errors.subItem}</div>
                      )}
                    </FormControl>

                    &nbsp;

                    <FormControl
                      variant="outlined"
                      margin="dense"
                      size="small"
                      style={{ width: "30ch" }}
                      error={touched.subItemPosition && Boolean(errors.subItemPosition)}
                    >
                      <InputLabel>Sub Item Position</InputLabel>
                      <Field
                        name="subItemPosition"
                        label="subItemPosition Name"
                        as={Select}
                        labelId="subItemPosition-label"
                        id="subItemPosition"
                        value={values.subItemPosition}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.subItemPosition && Boolean(errors.subItemPosition)}
                        color="warning"
                      >
                        {subItemPositionData.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Field>
                      {touched.subItemPosition && errors.subItemPosition && (
                        <div className="error">{errors.equipment}</div>
                      )}
                    </FormControl>

  
                    &nbsp;

                    <FormControl
                      variant="outlined"
                      margin="dense"
                      size="small"
                      style={{ width: "30ch" }}
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
                      style={{ width: "30ch" }}
                      InputProps={{ style: { height: "40px", fontSize: "15px" } }}
                    />
  
                    </FormControl>

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
  
  export default Equipment;
  