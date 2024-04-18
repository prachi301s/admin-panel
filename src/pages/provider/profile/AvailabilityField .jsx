// import React, { useState } from 'react';

// import {
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Grid,
//   TextField,
//   Typography,
//   Button,
// } from '@mui/material';

// const AvailabilityField = () => {
//   const [availability, setAvailability] = useState({
//     day: 'monday',
//     startTime: '02:03',
//     endTime: '03:08',
//   });

//   const handleDayChange = (event) => {
//     setAvailability({ ...availability, day: event.target.value });
//   };

//   const handleTimeChange = (event) => {
//     setAvailability({ ...availability, [event.target.name]: event.target.value });
//   };

//   const handleOK = () => {
//     // Handle OK button click
//     console.log('OK button clicked');
//   };

//   const handleCancel = () => {
//     // Handle Cancel button click
//     console.log('Cancel button clicked');
//   };

//   return (
//     <div>
//       <Typography variant="h6">Availability</Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <FormControl fullWidth>
//             {/* <InputLabel>Day</InputLabel> */}
//             <Select value={availability.day} onChange={handleDayChange}>
//               <MenuItem value="monday">Monday</MenuItem>
//               <MenuItem value="tuesday">Tuesday</MenuItem>
//               <MenuItem value="wednesday">Wednesday</MenuItem>
//               <MenuItem value="thursday">Thursday</MenuItem>
//               <MenuItem value="friday">Friday</MenuItem>
//               <MenuItem value="saturday">Saturday</MenuItem>
//               <MenuItem value="sunday">Sunday</MenuItem>
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             label="Start Time"
//             type="time"
//             name="startTime"
//             value={availability.startTime}
//             onChange={handleTimeChange}
//             fullWidth
//             InputLabelProps={{
//               shrink: true,
//             }}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             label="End Time"
//             type="time"
//             name="endTime"
//             value={availability.endTime}
//             onChange={handleTimeChange}
//             fullWidth
//             InputLabelProps={{
//               shrink: true,
//             }}
//           />
//         </Grid>
//         <Grid item xs={3}>
//           <Button onClick={handleCancel}>Cancel</Button>
//         </Grid>
//         <Grid item xs={3}>
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: '#5BE0FE',
//               '&:hover': {
//                 backgroundColor: '#0a58ca',
//               },
//             }}
//             onClick={handleOK}
//           >
//             OK
//           </Button>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default AvailabilityField;

import React, { useState, useEffect } from 'react';

import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  TextField,
  Typography,
  Button,
} from '@mui/material';

const AvailabilityField = () => {
  const [availability, setAvailability] = useState({
    day: '',
    startTime: '',
    endTime: '',
  });
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const data = {
          day: 'monday',
          startTime: '08:00',
          endTime: '09:00',
        };
        setAvailability(data);
        setIsAvailable(true);
      } catch (error) {
        console.error('Error fetching availability:', error);
      }
    };

    fetchAvailability();
  }, []);

  const handleDayChange = (event) => {
    setAvailability({ ...availability, day: event.target.value });
  };

  const handleTimeChange = (event) => {
    setAvailability({ ...availability, [event.target.name]: event.target.value });
  };

  const handleOK = () => {
    console.log('OK button clicked');
  };

  const handleCancel = () => {
    console.log('Cancel button clicked');
  };

  const selectedDateTime = `${availability.day} ${availability.startTime}-${availability.endTime}`;

  return (
    <div
      style={{
        border: '1px solid black',
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      {/* <Typography variant="h3" mb={2}>
        Availability
      </Typography> */}
      {isAvailable && (
        <>
          <Grid item xs={12}>
            <Typography variant="h3" mb={2}>
              Availability
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField disabled value={selectedDateTime} label="Selected Date & Time" fullWidth />
          </Grid>
        </>
      )}
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            {/* <InputLabel>Day</InputLabel> */}
            <Select variant="outlined" value={availability.day} onChange={handleDayChange}>
              <MenuItem value="monday">Monday</MenuItem>
              <MenuItem value="tuesday">Tuesday</MenuItem>
              <MenuItem value="wednesday">Wednesday</MenuItem>
              <MenuItem value="thursday">Thursday</MenuItem>
              <MenuItem value="friday">Friday</MenuItem>
              <MenuItem value="saturday">Saturday</MenuItem>
              <MenuItem value="sunday">Sunday</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Start Time"
            type="time"
            name="startTime"
            value={availability.startTime}
            onChange={handleTimeChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="End Time"
            type="time"
            name="endTime"
            value={availability.endTime}
            onChange={handleTimeChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <Button onClick={handleCancel}>Cancel</Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#5BE0FE',
              '&:hover': {
                backgroundColor: '#0a58ca',
              },
            }}
            onClick={handleOK}
          >
            OK
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AvailabilityField;
