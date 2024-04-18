import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import person from '../../../../public/assets/person.png';
const appointmentsData = [
  {
    id: 1,
    name: 'Richard Wilson',
    date: '14 Nov 2019, 10.00 AM',
    location: 'Newyork, United States',
    email: 'richard@example.com',
    phone: '+1 923 782 4575',
    imageSrc: '../assets/person1.png',
  },
];

export default function BookingList() {
  return (
    <Container>
      {appointmentsData.map((appointment) => (
        <Grid
          container
          spacing={2}
          key={appointment.id}
          sx={{
            backgroundColor: 'white',
            boxShadow: '10px',
            borderRadius: '5px',
          }}
        >
          <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={person}
              alt="Profile"
              style={{
                width: '155px',
                height: '155px',
                borderRadius: '20%',
                paddingRight: '15px',
              }}
            />
            <div>
              <Typography variant="h3">{appointment.name}</Typography>
              <div>
                <Typography>
                  <AccessTimeIcon /> {appointment.date}
                </Typography>
                <Typography>
                  <AddLocationAltIcon /> {appointment.location}
                </Typography>
                <Typography>
                  <EmailIcon /> {appointment.email}
                </Typography>
                <Typography>
                  <CallIcon /> {appointment.phone}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingRight: '15px',
            }}
          >
            <Stack direction="row" spacing={1}>
              <Button variant="contained" color="primary" startIcon={<VisibilityIcon />}>
                View
              </Button>
              <Button variant="contained" color="success" startIcon={<CheckIcon />}>
                Accept
              </Button>
              <Button variant="contained" color="error" startIcon={<CloseIcon />}>
                Cancel
              </Button>
            </Stack>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
}
