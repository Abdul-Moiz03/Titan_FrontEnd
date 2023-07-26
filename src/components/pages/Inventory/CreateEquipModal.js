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

// const style = {
//   position: "relative",
//   top: "50%",
//   left: "50%",
//   height: "80%",
//   transform: "translate(-50%, -50%)",
//   width: 1200,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
//   overflow: "scroll",
// };

// const initialValues = {
//   GroupName: "",
//   CategoryName: "",
//   item: "",
//   cost: "",
//   leadtimedays: "",
//   minirequiredqty: "",
//   itemdescription: "",
//   active: false,
// };
// const validationSchema = Yup.object().shape({
//   GroupName: Yup.string().required("Group Name is required"),
//   CategoryName: Yup.string().required("Category Name is required"),
//   item: Yup.string().required("Text is required"),
//   cost: Yup.number().required("Cost is required"),
//   leadtimedays: Yup.number().required("Lead Time Days is required"),
//   minirequiredqty: Yup.number().required("Mini Required Quantity is required"),
//   itemdescription: Yup.string().required("Item Description is required"),
// });

// const GroupNameData = [
//   { value: "GroupName", label: "Group Name" },
//   { value: "CategoryName", label: "Option 2" },
//   { value: "option3", label: "Option 3" },
// ];

// const CategoryNameData = [
//   { value: "optionA", label: "Option A" },
//   { value: "optionB", label: "Option B" },
//   { value: "optionC", label: "Option C" },
// ];

// const CreateEquipModal = () => {
//   const [open, setOpen] = useState(false);
//   const [rows, setrows] = useState([]);
//   console.log(JSON.stringify(rows));
//   const columns = [
//     { field: "id", headerName: "No", width: 70 },
//     { field: "item", headerName: "Item Name", width: 200 },
//     { field: "CategoryName", headerName: "Category Name", width: 200 },
//     { field: "GroupName", headerName: "Group Name", width: 200 },
//     { field: "cost", headerName: "Cost", width: 70 },
//     { field: "leadtimedays", headerName: "Lead Time Days", width: 140 },
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
//       item: values.item,
//       CategoryName: values.CategoryName,
//       GroupName: values.GroupName,
//       cost: values.cost,
//       leadtimedays: values.leadtimedays,
//       active: values.active,
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
//           <Box sx={style}>
//             <Typography id="transition-modal-title" variant="h4" component="h4">
//               Create Equipment
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
//                     error={touched.GroupName && Boolean(errors.GroupName)}
//                   >
//                     <InputLabel>Group Name</InputLabel>
//                     <Field
//                       name="GroupName"
//                       label="Group Name"
//                       as={Select}
//                       labelId="GroupName-label"
//                       id="GroupName"
//                       value={values.GroupName}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       error={touched.GroupName && Boolean(errors.GroupName)}
//                       color="warning"
//                       InputProps={{
//                         style: { height: "40px", fontSize: "15px" },
//                       }}
//                     >
//                       {GroupNameData.map((option) => (
//                         <MenuItem key={option.value} value={option.value}>
//                           {option.label}
//                         </MenuItem>
//                       ))}
//                     </Field>
//                     {touched.GroupName && errors.GroupName && (
//                       <div className="error">{errors.GroupName}</div>
//                     )}
//                   </FormControl>
//                   <br />
//                   <FormControl
//                     variant="outlined"
//                     margin="dense"
//                     size="small"
//                     style={{ width: "45ch" }}
//                     error={touched.CategoryName && Boolean(errors.CategoryName)}
//                   >
//                     <InputLabel>Category Name</InputLabel>
//                     <Field
//                       name="CategoryName"
//                       label="Category Name"
//                       as={Select}
//                       labelId="CategoryName-label"
//                       id="CategoryName"
//                       value={values.CategoryName}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       error={
//                         touched.CategoryName && Boolean(errors.CategoryName)
//                       }
//                       color="warning"
//                     >
//                       {CategoryNameData.map((option) => (
//                         <MenuItem key={option.value} value={option.value}>
//                           {option.label}
//                         </MenuItem>
//                       ))}
//                     </Field>
//                     {touched.CategoryName && errors.CategoryName && (
//                       <div className="error">{errors.CategoryName}</div>
//                     )}
//                   </FormControl>
//                   <br />
//                   <TextField
//                     name="item"
//                     label="Item Name"
//                     variant="outlined"
//                     fullWidth={false}
//                     margin="dense"
//                     value={values.item}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={touched.item && Boolean(errors.item)}
//                     helperText={touched.item && errors.item}
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
//                   <TextField
//                     name="leadtimedays"
//                     label="Lead Time (Days)"
//                     variant="outlined"
//                     fullWidth={false}
//                     margin="dense"
//                     value={values.leadtimedays}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={touched.leadtimedays && Boolean(errors.leadtimedays)}
//                     helperText={touched.leadtimedays && errors.leadtimedays}
//                     color="warning"
//                     size="small"
//                     style={{ width: "22ch" }}
//                     InputProps={{ style: { height: "40px", fontSize: "15px" } }}
//                   />
//                   <TextField
//                     name="minirequiredqty"
//                     label="Mini Required Quantity"
//                     variant="outlined"
//                     fullWidth={false}
//                     margin="dense"
//                     value={values.minirequiredqty}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={
//                       touched.minirequiredqty && Boolean(errors.minirequiredqty)
//                     }
//                     helperText={
//                       touched.minirequiredqty && errors.minirequiredqty
//                     }
//                     color="warning"
//                     size="small"
//                     style={{ width: "22ch", marginLeft: "10px" }}
//                     InputProps={{ style: { height: "40px", fontSize: "15px" } }}
//                   />
//                   <br />
//                   <TextField
//                     name="itemdescription"
//                     label="Item Description"
//                     variant="outlined"
//                     fullWidth={false}
//                     margin="dense"
//                     value={values.itemdescription}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={
//                       touched.itemdescription && Boolean(errors.itemdescription)
//                     }
//                     helperText={
//                       touched.itemdescription && errors.itemdescription
//                     }
//                     color="warning"
//                     size="small"
//                     style={{ width: "45ch" }}
//                     InputProps={{ style: { height: "40px", fontSize: "15px" } }}
//                   />
//                   <br />
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         name="active"
//                         checked={values.active}
//                         onChange={handleChange}
//                       />
//                     }
//                     label="Active"
//                   />

//                   {/* <Table rows={rows} columns={columns} /> */}
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

//                   </Box>

//                 </Form>
//               )}
//             </Formik>
//           </Box>
//         </Fade>
//       </Modal>
//     </>
//   );
// };

// export default CreateEquipModal;
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
  equipName: "",
  status: false,
  groupAutoID: "",
  catAutoId: "",
  cost: "",
  leadtimedays: "",
  minirequiredqty: "",
};
const token = localStorage.getItem("token");

const validationSchema = Yup.object().shape({
  equipName: Yup.string().required("Categroy Name is required"),
  groupAutoID: Yup.string().required("Group Name is required"),
  catAutoId: Yup.string().required("Category Name is required"),
  cost: Yup.number().required("Cost is required"),
  leadtimedays: Yup.number().required("Lead Time Days is required"),
  minirequiredqty: Yup.number().required("Mini Required Quantity is required"),
});

const CreateEquipModal = ({ isEdit, rowData, isOpen, onClose }) => {
  const [groupAutoIDData, setgroupAutoIDData] = useState([]);
  const [catAutoIdData, setcatAutoIdData] = useState([]);

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
  const GettingcateData = async () => {
    try {
      const response = await fetch("http://localhost:8007/api/Categories", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      const arr = [];
      setcatAutoIdData(arr);

      for (let i = 0; i < data.length; i++) {
        const obj = { ...data[i], id: i + 1 };

        arr.push({ value: obj.catAutoId, label: obj.catName });
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  GettingData();
  GettingcateData();

  const onSubmit = async (values, { resetForm }) => {
    const statusValue = values.status ? "Active" : "UnActive";
    const dattaaa = {};
    if (isEdit) {
      //   dattaaa.groupAutoID = rowData.groupAutoID;
      dattaaa.companyId = rowData.companyId;
      dattaaa.equipId = rowData.equipId;
      dattaaa.equipAutoId = rowData.equipAutoId;
    }
    console.log("fromeditmoda", rowData);
    const requestData = {
      equipName: values.equipName,
      status: statusValue,
      groupAutoID: values.groupAutoID,
      catAutoId: values.catAutoId,
      equipCost: values.cost,
      equipLeadTime: values.leadtimedays,
      quantity: values.minirequiredqty,
    };
    console.log(requestData);
    const requestDataa = {
      equipName: values.equipName,
      status: statusValue,
      groupAutoID: values.groupAutoID,
      catAutoId: values.catAutoId,
      equipCost: values.cost,
      equipLeadTime: values.leadtimedays,
      quantity: values.minirequiredqty,
      ...dattaaa,
    };
    const token = localStorage.getItem("token");
    try {
      if (isEdit) {
        // Perform PUT API call here with updatedData
        // Replace 'your-api-endpoint' with your actual API endpoint
        const response = await fetch(
          `http://localhost:8007/api/Equipments/${rowData.equipId}`,
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
        const response = await fetch("http://localhost:8007/api/Equipments", {
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
          {isEdit ? "Edit Equipment" : "Create Equipment"}
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
                name="equipName"
                label="Equipment Name"
                variant="outlined"
                fullWidth={false}
                margin="dense"
                value={values.equipName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.equipName && Boolean(errors.equipName)}
                helperText={touched.equipName && errors.equipName}
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
              <FormControl
                variant="outlined"
                margin="dense"
                size="small"
                style={{ width: "45ch" }}
                error={touched.catAutoId && Boolean(errors.catAutoId)}
              >
                <InputLabel>Categroy Name</InputLabel>
                <Field
                  name="catAutoId"
                  label="Category Name"
                  as={Select}
                  labelId="catAutoId-label"
                  id="catAutoId"
                  value={values.catAutoId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.catAutoId && Boolean(errors.catAutoId)}
                  color="warning"
                  InputProps={{
                    style: { height: "40px", fontSize: "15px" },
                  }}
                >
                  {catAutoIdData.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
                {touched.catAutoId && errors.catAutoId && (
                  <div className="error">{errors.catAutoId}</div>
                )}
              </FormControl>
              <br />
              <TextField
                name="cost"
                label="Cost"
                variant="outlined"
                fullWidth={false}
                margin="dense"
                value={values.cost}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.cost && Boolean(errors.cost)}
                helperText={touched.cost && errors.cost}
                color="warning"
                size="small"
                style={{ width: "22ch", marginLeft: "10px" }}
                InputProps={{ style: { height: "40px", fontSize: "15px" } }}
              />
              <br />
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
              <TextField
                name="minirequiredqty"
                label="Mini Required Quantity"
                variant="outlined"
                fullWidth={false}
                margin="dense"
                value={values.minirequiredqty}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.minirequiredqty && Boolean(errors.minirequiredqty)
                }
                helperText={touched.minirequiredqty && errors.minirequiredqty}
                color="warning"
                size="small"
                style={{ width: "22ch", marginLeft: "10px" }}
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

export default CreateEquipModal;
