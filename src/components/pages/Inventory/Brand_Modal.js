import React from "react";
import {
  Modal,
  Button,
  TextField,
  Box,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { Formik, Form } from "formik";
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
  brandName: "",
  status: false,
};

const validationSchema = Yup.object().shape({
  brandName: Yup.string().required("Group Name is required"),
});

const Brand_Modal = ({ isEdit, rowData, isOpen, onClose }) => {
  const onSubmit = async (values, { resetForm }) => {
    const statusValue = values.status ? "Active" : "UnActive";
    const dattaaa = {};
    if (isEdit) {
      dattaaa.brandAutoId = rowData.brandAutoId;
      dattaaa.companyId = rowData.companyId;
      dattaaa.brandId = rowData.brandId;
    }
    const requestData = {
      brandName: values.brandName,
      status: statusValue,
    };
    const requestDataa = {
      brandName: values.brandName,
      status: statusValue,
      ...dattaaa,
    };
    const token = localStorage.getItem("token");
    try {
      if (isEdit) {
        // Perform PUT API call here with updatedData
        // Replace 'your-api-endpoint' with your actual API endpoint
        const response = await fetch(
          `http://localhost:8007/api/Brands/${rowData.brandAutoId}`,
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
        const response = await fetch("http://localhost:8007/api/Brands", {
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
          {isEdit ? "Edit Brand" : "Create Brand"}
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
                name="brandName"
                label="Group Name"
                variant="outlined"
                fullWidth={false}
                margin="dense"
                value={values.brandName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.brandName && Boolean(errors.brandName)}
                helperText={touched.brandName && errors.brandName}
                color="warning"
                size="small"
                style={{ width: "22ch" }}
                InputProps={{ style: { height: "40px", fontSize: "15px" } }}
              />
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

export default Brand_Modal;
