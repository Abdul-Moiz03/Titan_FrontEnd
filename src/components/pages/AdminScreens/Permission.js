import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Switch } from "@mui/material";
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
import * as Yup from "yup";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { AddButton } from "../../../assets/buttons/AddButton";
import Table from "../AdminScreens/Table";
import DeleteIcon from "@mui/icons-material/Delete";

const initialValues = {
  Permission: "",
  active: false,
};

const validationSchema = Yup.object().shape({
  Permission: Yup.string().required("Permission is required"),
});


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


const Permission = () => {
  const [rows, setrows] = useState([]);
  console.log(JSON.stringify(rows));
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "Permission",
      headerName: "Permissions",
      width: 800,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => <Switchbtn id={params.row.id} />,
    },
  ];

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    // Construct the row data for the DataGrid
    const rowData = {
      id: rows.length + 1,
      Permission: values.Permission,
     
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

 


  return (
    <>
      <Box sx={{ px: 2, height: 600, width: "auto" }}>

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
                  fontSize={25}
                  marginBottom={0}
                  style={{ fontWeight: 600 }}
                >
                  Permission
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    height: "5%",
                  }}
                >
                    
                    <TextField
                      name="Permission"
                      label="Permission"
                      variant="outlined"
                      fullWidth={false}
                      margin="dense"
                      value={values.Permission}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.Permission && Boolean(errors.Permission)}
                      helperText={touched.Permission && errors.Permission}
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
                    </Box>
    



          <Table rows={rows} columns={columns}  height={500} />
        
        {/* <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 8,
              },
            },
          }}
          pageSizeOptions={[8]}
          checkboxSelection
          disableRowSelectionOnClick
        /> */}

        </Form>
        )}
        </Formik>
      </Box>
    </>
  );
}

export default Permission;
