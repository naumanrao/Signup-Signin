import React from 'react'
import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  {green} from '@mui/material/colors';
import CheckIcon from '@mui/icons-material/Check';





function SuccessSign() {
  return (
   
      <Container component="main" maxWidth="xs"  >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
<Avatar sx={{ bgcolor: green[500] }}>
  <CheckIcon />
</Avatar>
<Typography component="h1" variant="h5">
            You have successfully created your account.
          </Typography>
          <Button
            
             type = "submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
             href='/SignIn'
              
            >
             Go to Sign In page
            </Button>
    </Box>
    </Container>
  )
}

export default SuccessSign
