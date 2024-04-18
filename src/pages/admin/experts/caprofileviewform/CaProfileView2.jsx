import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  Button,
  Grid,
  Box,
  FormControlLabel,
  FormLabel,
  Container,
  Typography,
  Divider,
  Card,
} from '@mui/material';

import person from '../../../../../src/assets/assets/Person.png';
// import person from '../../../../public/assets/person.png';
import styled from '@emotion/styled';
import { tr } from 'date-fns/locale';
import CaProfileView1 from './CaProfileView1';

const StyledSwitch = styled(Switch)({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#34DE29',
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#34DE29',
  },
});

export default function CaProfileView2() {
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    gender: '',
    language: '',
    expertise: '',
    perMinutesCharge: '',
    experience: '',
    education: '',
    callActive: false,
    chatActive: false,
    aboutCA:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === 'callActive' || name === 'chatActive' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <Container>
      <Box sx={{ mt: '1rem' }}>
        {' '}
        <Grid sx={{ display: 'flex', gap: '1.25rem' }}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CaProfileView1
              imageUrl={person}
              status="Offline"
              name="John Doe"
              rating={4.5}
              walletAmount={20000}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={9}>
            {/* <Card sx={{ borderRadius: 'none' }}>
              <Typography variant="h4">Albert Flores</Typography>
              <Divider sx={{ mb: '20px', mt: '10px' }} />
            </Card> */}

            <Card
              item
              xs={8}
              sx={{
                boxShadow: '0.3125rem',
                padding: '1.5625rem',
                borderRadius: '0rem',
                width: ' Hug (42.125rem)',
                height: 'Hug (100rem)',
              }}
            >
              <Typography variant="h4">Albert Flores</Typography>
              <Divider sx={{ mb: '20px', mt: '10px' }} />
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <FormLabel>Phone</FormLabel>
                    <TextField
                      required
                      hiddenLabel
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                      variant="filled"
                      InputProps={{ disableUnderline: true }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormLabel>Email</FormLabel>
                    <TextField
                      required
                      hiddenLabel
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                      variant="filled"
                      InputProps={{ disableUnderline: true }}
                      //   placeholder="Please Enter Title"
                      //   sx={textFieldStyles('gray', '5px', 'gray')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl
                      fullWidth
                      size="small"
                      variant="filled"
                      sx={{
                        '&.MuiSelect-root': {
                          borderTopLeftRadius: '0%',
                          borderTopRightRadius: '0%',
                        },
                      }}
                    >
                      <FormLabel sx={{ color: 'gray' }}>Gender</FormLabel>
                      <Select
                        // label="Gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        disableUnderline
                      >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormLabel>Language</FormLabel>
                    <TextField
                      required
                      hiddenLabel
                      name="language"
                      value={formData.language}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                      variant="filled"
                      InputProps={{ disableUnderline: true }}
                      //   placeholder="Please Enter Title"
                      //   sx={textFieldStyles('gray', '5px', 'gray')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormLabel>Expertise</FormLabel>
                    <TextField
                      required
                      hiddenLabel
                      name="Expertise"
                      value={formData.category_name}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                      variant="filled"
                      InputProps={{ disableUnderline: true }}
                      //   placeholder="Please Enter Title"
                      //   sx={textFieldStyles('gray', '5px', 'gray')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormLabel>Per Minutes Charge</FormLabel>
                    <TextField
                      required
                      hiddenLabel
                      name="Per_Minutes_Charge"
                      value={formData.category_name}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                      variant="filled"
                      InputProps={{ disableUnderline: true }}
                      //   placeholder="Please Enter Title"
                      //   sx={textFieldStyles('gray', '5px', 'gray')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormLabel>Experience</FormLabel>
                    <TextField
                      required
                      hiddenLabel
                      name="Experience"
                      value={formData.category_name}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                      variant="filled"
                      InputProps={{ disableUnderline: true }}
                      //   placeholder="Please Enter Title"
                      //   sx={textFieldStyles('gray', '5px', 'gray')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormLabel>Education</FormLabel>
                    <TextField
                      required
                      hiddenLabel
                      name="Education"
                      value={formData.category_name}
                      onChange={handleChange}
                      fullWidth
                      size="small"
                      variant="filled"
                      InputProps={{ disableUnderline: true }}
                      //   placeholder="Please Enter Title"
                      //   sx={textFieldStyles('gray', '5px', 'gray')}
                    />
                  </Grid>
                </Grid>
                <Box sx={{ display: 'flex', margin: '20px' }}>
                  <FormControl fullWidth>
                    <FormControlLabel
                      control={<StyledSwitch defaultChecked onChange={handleChange} />}
                      label="Call Active"
                    />
                    {/* <InputLabel>Call Active</InputLabel>
            <Switch name="callActive" checked={formData.callActive} onChange={handleChange} /> */}
                  </FormControl>
                  <FormControl fullWidth>
                    <FormControlLabel
                      control={<StyledSwitch defaultChecked onChange={handleChange} />}
                      label="Chat Active"
                    />
                    {/* <InputLabel>Chat Active</InputLabel>
          <Switch name="chatActive" checked={formData.chatActive} onChange={handleChange} /> */}
                  </FormControl>
                </Box>
                <FormControl fullWidth>
                  <FormLabel>About CA</FormLabel>
                  <TextField
                    //   label="About CA"
                    // disabled
                    name="aboutCA"
                    value={formData.aboutCA}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    fullWidth
                    variant="filled"
                      InputProps={{ disableUnderline: true }}
                  />
                </FormControl>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
