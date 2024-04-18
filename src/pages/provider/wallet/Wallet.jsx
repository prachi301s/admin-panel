import axios from "axios";
import { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
  CardContent,
  Card,
  Grid,
  Box,
} from "@mui/material";

import income from "../../../../src/assets/caassets/income.png";

// ----------------------------------------------------------------------
const Wallet = () => {
  const [walletAmount, setWalletAmount] = useState(0);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Fetch wallet amount from the API
    const fetchWalletAmount = async () => {
      try {
        const response = await axios.get("your_wallet_api_endpoint_here");
        setWalletAmount(response.data.walletAmount);
      } catch (error) {
        console.error("Error fetching wallet amount:", error);
      }
    };

    // Fetch payment data from the API
    const fetchPayments = async () => {
      try {
        const response = await axios.get("your_payments_api_endpoint_here");
        setPayments(response.data.payments);
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    };

    fetchWalletAmount();
    fetchPayments();
  }, []);

  return (
    <Container
      sx={{
        backgroundColor: "white",
        padding: "50px",
        borderRadius: "15px",
        boxShadow: "5",
      }}>
      <Grid item xs={12} sm={6} md={4} sx={{ marginBottom: "20px" }}>
        <Card sx={{ display: "flex", width: "300px", boxShadow: "5" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography variant="h5" component="div">
              ₹{walletAmount}
            </Typography>
            <Typography sx={{ mt: 2.5 }} color="text.secondary">
              Wallet Amount
            </Typography>
          </CardContent>
          <Box
            sx={{
              backgroundColor: "#5BE0FE",
              margin: "15px",
              borderRadius: "15px",
            }}>
            <img
              src={income}
              alt="Wallet"
              style={{
                width: 40,
                height: 40,
                textAlign: "center",
                margin: "20px 20px 20px 20px",
                borderRadius: "15px",
                backgroundColor: "#5BE0FE",
              }}
            />
          </Box>
        </Card>
      </Grid>
      <TableContainer component={Paper}>
        <Typography variant="h4" sx={{ padding: "20px 20px 20px 20px" }}>
          Payment Received
        </Typography>
        <Divider />
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="left">Amount</TableCell>
              <TableCell>From</TableCell>
              <TableCell>Amount Type</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments?.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.id}</TableCell>
                <TableCell align="right">{payment.amount}</TableCell>
                <TableCell>{payment.from}</TableCell>
                <TableCell>{payment.amountType}</TableCell>
                <TableCell>{payment.type}</TableCell>
                <TableCell>{payment.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
export default Wallet;
