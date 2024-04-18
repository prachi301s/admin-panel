import React, { useState } from 'react';
import {
  Avatar,
  Typography,
  Card,
  CardContent,
  Box,
  TextField,
  Rating,
  Badge,
} from '@mui/material';



export default function CaProfileView1({ imageUrl, status, name, rating, walletAmount }) {
  const [value, setValue] = useState();

  return (
    <Box
      sx={{
        textAlign: 'center',
        borderRadius: '0px',
        bgcolor: '#ffffff',
        marginLeft: '0rem',
        boxShadow: '0px 4px 20px 0px #00000026',
      }}
    >
      {/* <Card sx={{ textAlign: 'center', borderRadius: '0px' }}> */}
      {/* <CardContent> */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: '3.175rem' }}
      >
        <Badge
          // color="secondary"
          overlap="circular"
          badgeContent=" "
          variant="dot"
          sx={{
            '& .MuiBadge-dot': {
              width: '1rem',
              height: '1rem',
              borderRadius: '50%',
              marginBottom: '3rem',
              background: '#E80000',
            },
            border: '1.5rem solid #F5F5F5',
            borderRadius: '50%',
          }}
        >
          <Avatar alt="Profile Image" src={imageUrl} sx={{ width: '12rem', height: '12rem' }} />
        </Badge>
        {/* <Avatar alt="Profile Image" src={imageUrl} sx={{ width: '10rem', height: '10rem' }} /> */}
      </Box>
      <Typography variant="subtitle" color="#E80000">
        {status}
      </Typography>
      <Box
        sx={{
          backgroundColor: '#F5F5F5',
          // marginBottom: '3rem',
          marginTop: '2rem',
          // width: '100%',
          padding: '0.5rem',
        }}
      >
        <Typography variant="h4" gutterBottom>
          {name}
        </Typography>
        <Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Typography variant="body1" gutterBottom>
            Rating: {rating}
          </Typography>
        </Typography>
      </Box>
      <Box sx={{ padding: '1rem', mt: '1.5rem' }}>
        <Typography sx={{ textAlign: 'left' }} variant="h4">
          Wallet Amount
        </Typography>
        <TextField
          
          variant="filled"
          InputLabelProps={{ shrink: true }}
          disabled
          fullWidth
          size="small"
          label="₹20000"
          type="password"
          autoComplete="current-password"
          InputProps={{
    notched: true, 
  }}
        />
      </Box>
      {/* </CardContent> */}
      {/* </Card> */}
    </Box>
  );
}
