import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Container,
  Typography,
  Divider,
  Avatar,
  Table,
  // Paper,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Stack,
  Button,
} from "@mui/material";

import profileimg from "../../../../src/assets/caassets/profileimg.jpg";

// ----------------------------------------------------------------------
const appointments = [
  {
    id: 1,
    patientName: "Richard Wilson",
    patientId: "#PT0016",
    avatarSrc: profileimg,
    apptDate: "19 Fab 2024",
    apptTime: "10.00 AM",
    purpose: "General",
    type: "Online",
    paidAmount: "$150",
  },
  {
    id: 2,
    patientName: "Richard Wilson",
    patientId: "#PT0016",
    avatarSrc: profileimg,
    apptDate: "19 Fab 2024",
    apptTime: "10.00 AM",
    purpose: "General",
    type: "Cash",
    paidAmount: "$150",
  },
  {
    id: 3,
    patientName: "Richard Wilson",
    patientId: "#PT0016",
    avatarSrc: profileimg,
    apptDate: "19 Fab 2024",
    apptTime: "10.00 AM",
    purpose: "General",
    type: "Online",
    paidAmount: "$150",
  },
  {
    id: 4,
    patientName: "Richard Wilson",
    patientId: "#PT0016",
    avatarSrc: profileimg,
    apptDate: "19 Fab 2024",
    apptTime: "10.00 AM",
    purpose: "General",
    type: "Cash",
    paidAmount: "$150",
  },
  {
    id: 5,
    patientName: "Richard Wilson",
    patientId: "#PT0016",
    avatarSrc: profileimg,
    apptDate: "19 Fab 2024",
    apptTime: "10.00 AM",
    purpose: "General",
    type: "Online",
    paidAmount: "$150",
  },
];
const CaBooking = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "white",
        padding: "50px",
        borderRadius: "5px",
        boxShadow: "5",
      }}>
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        Booking
      </Typography>
      <Divider />
      {/* <Typography variant="subtitle1" sx={{ margin: '20px' }}>
        Top Services
      </Typography>
      <Divider /> */}
      <Stack direction="row" spacing={1} sx={{ margin: "20px" }}>
        <Button
          sx={{
            color: "white",
            backgroundColor: "#5BE0FE",
            borderRadius: "50px",
            padding: "10px",
            width: "120px",
            "&:hover": {
              backgroundColor: "#E0F6F6",
            },
          }}>
          Upcoming
        </Button>
        <Button sx={{ borderRadius: "50px", padding: "10px", width: "120px" }}>
          Today
        </Button>
      </Stack>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ textAlign: "left" }}>
              <TableCell
                columnSpan={2}
                sx={{
                  textAlign: "left",
                  fontSize: "16px",
                  fontWeight: "500px",
                }}>
                Name
              </TableCell>
              {/* <TableCell>Patient ID</TableCell> */}
              <TableCell
                sx={{
                  textAlign: "left",
                  fontSize: "16px",
                  fontWeight: "500px",
                }}>
                Appt Date & Time
              </TableCell>
              {/* <TableCell>Purpose</TableCell> */}
              <TableCell
                sx={{
                  textAlign: "left",
                  fontSize: "16px",
                  fontWeight: "500px",
                }}>
                Type
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "left",
                  fontSize: "16px",
                  fontWeight: "500px",
                }}>
                Paid Amount
              </TableCell>
              <TableCell
                columnSpan={3}
                sx={{
                  textAlign: "center",
                  fontSize: "16px",
                  fontWeight: "500px",
                }}>
                Action
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell>
                  <Typography sx={{ display: "flex", textAlign: "center" }}>
                    <Avatar src={appointment.avatarSrc} alt="User Image" />
                    <Typography
                      variant="body1"
                      sx={{ margin: "10px 10px 10px 10px" }}>
                      {appointment.patientName}
                    </Typography>
                  </Typography>
                </TableCell>
                {/* <TableCell>{appointment.patientId}</TableCell> */}
                <TableCell variant="body1">
                  <Typography>
                    {appointment.apptDate}
                    {appointment.apptTime}
                  </Typography>
                </TableCell>
                {/* <TableCell>{appointment.apptTime}</TableCell> */}
                {/* <TableCell>{appointment.purpose}</TableCell> */}
                <TableCell variant="body1">
                  <Typography>{appointment.type}</Typography>
                </TableCell>
                <TableCell variant="body1">
                  <Typography>{appointment.paidAmount}</Typography>
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={4}>
                    <Button
                      sx={{
                        color: "#1DBBBE",
                        backgroundColor: "#E0F6F6",
                        "&:hover": {
                          backgroundColor: "#E0F6F6",
                        },
                      }}>
                      <VisibilityIcon /> View
                    </Button>
                    <Button
                      sx={{
                        color: "#8DB848",
                        backgroundColor: "#E2F6ED",
                        "&:hover": {
                          backgroundColor: "#E2F6ED",
                        },
                      }}>
                      <CheckIcon /> Accept
                    </Button>
                    <Button
                      sx={{
                        color: "#EC6C3C",
                        backgroundColor: "#FDE2E7",
                        "&:hover": {
                          backgroundColor: "#FDE2E7",
                        },
                      }}>
                      <CloseIcon /> Cancel
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
export default CaBooking;
