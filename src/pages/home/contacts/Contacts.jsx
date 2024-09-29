import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Container,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import './Contacts.css'
import { useForm } from 'react-hook-form';

const Contacts = () => {
  const { register, reset ,handleSubmit, formState: { errors } } = useForm(); 
  const [success,setSuccess] = useState(false)

  const createSheetData = (data) => {
//     fetch('https://sheetdb.io/api/v1/n5fjzxbfyd2zo', {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         data: [
//             {
//                 'name':data.name,
//                 "country":data.country,
//                 "email":data.email,
//                 "phone":data.phone,
//                 "contactMethod":data.contactMethod,
//                 "nickname":data.nickname,
//             }
//         ]
//     })
// })
//   .then((response) => response.json())
//   .then((data) => {
//     if(data.created ===1){
//       setSuccess(true)
//       reset();
//     }
//   });

  }
  const onSubmit = async data => {
    try {
      console.log(data)
      // createSheetData(data)
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Box
      id="contacts"
      sx={{
        padding: {xs:1,  md: '5em' },
        position: 'relative',        
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1,
        }}
      ></Box>

      <Container sx={{ position: 'relative', zIndex: 2 }}>
        {/* Contacts Section */}
        <Grid container spacing={{xs:1,md:5}}>
          {/* Contact Information */}
          <Grid size={{xs:12,md:6}}>
            <Box textAlign={{ xs: 'center', md: 'left' }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5em', sm: '3em', md: '3.5em' },
                  color: 'white',
                  fontWeight:'bolder'
                }}
              >
                CONTACTS
              </Typography>
              <Box display="flex" alignItems="center" my={2}>
                <img
                  src="https://xbetagents.com/wp-content/uploads/2024/03/Picture2.png"
                  alt="1xbet logo"
                  width={'10%'}
                />
                <Typography variant="p" fontWeight={'bold'} ml={2} color="white">
                  1xbet.com
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" my={2}>
                <img
                  src="https://xbetagents.com/wp-content/uploads/2024/04/Untitled-design.png"
                  alt="email logo"
                  width={'8%'}
                />
                <Typography variant="p" fontWeight={'bold'} ml={2} color="white">
                  manager@1xbetsupport.com
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid size={{xs:12,md:6}}>
            <Box
              sx={{
                backgroundColor: 'white',
                padding: '2em',
                borderRadius:'0.4em',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography variant='h5' color="black" fontWeight={'bolder'} textAlign={'center'} mb={2}>
                Submit your application
              </Typography>
              <form>
                <TextField
                  fullWidth
                  label="Name"               
                  variant="outlined"
                   sx={{ marginBottom: '0.5em' }}
                  size="small"
                  {...register("name", { required: "Please fill out this field." })}
                />
                 {errors.name && <span className="error-message">{'Enter your name'}</span>}
                <TextField
                  fullWidth
                  label="Email"
               
                  variant="outlined"
                   sx={{ marginBottom: '0.5em' }}
                  size="small"
                />
                <TextField
                  fullWidth
                  label="Country"
                 
                  variant="outlined"
                   sx={{ marginBottom: '0.5em' }}
                  size="small"
                />
                <TextField
                  fullWidth
                  label="Phone"
               
                  variant="outlined"
                   sx={{ marginBottom: '0.5em' }}
                  size="small"
                />
                <TextField
                  fullWidth
                  label="Telegram/Others account"
               
                  variant="outlined"
                  sx={{ marginBottom: '0.5em' }}
                  size="small"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: '#799d44',
                    color: 'white',
                    padding: '0.5em',
                  }}
                >
                  Send
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contacts;
