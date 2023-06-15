import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material';
import Divider from '@mui/material/Divider';

import Instructions from './Instructions';
import Evaluation from './Evaluation';
import Execution from './Execution';
import HSList from './HSList';
import ItemsList from './ItemsList';
import StatusRepair from './StatusRepair';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const renderComponent = () => {
    switch (value) {
      case 0:
        return <Instructions />;
      case 1:
        return <Evaluation />;
      case 2:
        return <Execution />;
      case 3:
        return <HSList />;
      case 4:
        return <ItemsList />;
      case 5:
        return <StatusRepair/>;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: 1050  }} >
      <BottomNavigation
        style={{backgroundColor: "#F5F6F8" }}
        showLabels
        value={value}
        sx={{
        //   justifyContent: 'space-between',
          "& .MuiBottomNavigationAction-root": {
            borderBottom: "2px solid transparent",
            fontSize: "1.0rem",
          },
          "& .Mui-selected": {
            borderBottom: "none",
            fontSize: "1.5rem",
            color: "#FBB515",
            "&:after": {
              content: '""',
              position: 'absolute',
              bottom: '-2px',
              left: 0,
              height: '2px',
              background: '#FBB515',
              width: '100%',
            },
          },
        }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Instructions"  />
        <BottomNavigationAction label="Evaluation" /> 
        <BottomNavigationAction label="Execution"  /> 
        <BottomNavigationAction label="H & S Checklist"  /> 
        <BottomNavigationAction label="Items List" /> 
        <BottomNavigationAction label="Status & Repair"  /> 
        
      </BottomNavigation>
      <Divider  />
      <br/>
      {renderComponent()}
    </Box>
  );
}