import React, { useState } from "react";
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
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  height: "80%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

const initialValues = {
  catName: "",
  status: false,
  groupAutoID: "",
};
const token = localStorage.getItem("token");

const validationSchema = Yup.object().shape({
  catName: Yup.string().required("Categroy Name is required"),
  groupAutoID: Yup.string().required("Group Name is required"),
});

const Category_Modal = ({ isEdit, rowData, isOpen, onClose }) => {
  const [groupAutoIDData, setgroupAutoIDData] = useState([]);

  const GettingData = async () => {
    try {
      const response = await fetch("http://localhost:8007/api/Groups", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      const arr = [];
      setgroupAutoIDData(arr);

      for (let i = 0; i < data.length; i++) {
        const obj = { ...data[i], id: i + 1 };

        arr.push({ value: obj.groupAutoID, label: obj.groupName });
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  GettingData();

  const onSubmit = async (values, { resetForm }) => {
    const statusValue = values.status ? "Active" : "UnActive";
    const dattaaa = {};
    if (isEdit) {
      //   dattaaa.groupAutoID = rowData.groupAutoID;
      dattaaa.companyId = rowData.companyId;
      dattaaa.catId = rowData.catId;
      dattaaa.catAutoId = rowData.catAutoId;
    }
    console.log("fromeditmoda", rowData);
    const requestData = {
      catName: values.catName,
      status: statusValue,
      groupAutoID: values.groupAutoID,
    };
    console.log(requestData);
    const requestDataa = {
      catName: values.catName,
      status: statusValue,
      groupAutoID: values.groupAutoID,
      ...dattaaa,
    };
    const token = localStorage.getItem("token");
    try {
      if (isEdit) {
        // Perform PUT API call here with updatedData
        // Replace 'your-api-endpoint' with your actual API endpoint
        const response = await fetch(
          `http://localhost:8007/api/Categories/${rowData.catAutoId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(requestDataa),
          }
        );
        const data = await response.status;
        console.log(data);
      }

      if (!isEdit) {
        // Perform POST API call here with updatedData
        // Replace 'your-api-endpoint' with your actual API endpoint
        const response = await fetch("http://localhost:8007/api/Categories", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(requestData),
        });
        const data = await response.status;
        console.log(data);
      }
    } catch (err) {
      console.error("Error:", err);
    }

    console.log(JSON.stringify(requestData));
    resetForm();
    onClose(); // Close the modal after form submission
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Box sx={style}>
        <Typography id="transition-modal-title" variant="h4" component="h4">
          {isEdit ? "Edit Category" : "Create Category"}
        </Typography>
        <Formik
          initialValues={isEdit ? rowData : initialValues}
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
              <TextField
                name="catName"
                label="Category Name"
                variant="outlined"
                fullWidth={false}
                margin="dense"
                value={values.catName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.catName && Boolean(errors.catName)}
                helperText={touched.catName && errors.catName}
                color="warning"
                size="small"
                style={{ width: "22ch" }}
                InputProps={{ style: { height: "40px", fontSize: "15px" } }}
              />
              <br />
              <FormControl
                variant="outlined"
                margin="dense"
                size="small"
                style={{ width: "45ch" }}
                error={touched.groupAutoID && Boolean(errors.groupAutoID)}
              >
                <InputLabel>Group Name</InputLabel>
                <Field
                  name="groupAutoID"
                  label="Group Name"
                  as={Select}
                  labelId="groupAutoID-label"
                  id="groupAutoID"
                  value={values.groupAutoID}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.groupAutoID && Boolean(errors.groupAutoID)}
                  color="warning"
                  InputProps={{
                    style: { height: "40px", fontSize: "15px" },
                  }}
                >
                  {groupAutoIDData.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
                {touched.groupAutoID && errors.groupAutoID && (
                  <div className="error">{errors.groupAutoID}</div>
                )}
              </FormControl>
              <br />
              <FormControlLabel
                control={
                  <Checkbox
                    name="status"
                    checked={values.status}
                    onChange={handleChange}
                  />
                }
                label="Active"
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "center",
                }}
              >
                <Button
                  onClick={onClose}
                  fullWidth={false}
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{
                    mt: 2,
                    mb: 0,
                    mr: 2,
                    backgroundColor: "#FBB515",
                    color: "black",
                    "&:hover": {
                      backgroundColor: "#FABE4B",
                    },
                  }}
                >
                  CANCEL
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  fullWidth={false}
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
                  {isEdit ? "SAVE" : "CREATE"}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default Category_Modal;
