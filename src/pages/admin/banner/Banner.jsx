import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import { Icon } from "@iconify/react";
import {
  Button,
  Card,
  Container,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";

import { useState } from "react";

import { useEffect } from "react";
import { useQueryClient } from "react-query";

import { useTheme } from "@mui/material";

import Iconify from "../../../../src/components/iconify/index";
// import Updates from "./Updates";

// import { useEditBanner } from "src/hooks/banners/useEditBanner";
import { useBanner } from "../../../../src/hooks/banners/useBanner";
import useDeleteBanner from "../../../../src/hooks/banners/useDeleteBanner";
import { useEditBanner } from "../../../../src/hooks/banners/useEditBanner";
import UpdateBannerModal from "../../../components/modal/UpdateBannerModal"

const Banner = () => {
  const [rows, setRows] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const { data } = useBanner();
  const { message, success, mutate: delBanners } = useDeleteBanner();
  const { mutate: getEditBanner } = useEditBanner();
  const queryClient = useQueryClient();

  // console.log(data);

  const theme = useTheme();

  useEffect(() => {
    if (data?.data?.data) {
      setRows(data?.data?.data);
    }
  }, [data?.data?.data]);

  const handleEdit = (id) => {
    setIsEditMode(true);
    setIsModalVisible(true);
  };

  const handleDelete = (id) => {
    delBanners(id, {
      onSuccess: () => {
        setRows(rows.filter((row) => row.id !== id));
        if (message && message.success) {
          message.success(`Item with ID ${id} has been deleted`);
        }
        queryClient.invalidateQueries("all_banners");
      },
      onError: (error) => {
        console.error("Error deleting feature:", error);
        if (message && message.error) {
          message.error("Failed to delete feature");
        }
      },
    });
  };

  // const handleCreate = () => {
  //   console.log('hello');
  //   setIsModalVisible(true);
  // };
  const handleCreate = () => {
    setIsEditMode(false);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",

      width: 150,
      align: "left",
    },

    {
      field: "banner_image",
      headerName: "EVENT IMAGE",
      width: 200,
      editable: true,
      align: "left",
      renderCell: (params) => {
        const imageUrl = import.meta.env.VITE_REACT_BANNER_IMAGES_PATHS;
        const imageSize = 30;

        if (params.value) {
          let imageURL;
          if (params.value.startsWith("https://")) {
            imageURL = params.value;
          } else {
            imageURL = `${imageUrl}/${params.value}`;
          }

          console.log(imageURL)
          return (
            <img
              src={imageURL}
              alt={params.value}
              style={{ width: imageSize, height: "auto" }}
            />
          );
        } else {
          return <img src="--" alt="No Image" />;
        }
      },
    },

    {
      field: "event_name",
      headerName: "EVENT NAME",
      width: 200,
      align: "left",
      valueGetter: (params) => params.row.event_name.toUpperCase(),
    },
    {
      field: "createdAt",
      headerName: "EVENT DATE ",
      width: 200,
      editable: true,
      align: "left",
      renderCell: (params) => {
        const createdAtDate = new Date(params.value);
        const formattedDate = createdAtDate.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
        return <>{formattedDate}</>;
      },
    },
    // {
    //   field: 'event_status',

    //   headerName: 'Event Status',

    //   sortable: false,
    //   width: 150,
    //   align: 'center',
    //   renderCell: (params) => <>{params.status || ' --'}</>,
    // },
    {
      field: "actions",
      headerName: "ACTIONS",
      width: 100,
      align: "left",

      renderCell: (params) => (
        <>
          {" "}
          <IconButton
            style={{ border: "none" }}
            color="primary"
            aria-label="edit"
            onClick={() => handleEdit(params.row.id)}
          >
            <Icon icon="line-md:edit-twotone-full" />
          </IconButton>
          <IconButton
            color="error"
            aria-label="delete"
            onClick={() => handleDelete(params.row.id)}
          >
            <Icon icon="mi:delete" />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <>
      <Box
        sx={{
          p: "1rem",
          bgcolor: "#FFFFFF",
          display: "flex",
          justifyContent: "space-between",
          mb: "1rem",
          color: theme.palette.primary.main,
        }}
      >
        <Typography variant="h3">BANNER</Typography>
        <Tooltip title="Create New Banner">
          <Button
            variant="outlined"
            onClick={handleCreate}
            sx={{ width: "8rem", height: "2rem" }}
          >
            <Typography variant="subtitle1">Add Banner</Typography>
          </Button>
        </Tooltip>
      </Box>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <DataGrid
          rows={rows}
          rowHeight={36}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Grid>

      {/* <Button sx={{width:'15rem', bgcolor:'orange',color:'inherit',  display:'flex', justifyContent:'space-between', pl:'10px'}}>
         <Typography variant='h4' >  View All</Typography>
         <Iconify icon="gravity-ui:arrow-right" width="24px" height="24px"  />
         </Button> */}

      {/* {isModalVisible && (
            <Updates isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
          )} */}
      {isModalVisible && (
        <UpdateBannerModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          isEditMode={isEditMode}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};

export default Banner;

// export default function BannerView() {
//   const [rows, setRows] = useState([]);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [isEditMode, setIsEditMode] = useState(false);

//   const { data } = useBanner();
//   const { message, success, mutate: delBanners } = useDeleteBanner();
//   const { mutate: getEditBanner } = useEditBanner();
//   const queryClient = useQueryClient();

//   // console.log(data);

//   const theme = useTheme();

//   useEffect(() => {
//     if (data?.data?.data) {
//       setRows(data?.data?.data);
//     }
//   }, [data?.data?.data]);

//   const handleEdit = (id) => {
//     setIsEditMode(true);
//     setIsModalVisible(true);
//   };

//   const handleDelete = (id) => {
//     delBanners(id, {
//       onSuccess: () => {
//         setRows(rows.filter((row) => row.id !== id));
//         if (message && message.success) {
//           message.success(`Item with ID ${id} has been deleted`);
//         }
//         queryClient.invalidateQueries('all_banners');
//       },
//       onError: (error) => {
//         console.error('Error deleting feature:', error);
//         if (message && message.error) {
//           message.error('Failed to delete feature');
//         }
//       },
//     });
//   };

//   // const handleCreate = () => {
//   //   console.log('hello');
//   //   setIsModalVisible(true);
//   // };
//   const handleCreate = () => {
//     setIsEditMode(false);
//     setIsModalVisible(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalVisible(false);
//   };

//   const columns = [
//     {
//       field: 'id',
//       headerName: 'ID',

//       width: 150,
//       align: 'left',
//     },

//     {
//       field: 'banner_image',
//       headerName: 'EVENT IMAGE',
//       width: 200,
//       editable: true,
//       align: 'left',
//       renderCell: (params) => {
//         const imageUrl = import.meta.env.VITE_REACT_BANNER_IMAGES_PATHS;
//         const imageSize = 30;

//         if (params.value) {
//           let imageURL;
//           if (params.value.startsWith('https://')) {
//             imageURL = params.value;
//           } else {
//             imageURL = `${imageUrl}/${params.value}`;
//           }
//           return (
//             <img src={imageURL} alt={params.value} style={{ width: imageSize, height: 'auto' }} />
//           );
//         } else {
//           return <img src="--" alt="No Image" />;
//         }
//       },
//     },

//     {
//       field: 'event_name',
//       headerName: 'EVENT NAME',
//       width: 200,
//       align: 'left',
//       valueGetter: (params) => params.row.event_name.toUpperCase(),
//     },
//     {
//       field: 'createdAt',
//       headerName: 'EVENT DATE ',
//       width: 200,
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
//     // {
//     //   field: 'event_status',

//     //   headerName: 'Event Status',

//     //   sortable: false,
//     //   width: 150,
//     //   align: 'center',
//     //   renderCell: (params) => <>{params.status || ' --'}</>,
//     // },
//     {
//       field: 'actions',
//       headerName: 'ACTIONS',
//       width: 100,
//       align: 'left',

//       renderCell: (params) => (
//         <>
//           {' '}
//           <IconButton
//             style={{ border: 'none' }}
//             color="primary"
//             aria-label="edit"
//             onClick={() => handleEdit(params.row.id)}
//           >
//             <Icon icon="line-md:edit-twotone-full" />
//           </IconButton>
//           <IconButton color="error" aria-label="delete" onClick={() => handleDelete(params.row.id)}>
//             <Icon icon="mi:delete" />
//           </IconButton>
//         </>
//       ),
//     },
//   ];

// }
