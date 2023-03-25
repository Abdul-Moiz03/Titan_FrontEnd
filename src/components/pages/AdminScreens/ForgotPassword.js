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
import TitanLogo1 from "../TitanLogo1.png";

export default function ForgotPassword() {
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    };

return (
 
       
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
             <Box>
              <img display="block" src={TitanLogo1} width={164} height={57} alt="titan logo" />
              </Box>
            <Avatar sx={{ mt: 3, mb:2, bgcolor: '#FBB515', color:'black' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Reset Password
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="Enter Password"
                name="password"
                autoComplete="password"
                // autoFocus
                color='warning'
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Re-Enter Password"
                type="password"
                id="password"
                autoComplete="current-password"
                color='warning'
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor:'#FBB515', color:"black", 
                '&:hover': {
                  backgroundColor: '#FABE4B',
                }, }}
                
              >
                RESET PASSWORD
              </Button>
              {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
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
              </Grid> */}
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
          </Container>
       
  );
        }