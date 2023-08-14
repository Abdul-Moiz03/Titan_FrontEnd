import React from "react";
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
const initialValues = {
  timeZone: "",
  description: "",
  calSummary: "",
};
const token = localStorage.getItem("token");

const validationSchema = Yup.object().shape({
  timeZone: Yup.string().required("Asset Model is required"),
  calSummary: Yup.string().required("Calendar Summary is required"),
  description: Yup.string().required("Description is required"),
});

const timeZoneData = [
  {
    value: "(GMT+05:00) Pakistan Standard Time - Asia/Karachi",
    label: "(GMT+05:00) Pakistan Standard Time - Asia/Karachi",
  },
];
function parseTimeZone(input) {
  const regex = /\((GMT[+-]\d{2}:\d{2})\)\s*(.*?)\s*-\s*(.*)/;
  const match = input.match(regex);

  if (match) {
    const timeZoneGMT = match[1];
    const timeZoneWord = match[2];
    const timeZoneRegional = match[3];

    const result = {
      timeZoneGMT: timeZoneGMT,
      timeZoneWord: timeZoneWord,
      timeZoneRegional: timeZoneRegional,
    };

    return result;
  } else {
    return null; // Input format doesn't match
  }
}

const Report = () => {
  const [iframee, setiframee] = useState("");
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    const parsetime = parseTimeZone(values.timeZone);
    const RequestData = {
      calendarSummary: values.calSummary,
      calendarDescription: values.description,
      ...parsetime,
    };
    console.log(RequestData);
    try {
      const response = await fetch(
        "http://localhost:8007/api/ScheduledWorkRequests/PostGoogleCalendarApi",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(RequestData),
        }
      );
      const data = await response.status;
      console.log("responce form calender ", data);
    } catch (err) {
      console.error("Error:", err);
    }
  };
  const handleAPI = async () => {
    try {
      const res = await fetch(
        `http://localhost:8007/api/ScheduledWorkRequests/GetCalendarRecords`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const resdata = await res.json();
      console.log("responce form calender ", resdata.iFrame);
      setiframee(resdata.iFrame);
    } catch (error) {
      console.log("Error", error);
      return null;
    }
  };
  return (
    <>
      <Box sx={{ px: 3, width: "auto" }}>
        <Typography id="transition-modal-title" variant="h5" component="h5">
          Calendar Report
        </Typography>

        <br />

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

              <br />

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
                  style={{ backgroundColor: "white" }}
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
                  InputProps={{ style: { fontSize: "15px" } }}
                />
              </FormControl>

              <br />
              <br />

              <div dangerouslySetInnerHTML={{ __html: iframee }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "center",
                }}
              >
                <Button
                  fullWidth={false}
                  variant="contained"
                  disabled={isSubmitting}
                  onClick={handleAPI}
                  sx={{
                    mt: 2,
                    mb: 0,
                    mx: 2,
                    backgroundColor: "#FBB515",
                    color: "black",
                    "&:hover": {
                      backgroundColor: "#FABE4B",
                    },
                  }}
                >
                  &nbsp; Get Calendar &nbsp;
                </Button>
                <Button
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

              <br />
            </Form>
          )}
        </Formik>
      </Box>
      {/* </Fade>
</Modal> */}
    </>
  );
};

export default Report;
