import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import {
  TextField,
  Button,
  Grid,
  Container,
  Typography,
  Stack,
  Divider,
  Modal,
  Box,
  FormLabel,
} from '@mui/material';

import SendIcon from '@mui/icons-material/Send';
import { Icon } from '@iconify/react';

const boxStyle = {
  hight:"100%",
  width: '100%',
  bgcolor: 'background.paper',
 mt:"1rem"
};

export default function CaBankDetails() {
  const [formData, setFormData] = useState({
    accountHolderName: '',
    accountNumber: '',
    bankName: '',
    ifscCode: '',
    panCardNumber: '',
    adharCardNumber: '',
  });

  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setOpen(false);
  };

  return (
    <>
     
       <Box sx={boxStyle}>
          <Box sx={{padding:"3rem 4rem 1rem 5rem"}}><Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
            <Typography variant="h4">Bank Details</Typography>
            <Grid item xs={3}>
              <Button
                variant="outlined"
                startIcon={<Icon icon="tabler:edit" />}
                sx={{
                  width: '100px',
                }}
                onClick={() => setOpen(true)}
              >
                Edit
              </Button>
            </Grid>
          </Stack></Box>
          <Divider sx={{ marginBottom: '20px' }} />
          <Box sx={{pt:"1rem",pb:"8rem",pl:"5rem",pr:"5rem"}}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormLabel>Account Holder Name:</FormLabel>
                <TextField
                  variant="filled"
                      InputProps={{ disableUnderline: true }}
                  fullWidth
                  size='small'
                  name="accountHolderName"
                  value={formData.accountHolderName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLabel>Account Number:</FormLabel>
                <TextField
                  variant="filled"
                      InputProps={{ disableUnderline: true }}
                  fullWidth
                  size='small'
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLabel>Bank Name:</FormLabel>
                <TextField
                  variant="filled"
                      InputProps={{ disableUnderline: true }}
                  fullWidth
                  size='small'
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLabel>IFSC Code:</FormLabel>
                <TextField
                 variant="filled"
                      InputProps={{ disableUnderline: true }}
                  fullWidth
                  size='small'
                  name="ifscCode"
                  value={formData.ifscCode}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLabel>PAN Card Number:</FormLabel>
                <TextField
                   variant="filled"
                      InputProps={{ disableUnderline: true }}
                  fullWidth
                  size='small'
                  name="panCardNumber"
                  value={formData.panCardNumber}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLabel>Aadhar Card Number:</FormLabel>
                <TextField
                 variant="filled"
                      InputProps={{ disableUnderline: true }}
                  fullWidth
                  size='small'
                  name="adharCardNumber"
                  value={formData.adharCardNumber}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </form></Box>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="edit-bank-details-modal"
            aria-describedby="edit-bank-details-form"
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                minWidth: 300,
                maxWidth: 600,
                borderRadius: '10px',
              }}
            >
              <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography id="edit-bank-details-modal" variant="h3" component="h2" gutterBottom>
                  Edit Bank Details
                </Typography>
                <Button>
                  <CloseIcon />
                </Button>
              </Stack>
              <Divider sx={{ marginBottom: '20px' }} />
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <FormLabel>Account Holder Name:</FormLabel>
                    <TextField
                      variant="outlined"
                      fullWidth
                      size='small'
                      name="accountHolderName"
                      value={formData.accountHolderName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormLabel>Account Number:</FormLabel>
                    <TextField
                      variant="outlined"
                      fullWidth
                      size='small'
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormLabel>Bank Name:</FormLabel>
                    <TextField
                      variant="outlined"
                      fullWidth
                      size='small'
                      name="bankName"
                      value={formData.bankName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormLabel>IFSC Code:</FormLabel>
                    <TextField
                      variant="outlined"
                      fullWidth
                      size='small'
                      name="ifscCode"
                      value={formData.ifscCode}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormLabel>PAN Card Number:</FormLabel>
                    <TextField
                      variant="outlined"
                      fullWidth
                      size='small'
                      name="panCardNumber"
                      value={formData.panCardNumber}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormLabel>Aadhar Card Number:</FormLabel>
                    <TextField
                      variant="outlined"
                      fullWidth
                      size='small'
                      name="adharCardNumber"
                      value={formData.adharCardNumber}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <Grid container justifyContent="flex-end" spacing={2} sx={{ marginTop: '10px' }}>
                  <Grid item>
                    <Button
                      variant="outlined"
                      sx={{ backgroundColor: '#2E394B', color: 'white', width: '110px' }}
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{ width: '110px' }}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Modal>
       
    
       </Box>
    </>
  );
}
