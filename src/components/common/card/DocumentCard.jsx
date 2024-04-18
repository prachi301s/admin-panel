import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
  Divider,
  Box,
  useTheme,
} from "@mui/material";

const DocumentApprovalFormCard = () => {
  const [membership, setMembership] = useState("");
  const [practice, setPractice] = useState("");
  const [pan, setPan] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [passbook, setPassbook] = useState("");

  const handleApprove = (documentType) => {
    // Handle approve action for the given document type
    console.log(`Approved ${documentType}`);
  };

  const handleReject = (documentType) => {
    // Handle reject action for the given document type
    console.log(`Rejected ${documentType}`);
  };

  const theme = useTheme();

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Documents
        </Typography>
        <Divider sx={{ margin: "30px 0px 30px 0px" }} />
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6} md={4}>
            <Typography variant="subtitle2">
              Certificate of Membership
            </Typography>
            <TextField
              required
              // hiddenLabel
              label="Certificate of Membership"
              variant="outlined"
              value={membership}
              onChange={(e) => setMembership(e.target.value)}
              fullWidth
              size="small"
              sx={{ backgroundColor: "#EFEFEF" }}
            />
            <Box sx={{ marginTop: "20px" }}>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: theme.palette.success.dark,
                  color: theme.palette.success.darker,
                  borderColor: theme.palette.success.darker,
                  width: "150px",
                }}
                size="small"
                onClick={() => handleApprove("Certificate of Membership")}>
                Approve
              </Button>
              <Button
                variant="outlined"
                color="error"
                size="small"
                onClick={() => handleReject("Certificate of Membership")}
                sx={{
                  backgroundColor: theme.palette.error.dark,
                  color: theme.palette.error.darker,
                  borderColor: theme.palette.error.darker,
                  marginLeft: "15px",
                  width: "150px",
                }}>
                Reject
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} md={4}>
            <Typography variant="subtitle2">Certificate of Practice</Typography>
            <TextField
              label="Certificate of Practice"
              variant="outlined"
              fullWidth
              size="small"
              sx={{ backgroundColor: "#EFEFEF" }}
              value={practice}
              onChange={(e) => setPractice(e.target.value)}
            />
            <Box sx={{ marginTop: "20px" }}>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: theme.palette.success.dark,
                  color: theme.palette.success.darker,
                  borderColor: theme.palette.success.darker,
                  width: "150px",
                }}
                size="small"
                onClick={() => handleApprove("Certificate of Practice")}>
                Approve
              </Button>
              <Button
                variant="outlined"
                color="error"
                size="small"
                onClick={() => handleReject("Certificate of Practice")}
                sx={{
                  backgroundColor: theme.palette.error.dark,
                  color: theme.palette.error.darker,
                  borderColor: theme.palette.error.darker,
                  marginLeft: "15px",
                  width: "150px",
                }}>
                Reject
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} md={4}>
            <Typography variant="subtitle2">PAN Card Image</Typography>
            <TextField
              label="PAN Card Image"
              variant="outlined"
              fullWidth
              size="small"
              sx={{ backgroundColor: "#EFEFEF" }}
              value={pan}
              onChange={(e) => setPan(e.target.value)}
            />
            <Box sx={{ marginTop: "20px" }}>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: theme.palette.success.dark,
                  color: theme.palette.success.darker,
                  borderColor: theme.palette.success.darker,
                  width: "150px",
                }}
                size="small"
                onClick={() => handleApprove("PAN Card Image")}>
                Approve
              </Button>
              <Button
                variant="outlined"
                color="error"
                size="small"
                onClick={() => handleReject("PAN Card Image")}
                sx={{
                  backgroundColor: theme.palette.error.dark,
                  color: theme.palette.error.darker,
                  borderColor: theme.palette.error.darker,
                  marginLeft: "15px",
                  width: "150px",
                }}>
                Reject
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} md={4}>
            <Typography variant="subtitle2">Aadhar Image</Typography>
            <TextField
              label="Aadhar Image"
              variant="outlined"
              fullWidth
              size="small"
              sx={{ backgroundColor: "#EFEFEF" }}
              value={aadhar}
              onChange={(e) => setAadhar(e.target.value)}
            />
            <Box sx={{ marginTop: "20px" }}>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: theme.palette.success.dark,
                  color: theme.palette.success.darker,
                  borderColor: theme.palette.success.darker,
                  width: "150px",
                }}
                size="small"
                onClick={() => handleApprove("Aadhar Image")}>
                Approve
              </Button>
              <Button
                variant="outlined"
                color="error"
                size="small"
                onClick={() => handleReject("Aadhar Image")}
                sx={{
                  backgroundColor: theme.palette.error.dark,
                  color: theme.palette.error.darker,
                  borderColor: theme.palette.error.darker,
                  marginLeft: "15px",
                  width: "150px",
                }}>
                Reject
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} md={4}>
            <Typography variant="subtitle2">Passbook Image</Typography>
            <TextField
              label="Passbook Image"
              variant="outlined"
              fullWidth
              size="small"
              sx={{ backgroundColor: "#EFEFEF" }}
              value={passbook}
              onChange={(e) => setPassbook(e.target.value)}
            />
            <Box sx={{ marginTop: "20px" }}>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: theme.palette.success.dark,
                  color: theme.palette.success.darker,
                  borderColor: theme.palette.success.darker,
                  width: "150px",
                }}
                size="small"
                onClick={() => handleApprove("Passbook Image")}>
                Approve
              </Button>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: theme.palette.error.dark,
                  color: theme.palette.error.darker,
                  borderColor: theme.palette.error.darker,
                  marginLeft: "15px",
                  width: "150px",
                }}
                size="small"
                onClick={() => handleReject("Passbook Image")}>
                Reject
              </Button>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default DocumentApprovalFormCard;
