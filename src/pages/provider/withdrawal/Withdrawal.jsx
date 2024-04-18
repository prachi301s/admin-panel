// import React, { useState } from 'react';

// import { Button, Divider, TextField, Container, FormLabel, Typography } from '@mui/material';

// export default function Withdrawal() {
//   const [amount, setAmount] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Submitted with amount:', amount);
//   };
//   return (
//     <Container
//       maxWidth="xl"
//       sx={{ backgroundColor: 'white', padding: '50px', borderRadius: '15px', boxShadow: '5' }}
//     >
//       <Typography variant="h4" sx={{ marginBottom: '20px' }}>
//         Withdrawal Request
//       </Typography>
//       <Divider />
//       <form onSubmit={handleSubmit} style={{ marginTop: '50px' }}>
//         <FormLabel>Your Wallet Amount is :{amount}</FormLabel>
//         <TextField
//           label="Enter Amount Here"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />
//         <Button
//           variant="contained"
//           sx={{
//             borderRadius: '15x',
//             backgroundColor: '#5BE0FE',
//             '&:hover': {
//               backgroundColor: '#5BE0FE',
//             },
//           }}
//         >
//           Submit Request
//         </Button>
//       </form>
//     </Container>
//   );
// }

import  { useState } from 'react';
import axios from 'axios';
import { Button, Divider, TextField, Container, FormLabel, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function Withdrawal() {
  const [amount, setAmount] = useState('');
  const [walletAmount, setWalletAmount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send withdrawal request to the API
      const response = await axios.post('your_withdrawal_api_endpoint_here', {
        amount: amount,
      });
      console.log('Withdrawal request submitted successfully:', response.data);
      // Update wallet amount if needed
      setWalletAmount(response.data.walletAmount);
    } catch (error) {
      console.error('Error submitting withdrawal request:', error);
    }
  };

  return (
    <Container
      maxWidth="xl"
      sx={{ backgroundColor: 'white', padding: '50px', borderRadius: '15px', boxShadow: '5' }}
    >
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Withdrawal Request
      </Typography>
      <Divider />
      <form onSubmit={handleSubmit} style={{ marginTop: '50px' }}>
        <FormLabel>Your Wallet Amount is: {walletAmount}</FormLabel>
        <TextField
          label="Enter Amount Here"
          variant="outlined"
          fullWidth
          margin="normal"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            borderRadius: '15x',
            backgroundColor: '#5BE0FE',
            '&:hover': {
              backgroundColor: '#5BE0FE',
            },
          }}
        >
          Submit Request
        </Button>
      </form>
    </Container>
  );
}
