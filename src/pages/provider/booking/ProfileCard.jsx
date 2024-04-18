import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { Typography, Box, Card, CardContent, Divider, Container } from '@mui/material';

const ProfileCard = ({ name, imageSrc, location, patientId, phone, age, bloodGroup }) => {
  return (
    <Container>
      <Card sx={{ width: '300px', marginTop: '50px', boxShadow: '5px' }}>
        <Box sx={{ textAlign: 'center', padding: '10px' }}>
          <Typography>
            <img
              alt={name}
              src={imageSrc}
              style={{ width: 94, height: 94, borderRadius: '50px' }}
            />
          </Typography>
          <Typography>{name}</Typography>
          <Typography>Patient ID : {patientId}</Typography>
          <Typography>
            <AddLocationAltIcon />
            {location}
          </Typography>
        </Box>
        <Divider />
        <CardContent>
          <Typography variant="body1">Phone: {phone}</Typography>
          <Typography variant="body1">Age: {age}</Typography>
          <Typography variant="body1">Blood Group: {bloodGroup}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProfileCard;
