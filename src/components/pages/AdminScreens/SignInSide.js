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
import { Link } from "react-router-dom";
import { sizing } from '@mui/system';


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
            backgroundColor: '#262626' ,
            // (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Box
            sx={{
              my: 25,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              // alignItems: 'center',
              justifyContent: 'left'
            }}
          >
            <Box>
              <img display="block" src={titan} width={164} height={57} alt="titan logo" />
              </Box>
              <Box sx={{my: 5}}>
              <Typography display={'block'} component="h1" variant="h3" fontFamily={''} fontStyle="normal" color={'white'} fontSize={'30'}>
                  Welcome Back.
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
              // my: 20,
              // mx: 25,
              marginTop:12,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#FBB515', color:'black' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                color='warning'
                // autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                color='warning'
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor:'#FBB515', color:"black",  
                '&:hover': {
                  backgroundColor: '#FABE4B',
                },}}
                
              >
                SIGN IN 
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/ForgotPassword" variant="body2">
                    <Typography color={'black'}>
                    Forgot password?
                    </Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/SignUp" variant="body2">
                  <Typography color={'black'}>
                    {"Don't have an account? Sign Up"}
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}