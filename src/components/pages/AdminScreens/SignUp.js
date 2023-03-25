import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import titan from "../titan.png";
import Container from '@mui/material/Container';
import { sizing } from '@mui/system';
import { Link } from "react-router-dom";


// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={4}
          
          sx={{
            // backgroundImage: 'url(https://source.unsplash.com/random)',
            // backgroundRepeat: 'no-repeat',
            backgroundColor: '#323C47' ,
            // (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Box
            sx={{
              my: 12,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              // alignItems: 'center',
              justifyContent: 'left'
            }}
          >
            <Box >
              <img display="block" src={titan} width={164} height={57} alt="titan logo" />
              </Box>
              <Box sx={{my: 5}}>
              <Typography  display={'block'} component="h1" variant="h3" fontFamily={''} fontStyle="normal" color={'white'} fontSize={'30'}>
              that’ll help your company break production records
              </Typography>
              </Box>
              <Box>
              <Typography display={'block'} color={'white'}>
               We only need your email and password, and you'll be on your way. 
              </Typography>
              </Box>
              
          </Box>
        
        </Grid>
        
        <Grid item xs={12} sm={8}  component={Paper} elevation={6} square>
        <Container component="main" maxWidth="sm">
        <Box
          sx={{
            marginTop: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#FBB515', color:'black' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Start your free trial
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  // autoFocus
                  color='warning'
                  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  color='warning'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Company Email"
                  name="email"
                  autoComplete="email"
                  color='warning'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                  color='warning'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  color='warning'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="company"
                  label="Company Name"
                  name="company"
                  autoComplete="company"
                  color='warning'
                />
              </Grid>
              
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive updates via email."
                />
              </Grid> */}
            </Grid>
            <Link to="/Users" style={{textDecoration: 'none'}}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor:'#FBB515', color:"black",  
              '&:hover': {
                backgroundColor: '#FABE4B',
              },}}
            >
              START TRIAL
            </Button>
            </Link>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/SignInSide" variant="body2">
                <Typography color={'black'}>
                  Already have an account? Sign in
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </Container>
        </Grid>
      </Grid>
      
    </ThemeProvider>
  );
}