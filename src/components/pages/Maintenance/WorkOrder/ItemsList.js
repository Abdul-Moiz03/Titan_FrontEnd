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
  itemName: "",
  reqQuantity:"",
  active: false,
};
const validationSchema = Yup.object().shape({
  itemName: Yup.string().required("Asset Model is required"),
  reqQuantity: Yup.string().required("Description is required"),
});


const itemNameData = [
  { value: "optionA", label: "Option A" },
  { value: "optionB", label: "Option B" },
  { value: "optionC", label: "Option C" },
];


const ItemsList = () => {

  const [open, setOpen] = useState(false);
  const [rows, setrows] = useState([]);

  console.log(JSON.stringify(rows));
  const columns = [
    { field: "id", headerName: "No", width: 70 },
    { field: "itemName", headerName: "Name", width: 200 },
    { field: "stock", headerName: "Stock", width: 100 },
    { field: "reqQuantity", headerName: "Required Quantity", width: 180 },
    { field: "status", headerName: "Status", width: 180 },
    { field: "cost", headerName: "Cost", width: 100 },
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
      itemName: values.itemName,
      null: values.null,
      reqQuantity: values.reqQuantity,
      null: values.null,
      null: values.null,

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
   
          <Box sx={{ px: 3, width: "auto" }}>
            <Typography id="transition-modal-title" variant="h5" component="h5">
              Items List
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
                    error={touched.itemName && Boolean(errors.itemName)}
                  >
                    <InputLabel>User Name</InputLabel>
                    <Field
                      name="itemName"
                      label="User Name"
                      as={Select}
                      labelId="itemName-label"
                      id="itemName"
                      value={values.itemName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.itemName && Boolean(errors.itemName)}
                      color="warning"
                      style={{backgroundColor: "white" }}
                    >
                      {itemNameData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Field>
                    {touched.itemName && errors.itemName && (
                      <div className="error">{errors.itemName}</div>
                    )}
                  </FormControl>

                  <br />

                  <FormControl
                    variant="outlined"
                    margin="dense"
                    size="small"
                    style={{ width: "45ch" }}
                    error={touched.reqQuantity && Boolean(errors.reqQuantity)}
                  >
                  
                  <TextField
                    name="reqQuantity"
                    label="Required Quantity"
                    variant="outlined"
                    fullWidth={false}
                    margin="dense"
                    value={values.reqQuantity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.reqQuantity && Boolean(errors.reqQuantity)}
                    helperText={touched.reqQuantity && errors.reqQuantity}
                    color="warning"
                    size="small"
                    style={{ width: "45ch", backgroundColor: "white" }}
                    InputProps={{ style: {  fontSize: "15px"} }}
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

export default ItemsList;
