// import { zodResolver } from '@hookform/resolvers/zod';
// import { Icon } from '@iconify/react';
// import {
//   Modal,
//   Box,
//   Typography,
//   Button,
//   Card,
//   IconButton,
//   Divider,
//   TextField,
// } from '@mui/material';
// import React from 'react';
// import { Controller, useForm } from 'react-hook-form';
// import { ForgotSchema } from 'src/form_schemas/auth_schemas/ForgotSchema';
// import { useForgotPassword } from 'src/hooks/auth/useForgotPassword';

// export default function ForgotPassword({ isModalVisible, setIsModalVisible, handleResetToken }) {
//   const { mutate, isLoading } = useForgotPassword();
  
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     setError,
//   } = useForm({
//     mode: 'onTouched',
//     resolver: zodResolver(ForgotSchema),
//   });

//   const handleFormSubmit = (data) => {
//     console.log('Form data:', data); 
//     let user = {
//       email: data.email,
//     };

//     mutate(user, {
//       onSuccess: (data) => {
//         console.log('Mutation success:', data);
//       },
//       onError: (errors) => {
//         console.error('Mutation error:', errors);
//       },
//     });
//   };

//   const handleClose = () => {
//     setIsModalVisible(false);
//   };

//   const handleForgotPassword = () => {
//     setIsModalVisible(false);
//   };

//   return (
//     <Modal
//       open={isModalVisible}
//       onClose={() => setIsModalVisible(false)}
//     >
//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           minHeight: '100vh',
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat',
//           backgroundPosition: 'left',
//         }}
//       >
//         <Card
//           sx={{ p: '3rem', borderRadius: '10px', width: '22rem', position: 'relative' }}
//           maskClosable={false}
//         >
//           <IconButton
//             onClick={() => setIsModalVisible(false)}
//             sx={{
//               position: 'absolute',
//               top: '8px',
//               right: '8px',
//               zIndex: 1,
//               color: '#F9921F',
//               color: '#F9921F',
//             }}
//           >
//             <Icon icon="system-uicons:close" />
//           </IconButton>

//           <Typography
//             variant="h4"
//             sx={{ textAlign: 'center', color: '#F9921F', marginBottom: '1rem' }}
//           >
//             FORGOT PASSWORD
//           </Typography>
//           <Divider />
//           <form onSubmit={handleSubmit(handleFormSubmit)}>
//             <Controller
//               name="email"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <TextField
//                   required
//                   id="email"
//                   name="email"
//                   label="Email address"
//                   size="small"
//                   sx={{ width: '16rem', mt: '1.5rem' }}
//                   {...field}
//                 />
//               )}
//             />
//             <Button
//               fullWidth
//               size="medium"
//               type="submit" 
//               variant="containedPrimary"
//               sx={{
//                 mt: '1.5rem',
//               }}
//             >
//               <Typography variant="h5">Send</Typography>
//             </Button>
            
//           </form>
//           <Button type='textSecondary' sx={{p:"0.5rem",ml:"8rem"}} >Reset Password</Button>
//         </Card>
//       </Box>
//     </Modal>
//   );
// }

