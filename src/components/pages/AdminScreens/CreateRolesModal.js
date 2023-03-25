import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CreateUserTable from './CreateUserTable';
import { Link } from "react-router-dom";
import Table from './Table';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';
import { height } from '@mui/system';

const deptColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'dept', headerName: 'Department', width: 900 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 80,
      renderCell: (params) => {
        const [hoveredIcon, setHoveredIcon] = useState(null);
  
        const handleIconMouseEnter = (iconName) => {
          setHoveredIcon(iconName);
        };
  
        const handleIconMouseLeave = () => {
          setHoveredIcon(null);
        };
  
        return (
          <div className="icon-wrapper">
            <Button sx={{ color:"black"}}>
            <DeleteIcon
              style={{ color: hoveredIcon === 'delete' ? '#FBB515' : 'inherit' }}
              onMouseEnter={() => handleIconMouseEnter('delete')}
              onMouseLeave={handleIconMouseLeave}
            />
            </Button>
    
          </div>
        );
      },
    },
  ];
  
  const deptRows = [
    { id: 1, dept:'Packaging' },
    { id: 2, dept:'Maintenance' },

  ];
  
  const permissionColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'roles', headerName: 'Permission', width: 900 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 80,
      renderCell: (params) => {
        const [hoveredIcon, setHoveredIcon] = useState(null);
  
        const handleIconMouseEnter = (iconName) => {
          setHoveredIcon(iconName);
        };
  
        const handleIconMouseLeave = () => {
          setHoveredIcon(null);
        };
  
        return (
          <div className="icon-wrapper">
            <Button sx={{ color:"black"}}>
            <DeleteIcon
              style={{ color: hoveredIcon === 'delete' ? '#FBB515' : 'inherit' }}
              onMouseEnter={() => handleIconMouseEnter('delete')}
              onMouseLeave={handleIconMouseLeave}
            />
            </Button>
    
          </div>
        );
      },
    },
  ];
  
  const permissionRows = [
    { id: 1, empName: 'Snow', userName: 'Jon', credentials: 35 },
    { id: 2, empName: 'Lannister', userName: 'Cersei', credentials: 42 },

  ];


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '1200px',
    maxHeight: '90%',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    '@media (min-width:600px)': {
      width: '90%',
    },
  };

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} 
              type="submit"
              fullWidth={false}
              variant="contained"
              sx={{ mt: 2, mb: 2, backgroundColor:'#FBB515', color:"black",  
              '&:hover': {
                backgroundColor: '#FABE4B',
              },}}>
          Add Roles
      </Button>
      <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
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
            <Typography id="transition-modal-title" variant="h5" component="h5" >
              Create Roles
            </Typography>
            <TextField
                margin="dense"
                required
                fullWidth={false}
                id="dept"
                label="Department"
                name="dept"
                autoComplete="department"
                // autoFocus
                size="small"
                color='warning'
                style={{width: '45ch'}}
                InputProps={{ style: { height: '40px', fontSize:'15px' } }}
              />
              <br/>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height:'12%'}}>
            <Typography id="transition-modal-title" variant="h6"  sx={{ textAlign: 'left' }}>
                Department
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height:'5%' }}>
                <TextField
                margin="dense"
                required
                fullWidth={false}
                name="department"
                label="Department Name"
                type="department"
                id="department"
                autoComplete="department"
                size="small"
                color='warning'
                style={{width: '40ch'}}
                InputProps={{ style: { height: '40px', fontSize:'15px' } }}
                />
                &nbsp;
                &nbsp;
                <Button
                onClick={handleOpen}
                type="submit"
                fullWidth={false}
                variant="contained"
                sx={{ mt: 2, mb: 2, backgroundColor:'#FBB515', color:"black", 
                '&:hover': {
                    backgroundColor: '#FABE4B',
                },}}
                >
                &nbsp; &nbsp; ADD  &nbsp;  &nbsp;
                </Button>
  </Box>
</Box>

<Table rows={deptRows} columns={deptColumns} height={185} rowHeight={35}/>

<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography id="transition-modal-title" variant="h6" component="h6" sx={{ textAlign: 'left' }}>
                Permission
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <TextField
                margin="dense"
                required
                fullWidth={false}
                name="permission"
                label="Permission"
                type="permission"
                id="permission"
                autoComplete="permission"
                size="small"
                color='warning'
                style={{width: '40ch'}}
                InputProps={{ style: { height: '40px', fontSize:'15px' } }}
                />
                &nbsp;
                &nbsp;
                <Button
                onClick={handleOpen}
                type="submit"
                fullWidth={false}
                variant="contained"
                sx={{ mt: 2, mb: 2, backgroundColor:'#FBB515', color:"black", 
                '&:hover': {
                    backgroundColor: '#FABE4B',
                },}}
                >
                &nbsp; &nbsp; ADD  &nbsp;  &nbsp;
                </Button>
  </Box>
</Box>


              <Table rows={permissionRows} columns={permissionColumns} height={185} rowHeight={35}/>

              {/* <CreateUserTable/> */}

              <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
              <Button onClick={handleOpen}
              type="submit"
              fullWidth={false}
              variant="contained"
              sx={{ mt: 2, mb: 0, backgroundColor:'#FBB515', color:"black", 
              '&:hover': {
                backgroundColor: '#FABE4B',
              },}}
            >
              &nbsp;  CANCEL   &nbsp;
            </Button>
        &nbsp;
        &nbsp;
        <Link to="/Permission" style={{textDecoration: 'none'}}>
        <Button onClick={handleOpen}
              type="submit"
              fullWidth={false}
              variant="contained"
              sx={{ mt: 2, mb: 0, backgroundColor:'#FBB515', color:"black", 
              '&:hover': {
                backgroundColor: '#FABE4B',
              },}}
            >
              &nbsp; &nbsp; SAVE  &nbsp;  &nbsp;
            </Button>
            </Link>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
    </div>
  );
}
