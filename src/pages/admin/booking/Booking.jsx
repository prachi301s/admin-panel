import * as React from "react";
import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";
import { Icon } from "@iconify/react";
import {
  Badge,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from "@mui/material";

import { useState } from "react";
// import Updates from './Updates';

import { useTheme } from "@emotion/react";

import { CustomCard } from "../../../components/common/card/CustomCard";
import AdminBookingTable from "../../../components/table/AdminBookingTable";
// import img from "../../../../src/assets/assets/images/Frame12.png";
const Booking = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          alignItems: "center",
        }}
      >
        <Grid container >
          <Grid lg={4} sm={12} md={4}>
            <CustomCard/>
       
          </Grid>
          <Grid lg={4} sm={12} md={4}>
            <CustomCard/>
       
          </Grid>
          <Grid lg={4} sm={12} md={4}>
            <CustomCard/>
       
          </Grid>
             {/* <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // backgroundImage:`url("../../../../src/assets/assets/images/Frame12.png")`,
                // backgroundSize: "cover",
                // backgroundPosition: "center",
                // height:"100px",
                width:"100%",
                position:"relative"
              }}
            >
              <img
                width={"100%"}
                src="../../../../src/assets/assets/images/Frame12.png"
                style={{ position: "relative" }}
              />
              <Stack spacing={1} ml={5}>
              <Typography variant="body1" >
                Total Approved
              </Typography>
              <Typography variant="body1">
                50
              </Typography>
              </Stack>
             
            </Box> */}
          {/* <Grid lg={4}>
            <Box sx={{ position:"relative" }}>
              <img
                width={"100%"}
                src="../../../../src/assets/assets/images/Frame12.png"
                // style={{ position: "relative" }}
              />
              <Typography position="relative">hel</Typography>
            </Box>
            
          </Grid> */}
        </Grid>
      </Box>

      <Divider />
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          alignItems: "center",
          width: "100%",
          mt: "0.1rem",
          p: "0.1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // mb: "1rem",
            color: theme.palette.primary.main,
            alignItems: "start",
            width: "100%",
          }}
        >
          {/* Our Tab components here */}
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon position tabs example"
          >
            <Tab
              // icon={<Icon icon="fluent:chat-20-filled" />}
              // iconPosition="start"
              label={
                <Typography variant="subtitle1">Today's Booking</Typography>
              }
            />
            <Tab
              // icon={<Icon icon="ic:round-call" />}
              // iconPosition="start"
              label={
                <Typography variant="subtitle1">Yesterday's Booking</Typography>
              }
            />
          </Tabs>
        </Box>
      </Box>
      <Divider />

      <AdminBookingTable />
    </>
  );
};

export default Booking;

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { DataGrid } from '@mui/x-data-grid';
// import IconButton from '@mui/material/IconButton';
// import { Icon } from '@iconify/react';
// import { Badge, Button, Card, Container, Grid, Tooltip, Typography } from '@mui/material';

// import { useState } from 'react';
// // import Updates from './Updates';
// import { useBanner } from 'src/hooks/banners/useBanner';
// import { useEffect } from 'react';
// import { useQueryClient } from 'react-query';
// import useDeleteBanner from 'src/hooks/banners/useDeleteBanner';
// import { useBooking } from 'src/hooks/booking/useBooking';

// export default function BookingView() {
//   const [rows, setRows] = useState([]);
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const { data } = useBooking();
//   console.log(data);
//   // const { message,success, mutate: delBanners } = useDeleteBanner();
//   // const queryClient = useQueryClient()

//   // console.log(data);

//   useEffect(() => {
//     if (data?.data?.data) {
//       setRows(data?.data?.data);
//     }
//   }, [data?.data?.data]);
//   // //   console.log('data.....', data);

//   const handleEdit = (id) => {
//     console.log(`Editing row with ID ${id}`);
//   };

//   // const handleDelete = (id) => {
//   //   delBanners(id, {
//   //     onSuccess: () => {
//   //       setRows(rows.filter(row => row.id !== id));
//   //       if (message && message.success) {
//   //         message.success(`Item with ID ${id} has been deleted`);
//   //       }
//   //       queryClient.invalidateQueries('all_banners');
//   //     },
//   //     onError: (error) => {
//   //       console.error('Error deleting feature:', error);
//   //       if (message && message.error) {
//   //         message.error('Failed to delete feature');
//   //       }
//   //     },
//   //   });
//   // };

//   const handleCreate = () => {
//     console.log('hello');
//     setIsModalVisible(true);
//   };

//   const columns = [
//     {
//       field: 'id',
//       headerName: 'ID',
//       width: 50,
//       align: 'left',
//     },

//     {
//       field: 'cosulting_fee',
//       headerName: 'COSULTING FEE',

//       width: 150,

//       align: 'left',
//     },

//     {
//       field: 'service_image',
//       headerName: 'SERVICE IMAGE',
//       width: 150,
//       editable: true,
//       align: 'left',
//       //   renderCell: (params) => {
//       //     const imageUrl = import.meta.env.VITE_REACT_BANNER_IMAGES_PATHS;
//       //     const imageSize = 30;

//       //     if (params.value) {
//       //       let imageURL;
//       //       if (params.value.startsWith('https://')) {
//       //         imageURL = params.value;
//       //       } else {
//       //         imageURL = `${imageUrl}/${params.value}`;
//       //       }
//       //       return (
//       //         <img src={imageURL} alt={params.value} style={{ width: imageSize, height: 'auto' }} />
//       //       );
//       //     } else {
//       //       return <img src="--" alt="No Image" />;
//       //     }
//       //   },
//     },

//     {
//       field: 'total_amount',
//       headerName: 'TOTAL AMOUNT',
//       width: 150,
//       editable: true,
//       align: 'left',
//       renderCell: (params) => {
//         params.total_amount || '--';
//       },
//     },
//     // {
//     //   field: 'status',
//     //   headerName: 'STSTUS',
//     //   width: 150,
//     //   editable: true,
//     //   align: 'left',
//     //   valueGetter: params => params.row.status.toUpperCase(),
//     // },

//     {
//       field: 'status',
//       headerName: (
//         <Typography variant="body2" ml="2.8rem">
//           STATUS
//         </Typography>
//       ),
//       sortable: false,
//       width: 160,
//       align: 'center',
//       renderCell: (params) => {
//         const status = params.value;
//         let badgeColor;
//         let badgeContent;

//         if (status === 'pending') {
//           badgeColor = 'warning';
//           badgeContent = 'PENDING';
//         } else if (status === 'approved') {
//           badgeColor = 'success';
//           badgeContent = 'Approved';
//         } else if (status === 'rejected') {
//           badgeColor = 'error';
//           badgeContent = 'REJECTED';
//         } else {
//           badgeColor = 'default';
//           badgeContent = 'Unknown';
//         }

//         return (
//           <>
//             <Badge color={badgeColor} badgeContent={badgeContent} ></Badge>
//           </>
//         );
//       },
//     },

//     {
//       field: 'createdAt',
//       headerName: 'CREATE DATE',
//       width: 150,
//       editable: true,
//       align: 'left',
//       renderCell: (params) => {
//         const createdAtDate = new Date(params.value);
//         const formattedDate = createdAtDate.toLocaleDateString('en-US', {
//           day: '2-digit',
//           month: '2-digit',
//           year: 'numeric',
//         });
//         return <>{formattedDate}</>;
//       },
//     },

//     {
//       field: 'actions',
//       headerName: 'ACTIONS',
//       width: 100,
//       align: 'left',

//       renderCell: (params) => (
//         <>
//           {' '}
//           {/* <IconButton
//             style={{ border: 'none' }}
//             color="primary"
//             aria-label="edit"
//             // onClick={() => handleEdit(params.row.id)}
//           >
//             <Icon icon="line-md:edit-twotone-full" />
//           </IconButton> */}
//           <IconButton
//             color="error"
//             aria-label="delete"
//             // onClick={() => handleDelete(params.row.id)}
//           >
//             <Icon icon="mi:delete" />
//           </IconButton>
//         </>
//       ),
//     },
//   ];

//   return (
//     <>
//       <Box sx={{ p: '1rem', bgcolor: '#FFFFFF' }}>
//         <Tooltip title="Create">
//           <Button variant="outlined" onClick={handleCreate} sx={{ width: '7rem', height: '2rem' }}>
//             Add Booking
//           </Button>
//         </Tooltip>
//       </Box>

//       {/* <Grid item xs={12} > */}
//       <DataGrid
//         rows={rows}
//         rowHeight={36}
//         columns={columns}
//         pageSize={5}
//         checkboxSelection
//         disableRowSelectionOnClick
//       />
//       {/* </Grid> */}
//       {/* {isModalVisible && (
//         <Updates isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
//       )} */}
//     </>
//   );
// }
