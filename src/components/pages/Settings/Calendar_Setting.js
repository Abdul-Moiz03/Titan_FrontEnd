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

  import DeleteIcon from "@mui/icons-material/Delete";

  
  
  const initialValues = {
    timeZone: "",
    headOfProblem:"",
    description:"",
    active: false,
  };
  const validationSchema = Yup.object().shape({
    timeZone: Yup.string().required("Asset Model is required"),
    calSummary: Yup.string().required("Calendar Summary is required"),
    description: Yup.string().required("Description is required"),
  });
  
  
  const timeZoneData = [
    { value: "optionA", label: "Option A" },
    { value: "optionB", label: "Option B" },
    { value: "optionC", label: "Option C" },
  ];
    
  const Calendar_Setting = () => {
   
    const onSubmit = (values, { setSubmitting, resetForm }) => {

      // resetForm();
    };
  
  
    const handleAPI = () => {
      /**api call here */
    };
  
    // const handleFormSubmit = () => {
    //   console.log("ok");
    // };
    
    return (
      <>
     
            <Box sx={{ px: 3, width: "auto"  }}>
              <Typography id="transition-modal-title" variant="h5" component="h5">
                Calendar Settings
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
  
                    <TextField
                      name="calSummary"
                      label="Calendar Summary"
                      variant="outlined"
                      fullWidth={false}
                      margin="dense"
                      value={values.calSummary}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.calSummary && Boolean(errors.calSummary)}
                      helperText={touched.calSummary && errors.calSummary}
                      color="warning"
                      size="small"
                      style={{ width: "45ch", backgroundColor: "white" }}
                      InputProps={{ style: { height: "40px", fontSize: "15px" } }}
                    />

                    <br/>
  
                    <FormControl
                      variant="outlined"
                      margin="dense"
                      size="small"
                      style={{ width: "45ch" }}
                      error={touched.timeZone && Boolean(errors.timeZone)}
                    >
                      <InputLabel>Time Zone</InputLabel>
                      <Field
                        name="timeZone"
                        label="Time Zone"
                        as={Select}
                        labelId="timeZone-label"
                        id="timeZone"
                        value={values.timeZone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.timeZone && Boolean(errors.timeZone)}
                        color="warning"
                        style={{backgroundColor: "white" }}
                      >
                        {timeZoneData.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Field>
                      {touched.timeZone && errors.timeZone && (
                        <div className="error">{errors.timeZone}</div>
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
                      label="Calendar Description"
                      multiline={true}
                      rows={3}
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
                      style={{ width: "45ch", backgroundColor: "white" }}
                      InputProps={{ style: {  fontSize: "15px"} }}
                    />
  
                    </FormControl>
  
                    <br />
                    <br />

                    <iframe src="https://calendar.google.com/calendar/embed?src=ur.pakistani%23holiday%40" 
                    title="External Content" width="70%" height="500px" frameBorder="0" />
       
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

                  </Form>
                )}
              </Formik>
            </Box>
          {/* </Fade>
        </Modal> */}
      </>
    );
  };
  
  export default Calendar_Setting;
  