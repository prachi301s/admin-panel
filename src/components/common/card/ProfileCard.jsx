import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  TextField,
  Box,
  Stack,
} from "@mui/material";
import { AccountCircle, VerifiedUser } from "@mui/icons-material";
import VerifiedIcon from "@mui/icons-material/Verified";
import Person from "../../../assets/assets/Person.png";

const ProfileCard = () => {
  return (
    <Card
      sx={{
        background:
          "linear-gradient(131.67deg, #FE870A 26.45%, rgba(254, 135, 10, 0) 152.08%)",
        color: "white",
        borderRadius: "10px",
        margin: "20px",
      }}>
      <CardContent sx={{ textAlign: "center", alignItems: "center" }}>
        <Typography variant="subtitle1" fontSize="19.37px" gutterBottom>
          Customers Details
        </Typography>
        <Grid item>
          <Typography variant="body1">
            Verified
            <VerifiedIcon
              size="42px"
              sx={{ marginLeft: "10px", paddingTop: "10px" }}
            />
          </Typography>
          {/* <VerifiedUser color="primary" /> */}
        </Grid>
        <Grid>
          <Box
            sx={{
              border: "12px solid white",
              height: "150px",
              width: "150px",
              borderRadius: "50%",
              margin: "auto",
            }}>
            <img
              src={Person}
              alt=""
              style={{ height: "100%", width: "100%", borderRadius: "50%" }}
            />
          </Box>
        </Grid>
        <Typography variant="subtitle1" fontSize="19.37px" gutterBottom>
          Wade Warren
        </Typography>
        <Typography gutterBottom>
          {/* Date: {new Date().toDateString()} */}
          {new Date().toLocaleDateString()}
        </Typography>
        <Typography>User</Typography>
        <Stack
          sx={{
            textAlign: "left",
            padding: "0px 300px 0px 300px",
          }}>
          <Typography>Name</Typography>
          <TextField
            label="Wade Warren"
            disabled
            variant="outlined"
            margin="normal"
            size="small"
            sx={{
              backgroundColor: "#EFEFEF",
              borderRadius: "10px",
              border: "none",
            }}
          />
          <Typography>Phone</Typography>
          <TextField
            label="7777785962"
            disabled
            variant="outlined"
            margin="normal"
            size="small"
            sx={{ backgroundColor: "#EFEFEF", borderRadius: "10px" }}
          />
          <Typography>Email</Typography>
          <TextField
            label="albertflores01@gmail.com"
            disabled
            variant="outlined"
            margin="normal"
            size="small"
            sx={{ backgroundColor: "#EFEFEF", borderRadius: "10px" }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
