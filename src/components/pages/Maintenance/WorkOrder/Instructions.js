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

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


const initialValues = {
  name: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Asset Model is required"),
});


const nameData = [
  { value: "optionA", label: "Option A" },
  { value: "optionB", label: "Option B" },
  { value: "optionC", label: "Option C" },
];


const Instructions = () => {

  const [name, setName] = useState("");
  const [chips, setChips] = useState([]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && name.trim() !== "") {
      setChips((prevChips) => [...prevChips, name.trim()]);
      setName("");
    }
  };

  const handleDelete = (chipToDelete) => () => {
    setChips((prevChips) => prevChips.filter((chip) => chip !== chipToDelete));
  };


  // const [open, setOpen] = useState(false);
  // const [rows, setrows] = useState([]);
  // console.log(JSON.stringify(rows));
  // const columns = [
  //   { field: "id", headerName: "No", width: 70 },
  //   { field: "name", headerName: "Name", width: 200 },

  // //   {
  // //     field: "active",
  // //     headerName: "Active",
  // //     width: 100,
  // //     renderCell: (params) => <Switchbtn id={params.row.id} />,
  // //   },

  // ];

  // const onSubmit = (values, { setSubmitting, resetForm }) => {
  //   // Construct the row data for the DataGrid
  //   const rowData = {
  //     id: rows.length + 1,
  //     name: values.name,
  //     startDate: values.startDate,
  //     startTime: values.startTime,
  //     endTime: values.endTime,
  //     endDate: values.endDate,
  //     headOfProblem:values.headOfProblem,
  //     remarks: values.remarks,
  //   };
  //   // Update the formData state with the new row data
  //   setrows((prevFormData) => [...prevFormData, rowData]);
  //   console.log(values);
  //   // Reset the form
  //   resetForm();
  // };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  // const handleDelete = () => {
  //   console.info('You clicked the delete icon.');
  // };

  // const handleDelete = (id) => {
  //   setrows((prevFormData) => prevFormData.filter((row) => row.id !== id));
  // };

  const handleAPI = () => {
    /**api call here */
    // setOpen(true);
  };

  return (
    <>
   
          <Box sx={{ px: 3, width: "auto"  }}>
            <Typography id="transition-modal-title" variant="h5" component="h5">
              Instructions
            </Typography>

            {/* <Formik
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
                    error={touched.name && Boolean(errors.name)}
                  > */}


                      <TextField
                        name="name"
                        label="Name"
                        variant="outlined"
                        fullWidth={false}
                        margin="dense"
                        value={name}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        sx={{ backgroundColor: '#FFFFFF' }}
                        style={{ width: "45ch"}}
                      />


                  {/* </FormControl> */}

                  <br />


                  {chips.map((chip, index) => (
                      <Chip
                        key={index}
                        label={chip}
                        onDelete={handleDelete(chip)}
                        style={{ margin: "0.5rem" }}
                      />
                    ))}
                  &nbsp; &nbsp;

                  <br />
                  <br />
                    
                  <Card sx={{ minWidth: 275, minHeight: 300 }}>
                    <CardContent>
                      {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                      </Typography>
                      <Typography variant="h5" component="div">
                        be{bull}nev{bull}o{bull}lent
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                      </Typography>
                      <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                      </Typography> */}
                    </CardContent>
                    {/* <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions> */}
                  </Card>
                  
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
                      // disabled={isSubmitting}
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
                      &nbsp; &nbsp; SAVE &nbsp; &nbsp;
                    </Button>

                  </Box>

                  <br/>

                  {/* <Button variant="contained" color="primary">
                      Submit
                    </Button> */}
                {/* </Form>
              )}
            </Formik> */}
          </Box>
        {/* </Fade>
      </Modal> */}
    </>
  );
};

export default Instructions;
