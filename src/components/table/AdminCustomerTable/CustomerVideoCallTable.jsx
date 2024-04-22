import React from "react";
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
import { useEffect } from "react";
import { useQueryClient } from "react-query";

import { useTheme } from "@emotion/react";
import { useState } from "react";
import TableDataGrid from "../../common/customtabels/TableDataGrid";
// import { useAllBooking } from "../../../hooks/booking/useBooking";
const CustomerVideoCallTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [rows, setRows] = useState([]);
  // const { data } = useAllBooking();
  const theme = useTheme();
  // console.log(data);
  // const { message,success, mutate: delBanners } = useDeleteBanner();
  // const queryClient = useQueryClient()

  // console.log(data);

  // useEffect(() => {
  //   if (data?.data?.data) {
  //     setRows(data?.data?.data);
  //   }
  // }, [data?.data?.data]);
  // //   console.log('data.....', data);

  const handleEdit = (id) => {
    console.log(`Editing row with ID ${id}`);
  };

  // const handleDelete = (id) => {
  //   delBanners(id, {
  //     onSuccess: () => {
  //       setRows(rows.filter(row => row.id !== id));
  //       if (message && message.success) {
  //         message.success(`Item with ID ${id} has been deleted`);
  //       }
  //       queryClient.invalidateQueries('all_banners');
  //     },
  //     onError: (error) => {
  //       console.error('Error deleting feature:', error);
  //       if (message && message.error) {
  //         message.error('Failed to delete feature');
  //       }
  //     },
  //   });
  // };

  const handleCreate = () => {
    console.log("hello");
    setIsModalVisible(true);
  };

  const columns = [
    {
      field: "customer",
      headerName: <Typography variant="subtitle1">Customer</Typography>,
      width: 100,
      align: "left",
      // valueGetter: (params) => params.row.category_name.toUpperCase(),
    },
    {
      field: "date",
      headerName: <Typography variant="subtitle1">Date</Typography>,
      sortable: false,
      width: 100,
      align: "left",
    },
    {
      field: "start_time",
      headerName: <Typography variant="subtitle1">Start Time</Typography>,
      sortable: false,
      width: 120,
      align: "left",
    },
    {
      field: "end_time",
      headerName: <Typography variant="subtitle1">End Time</Typography>,
      // headerName: 'ID',
      width: 120,
      align: "left",
    },
    {
      field: "deducted_amount",
      headerName: <Typography variant="subtitle1">Deducted Amount</Typography>,
      // headerName: 'ID',
      width: 150,
      align: "left",
    },
    {
      field: "duration",
      headerName: <Typography variant="subtitle1">Duration</Typography>,
      // headerName: 'ID',
      width: 100,
      align: "left",
    },

    {
      field: "status",
      headerName: (
        <Typography variant="subtitle1" ml="2.8rem">
          Status
        </Typography>
      ),
      sortable: false,
      width: 180,
      align: "center",
      renderCell: (params) => {
        const status = params.value;
        return (
          <>
            {status ? (
              <Badge color="success" badgeContent="APPROVED"></Badge>
            ) : (
              <Badge color="error" badgeContent="REJECTED"></Badge>
            )}
          </>
        );
      },
    },

    {
      field: "view",
      headerName: (
        <Typography variant="subtitle1" sx={{ ml: "1rem" }}>
          View
        </Typography>
      ),
      // headerName: 'ACTIONS',
      width: 180,
      align: "left",

      renderCell: (params) => (
        <>
          {" "}
          <IconButton
            style={{ border: "none", color: theme.palette.secondary.dark }}
            aria-label="view"
            // onClick={() => handleEdit(params.row.id)}
          >
            <Icon icon="solar:eye-bold" />
          </IconButton>
          {/* <IconButton
            style={{ border: "none", color: theme.palette.secondary.dark }}
            aria-label="edit"
            // onClick={() => handleEdit(params.row.id)}
          >
            <Icon icon="mdi:edit-box" />
          </IconButton>
          <IconButton
            aria-label="delete"
            // onClick={() => handleDelete(params.row.id)}
          >
            <Icon icon="mdi:delete" />
          </IconButton> */}
        </>
      ),
    },
  ];
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  return (
    <>
      <TableDataGrid
        rows={rows}
        tableTitle={"Call Details"}
        rowHeight={36}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableRowSelectionOnClick
        isSearch={true}
        isAdd={true}
        buttonTitle={"Download Excel"}
        // handleSearch={}
      />
    </>
  );
};

export default CustomerVideoCallTable;
