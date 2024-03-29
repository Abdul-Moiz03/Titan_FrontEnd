// import {
//   Modal,
//   Button,
//   TextField,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   Box,
//   FormControlLabel,
//   Checkbox,
//   Typography,
//   IconButton,
// } from "@mui/material";
// import { Formik, Form, Field } from "formik";
// import { useState } from "react";
// import * as Yup from "yup";
// import Backdrop from "@mui/material/Backdrop";
// import Fade from "@mui/material/Fade";
// import { AddButton } from "../../../assets/buttons/AddButton";
// import Table from "../AdminScreens/Table";
// import DeleteIcon from "@mui/icons-material/Delete";

// // const style = {
// //   position: "relative",
// //   top: "50%",
// //   left: "50%",
// //   height: "80%",
// //   transform: "translate(-50%, -50%)",
// //   width: 1200,
// //   bgcolor: "background.paper",
// //   border: "2px solid #000",
// //   boxShadow: 24,
// //   p: 4,
// //   overflow: "scroll",
// // };

// const initialValues = {
//   SelectAssetModel: "",
//   SelectAsset: "",
//   Frequency: "",
//   cost: "",
//   Headofproblem: "",
//   Description: "",
//   active: false,
// };
// const validationSchema = Yup.object().shape({
//   SelectAssetModel: Yup.string().required("Asset Model is required"),
//   SelectAsset: Yup.string().required("Asset is required"),
//   Frequency: Yup.string().required("Frequency is required"),
//   cost: Yup.number().required("Cost is required"),
//   Headofproblem: Yup.string().required("Head of problem is required"),
//   Description: Yup.string().required("Description is required"),
// });

// const SelectAssetModelData = [
//   { value: "SelectAssetModel", label: "Group Name" },
//   { value: "SelectAsset", label: "Option 2" },
//   { value: "option3", label: "Option 3" },
// ];

// const SelectAssetData = [
//   { value: "optionA", label: "Option A" },
//   { value: "optionB", label: "Option B" },
//   { value: "optionC", label: "Option C" },
// ];
// const HeadofproblemData = [
//   { value: "SelectAssetModel", label: "Group Name" },
//   { value: "SelectAsset", label: "Option 2" },
//   { value: "option3", label: "Option 3" },
// ];
// const Schedule_Work_Order = () => {
//   const [open, setOpen] = useState(false);
//   const [rows, setrows] = useState([]);
//   console.log(JSON.stringify(rows));
//   const columns = [
//     { field: "id", headerName: "No", width: 70 },
//     { field: "Headofproblem", headerName: "Head of problem", width: 200 },
//     { field: "SelectAsset", headerName: "Category Name", width: 200 },
//     { field: "Frequency", headerName: "Frequency", width: 200 },

//     {
//       field: "delete",
//       headerName: "Actions",
//       width: 100,
//       renderCell: (params) => (
//         <IconButton onClick={() => handleDelete(params.row.id)}>
//           <DeleteIcon />
//         </IconButton>
//       ),
//     },
//   ];
//   const onSubmit = (values, { setSubmitting, resetForm }) => {
//     // Construct the row data for the DataGrid
//     const rowData = {
//       id: rows.length + 1,
//       Headofproblem: values.Headofproblem,
//       SelectAsset: values.SelectAsset,
//       Frequency: values.Frequency,
//     };
//     // Update the formData state with the new row data
//     setrows((prevFormData) => [...prevFormData, rowData]);
//     console.log(values);
//     // Reset the form
//     resetForm();
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleDelete = (id) => {
//     setrows((prevFormData) => prevFormData.filter((row) => row.id !== id));
//   };
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleAPI = () => {
//     /**api call here */
//     setOpen(true);
//   };
//   return (
//     <>
//       <AddButton onClickHandle={handleOpen} caption="Equipment" />

//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         slots={{ backdrop: Backdrop }}
//         slotProps={{
//           backdrop: {
//             timeout: 500,
//           },
//         }}
//       >
//         <Fade in={open}>
//           <Box
//             sx={{
//               position: "relative",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               width: "90%",
//               maxWidth: 1200,
//               maxHeight: "90%",
//               bgcolor: "background.paper",
//               border: "2px solid #000",
//               boxShadow: 24,
//               p: 4,
//               overflow: "scroll",
//             }}
//           >
//             <Typography id="transition-modal-title" variant="h4" component="h4">
//               Schedule Work Request
//             </Typography>
//             <Formik
//               initialValues={initialValues}
//               validationSchema={validationSchema}
//               onSubmit={onSubmit}
//             >
//               {({
//                 values,
//                 errors,
//                 touched,
//                 handleChange,
//                 handleBlur,
//                 handleSubmit,
//                 isSubmitting,
//               }) => (
//                 <Form onSubmit={handleSubmit}>
//                   <FormControl
//                     variant="outlined"
//                     margin="dense"
//                     size="small"
//                     style={{ width: "45ch" }}
//                     error={
//                       touched.SelectAssetModel &&
//                       Boolean(errors.SelectAssetModel)
//                     }
//                   >
//                     <InputLabel>Select Asset Model</InputLabel>
//                     <Field
//                       name="SelectAssetModel"
//                       label="Select Asset Model"
//                       as={Select}
//                       labelId="SelectAssetModel-label"
//                       id="SelectAssetModel"
//                       value={values.SelectAssetModel}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       error={
//                         touched.SelectAssetModel &&
//                         Boolean(errors.SelectAssetModel)
//                       }
//                       color="warning"
//                       InputProps={{
//                         style: { height: "40px", fontSize: "15px" },
//                       }}
//                     >
//                       {SelectAssetModelData.map((option) => (
//                         <MenuItem key={option.value} value={option.value}>
//                           {option.label}
//                         </MenuItem>
//                       ))}
//                     </Field>
//                     {touched.SelectAssetModel && errors.SelectAssetModel && (
//                       <div className="error">{errors.SelectAssetModel}</div>
//                     )}
//                   </FormControl>
//                   <br />
//                   <FormControl
//                     variant="outlined"
//                     margin="dense"
//                     size="small"
//                     style={{ width: "45ch" }}
//                     error={touched.SelectAsset && Boolean(errors.SelectAsset)}
//                   >
//                     <InputLabel>Select Asset</InputLabel>
//                     <Field
//                       name="SelectAsset"
//                       label="Select Asset"
//                       as={Select}
//                       labelId="SelectAsset-label"
//                       id="SelectAsset"
//                       value={values.SelectAsset}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       error={touched.SelectAsset && Boolean(errors.SelectAsset)}
//                       color="warning"
//                     >
//                       {SelectAssetData.map((option) => (
//                         <MenuItem key={option.value} value={option.value}>
//                           {option.label}
//                         </MenuItem>
//                       ))}
//                     </Field>
//                     {touched.SelectAsset && errors.SelectAsset && (
//                       <div className="error">{errors.SelectAsset}</div>
//                     )}
//                   </FormControl>
//                   <br />
//                   <TextField
//                     name="Frequency"
//                     label="Frequency (no of days)"
//                     variant="outlined"
//                     fullWidth={false}
//                     margin="dense"
//                     value={values.Frequency}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={touched.Frequency && Boolean(errors.Frequency)}
//                     helperText={touched.Frequency && errors.Frequency}
//                     color="warning"
//                     size="small"
//                     style={{ width: "22ch" }}
//                     InputProps={{ style: { height: "40px", fontSize: "15px" } }}
//                   />
//                   <TextField
//                     name="cost"
//                     label="Cost"
//                     variant="outlined"
//                     fullWidth={false}
//                     margin="dense"
//                     value={values.cost}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={touched.cost && Boolean(errors.cost)}
//                     helperText={touched.cost && errors.cost}
//                     color="warning"
//                     size="small"
//                     style={{ width: "22ch", marginLeft: "10px" }}
//                     InputProps={{ style: { height: "40px", fontSize: "15px" } }}
//                   />
//                   <br />

//                   <FormControl
//                     variant="outlined"
//                     margin="dense"
//                     size="small"
//                     style={{ width: "45ch" }}
//                     error={touched.SelectAsset && Boolean(errors.SelectAsset)}
//                   >
//                     <InputLabel>Head of problem</InputLabel>
//                     <Field
//                       name="Headofproblem"
//                       label="Head of problem"
//                       as={Select}
//                       labelId="Headofproblem-label"
//                       id="Headofproblem"
//                       value={values.Headofproblem}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       error={
//                         touched.Headofproblem && Boolean(errors.Headofproblem)
//                       }
//                       color="warning"
//                     >
//                       {HeadofproblemData.map((option) => (
//                         <MenuItem key={option.value} value={option.value}>
//                           {option.label}
//                         </MenuItem>
//                       ))}
//                     </Field>
//                     {touched.Headofproblem && errors.Headofproblem && (
//                       <div className="error">{errors.Headofproblem}</div>
//                     )}
//                   </FormControl>
//                   <br />
//                   <TextField
//                     name="Description"
//                     label="Description"
//                     variant="outlined"
//                     fullWidth={false}
//                     margin="dense"
//                     value={values.Description}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={touched.Description && Boolean(errors.Description)}
//                     helperText={touched.Description && errors.Description}
//                     color="warning"
//                     size="small"
//                     style={{ width: "45ch" }}
//                     InputProps={{ style: { height: "40px", fontSize: "15px" } }}
//                   />
//                   <br />

//                   <Button
//                     type="submit"
//                     disabled={isSubmitting}
//                     fullWidth={false}
//                     variant="contained"
//                     sx={{
//                       mt: 2,
//                       mb: 2,
//                       backgroundColor: "#FBB515",
//                       color: "black",
//                       "&:hover": {
//                         backgroundColor: "#FABE4B",
//                       },
//                     }}
//                   >
//                     &nbsp; &nbsp; Add &nbsp; &nbsp;
//                   </Button>
//                   <Table rows={rows} columns={columns} />
//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: "right",
//                       alignItems: "center",
//                     }}
//                   >
//                     <Button
//                       onClick={handleClose}
//                       fullWidth={false}
//                       variant="contained"
//                       disabled={isSubmitting}
//                       sx={{
//                         mt: 2,
//                         mb: 0,
//                         backgroundColor: "#FBB515",
//                         color: "black",
//                         "&:hover": {
//                           backgroundColor: "#FABE4B",
//                         },
//                       }}
//                     >
//                       &nbsp; CANCEL &nbsp;
//                     </Button>
//                     &nbsp; &nbsp;
//                     {/* <Link to="/Roles" style={{ textDecoration: "none" }}> */}
//                     <Button
//                       type="submit"
//                       disabled={isSubmitting}
//                       fullWidth={false}
//                       onClick={handleAPI}
//                       variant="contained"
//                       sx={{
//                         mt: 2,
//                         mb: 0,
//                         backgroundColor: "#FBB515",
//                         color: "black",
//                         "&:hover": {
//                           backgroundColor: "#FABE4B",
//                         },
//                       }}
//                     >
//                       &nbsp; &nbsp; SAVE &nbsp; &nbsp;
//                     </Button>
//                     {/* </Link> */}
//                   </Box>
//                   {/* <Button variant="contained" color="primary">
//                       Submit
//                     </Button> */}
//                 </Form>
//               )}
//             </Formik>
//           </Box>
//         </Fade>
//       </Modal>
//     </>
//   );
// };

// export default Schedule_Work_Order;
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
  assetModelId: "",
  assetId: "",
  headOfProblem: "",
  description: "",
  leadtimedays: "",
};

const validationSchema = Yup.object().shape({
  assetModelId: Yup.string().required("Categroy Name is required"),
  assetId: Yup.string().required("Group Name is required"),
  headOfProblem: Yup.string().required("Category Name is required"),
  description: Yup.string().required("description is required"),
  leadtimedays: Yup.number().required("Lead Time Days is required"),
});

const Schedule_Work_Order = ({ isEdit, rowData, isOpen, onClose }) => {
  const [date, setDate] = useState(new Date());
  function convertToISO8601Extended(dateString) {
    const date = new Date(dateString);
    const isoDate = date.toISOString();
    return isoDate;
  }
  const iso8601ExtendedDate = convertToISO8601Extended(date);

  const onSubmit = async (values, { resetForm }) => {
    console.log(values);
    const requestData = {
      assetModelId: values.assetModelId,
      assetId: values.assetId,
      headOfProblem: values.headOfProblem,
      description: values.description,
      frequencyDays: values.leadtimedays,
      initialDateTime: iso8601ExtendedDate,
    };
    console.log(requestData);

    const token = localStorage.getItem("token");
    try {
      if (!isEdit) {
        // Perform POST API call here with updatedData
        // Replace 'your-api-endpoint' with your actual API endpoint
        const response = await fetch(
          "http://localhost:8007/api/ScheduledWorkRequests",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(requestData),
          }
        );
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
          {isEdit ? "Edit Schedule Work Order" : "Create Schedule Work Order"}
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
                name="assetModelId"
                label="assetModelId"
                variant="outlined"
                fullWidth={false}
                margin="dense"
                value={values.assetModelId}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.assetModelId && Boolean(errors.assetModelId)}
                helperText={touched.assetModelId && errors.assetModelId}
                color="warning"
                size="small"
                style={{ width: "22ch" }}
                InputProps={{ style: { height: "40px", fontSize: "15px" } }}
              />

              <TextField
                name="assetId"
                label="Asset ID"
                variant="outlined"
                fullWidth={false}
                margin="dense"
                value={values.assetId}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.assetId && Boolean(errors.assetId)}
                helperText={touched.assetId && errors.assetId}
                color="warning"
                size="small"
                style={{ width: "22ch", marginLeft: "10px" }}
                InputProps={{ style: { height: "40px", fontSize: "15px" } }}
              />

              <TextField
                name="headOfProblem"
                label="Head of Problem"
                variant="outlined"
                fullWidth={false}
                margin="dense"
                value={values.headOfProblem}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.headOfProblem && Boolean(errors.headOfProblem)}
                helperText={touched.headOfProblem && errors.headOfProblem}
                color="warning"
                size="small"
                style={{ width: "22ch" }}
                InputProps={{ style: { height: "40px", fontSize: "15px" } }}
              />

              <TextField
                name="description"
                label="description"
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
                style={{ width: "22ch", marginLeft: "10px" }}
                InputProps={{ style: { height: "40px", fontSize: "15px" } }}
              />

              <TextField
                name="leadtimedays"
                label="Lead Time (Days)"
                variant="outlined"
                fullWidth={false}
                margin="dense"
                value={values.leadtimedays}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.leadtimedays && Boolean(errors.leadtimedays)}
                helperText={touched.leadtimedays && errors.leadtimedays}
                color="warning"
                size="small"
                style={{ width: "22ch" }}
                InputProps={{ style: { height: "40px", fontSize: "15px" } }}
              />
              <div style={{ margin: "10px" }}>
                <DatePicker
                  showTimeSelect
                  minTime={new Date(0, 0, 0, 2, 0)}
                  maxTime={new Date(0, 0, 0, 24, 0)}
                  selected={date}
                  onChange={(date) => setDate(date)}
                  wrapperClassName="datePicker"
                />
              </div>
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

export default Schedule_Work_Order;
