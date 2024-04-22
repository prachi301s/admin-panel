import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import { Icon } from '@iconify/react';
import { Badge, Button, Card, Container, Grid, Tooltip, Typography, useTheme } from '@mui/material';

import { useState } from 'react';
import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { Navigate, useNavigate } from 'react-router-dom';
// import { useGetAllCategory } from '../../../../hooks/categories/useGetAllCategory.js';


export default function CaView() {
  const [rows, setRows] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [isEditMode, setIsEditMode] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  // const { data } = useGetAllCategory();
  // const { message,success, mutate: delBanners } = useDeleteBanner();
  // const {  mutate: getEditBanner } = useEditBanner();
  const queryClient = useQueryClient();

  // console.log('datataat', data);

  // useEffect(() => {
  //   if (data?.data?.data) {
  //     setRows(data?.data?.data);
  //   }
  // }, [data?.data?.data]);

  const handleView = () => {
    navigate('/admin/ca-profile-view');
  };

  const handleEdit = (id) => {
    // setIsEditMode(true);
    setIsModalVisible(true);
  };

  const handleDelete = (id) => {
    delBanners(id, {
      onSuccess: () => {
        setRows(rows.filter((row) => row.id !== id));
        if (message && message.success) {
          message.success(`Item with ID ${id} has been deleted`);
        }
        queryClient.invalidateQueries('all_banners');
      },
      onError: (error) => {
        console.error('Error deleting feature:', error);
        if (message && message.error) {
          message.error('Failed to delete feature');
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
      field: 'id',
      headerName: (
        <Typography variant="subtitle1">
        ID
        </Typography>
      ),
      width: 100,
      align: 'left',
    },

    {
      field: 'image',
      headerName: (
        <Typography variant="subtitle1">
        Images
        </Typography>
      ),
      width: 150,
      editable: true,
      align: 'left',
      renderCell: (params) => {
        const imageUrl = import.meta.env.VITE_REACT_BANNER_IMAGES_PATHS;
        const imageSize = 30;

        if (params.value) {
          let imageURL;
          if (params.value.startsWith('https://')) {
            imageURL = params.value;
          } else {
            imageURL = `${imageUrl}/${params.value}`;
          }
          return (
            <img src={imageURL} alt={params.value} style={{ width: imageSize, height: 'auto' }} />
          );
        } else {
          return <img src="--" alt="No Image" />;
        }
      },
    },

    {
      field: 'category_name',
      headerName: (
        <Typography variant="subtitle1">
       Mobile
        </Typography>
      ),
      width: 160,
      align: 'left',
      valueGetter: (params) => params.row.category_name.toUpperCase(),
    },
    {
      field: 'createdAt',
      headerName: (
        <Typography variant="subtitle1">
         Date
        </Typography>
      ),
      width: 160,
      editable: true,
      align: 'left',
      renderCell: (params) => {
        const createdAtDate = new Date(params.value);
        const formattedDate = createdAtDate.toLocaleDateString('en-US', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        });
        return <>{formattedDate}</>;
      },
    },
    {
      field: 'status',
      headerName: (
        <Typography variant="subtitle1" ml="2.8rem">
          Status
        </Typography>
      ),
      sortable: false,
      width: 160,
      align: 'center',
      renderCell: (params) => {
        const status = params.value;
        return (
          <>
            {status ? (
              <Badge color="success" badgeContent="Active"></Badge>
            ) : (
              <Badge color="error" badgeContent="Inactive"></Badge>
            )}
          </>
        );
      },
    },

    {
      field: 'color',
      headerName: (
        <Typography variant="subtitle1">
        Color
        </Typography>
      ),
      sortable: false,
      width: 140,
      align: 'left',
      // renderCell: (params) => <>{params.color || ' --'}</>,
    },
    {
      field: 'actions',
      headerName: (
        <Typography variant="subtitle1" sx={{ ml: '1rem' }}>
          Actions
        </Typography>
      ),
      // headerName: 'ACTIONS',
      width: 180,
      align: 'left',

      renderCell: (params) => (
        <>
          {' '}
          <IconButton
            style={{ border: 'none', color: theme.palette.secondary.dark }}
            aria-label="view"
            onClick={handleView}
          >
            <Icon icon="solar:eye-bold" />
          </IconButton>
          <IconButton
            style={{ border: 'none', color: theme.palette.secondary.dark }}
            aria-label="edit"
            onClick={() => handleEdit(params.row.id)}
          >
            <Icon icon="mdi:edit-box" />
          </IconButton>
          <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
            <Icon icon="mdi:delete" />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <>
      <Box
        sx={{
          p: '1rem',
          bgcolor: '#FFFFFF',
          display: 'flex',
          justifyContent: 'space-between',
          // mb: '1rem',
          color: theme.palette.primary.main,
        }}
      >
        <Typography variant="h3">CATEGORY</Typography>
        <Tooltip title="Create New Category">
          <Button variant="outlined" onClick={handleCreate} sx={{ width: '8rem', height: '2rem' }}>
            <Typography variant="subtitle1">Add Category</Typography>
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
      {/* {isModalVisible && (
        <Updates isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
      )} */}
      {/* {isModalVisible && (
        <Updates
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          isEditMode={isEditMode}
          handleCloseModal={handleCloseModal}
        />
      )} */}
    </>
  );
}
