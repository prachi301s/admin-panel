import React, { forwardRef, useState } from "react";
import TableDataGrid from "../../common/customtabels/TableDataGrid";
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

// import { useQueryClient } from "react-query";

const WithdrawRequestTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // const [rows, setRows] = useState([]);
  // const [isCalendarVisible, setIsCalendarVisible] = useState(false);
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
  // const openCalender = () => {
  //   console.log("hello");
  //   setIsCalendarVisible(true);

  // };
  const columns = [
    {
      field: "id",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          expert name
        </Typography>
      ),
      sortable: true,
      width: 100,
      align: "left",
    },

    {
      field: "customer",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          service
        </Typography>
      ),
      sortable: false,
      width: 150,

      align: "left",
    },

    {
      field: "service_image",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          date & time
        </Typography>
      ),
      sortable: false,
      width: 120,

      align: "left",
      //   renderCell: (params) => {
      //     const imageUrl = import.meta.env.VITE_REACT_BANNER_IMAGES_PATHS;
      //     const imageSize = 30;

      //     if (params.value) {
      //       let imageURL;
      //       if (params.value.startsWith('https://')) {
      //         imageURL = params.value;
      //       } else {
      //         imageURL = `${imageUrl}/${params.value}`;
      //       }
      //       return (
      //         <img src={imageURL} alt={params.value} style={{ width: imageSize, height: 'auto' }} />
      //       );
      //     } else {
      //       return <img src="--" alt="No Image" />;
      //     }
      //   },
    },
    {
      // field: "customer",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          request money
        </Typography>
      ),
      sortable: false,
      width: 150,

      align: "left",
    },
    {
      field: "total_amount",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          total amount
        </Typography>
      ),
      sortable: false,
      width: 120,

      align: "left",
      renderCell: (params) => {
        params.total_amount || "--";
      },
    },
    // {
    //   field: 'status',
    //   headerName: 'STSTUS',
    //   width: 150,
    //   editable: true,
    //   align: 'left',
    //   valueGetter: params => params.row.status.toUpperCase(),
    // },

    {
      field: "status",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          request
        </Typography>
      ),
      sortable: false,
      width: 120,
      align: "center",
      renderCell: (params) => {
        const status = params.value;
        let badgeColor;
        let badgeContent;

        if (status === "pending") {
          badgeColor = "warning";
          badgeContent = "PENDING";
        } else if (status === "approved") {
          badgeColor = "success";
          badgeContent = "Approved";
        } else if (status === "rejected") {
          badgeColor = "error";
          badgeContent = "REJECTED";
        } else {
          badgeColor = "default";
          badgeContent = "Unknown";
        }
      },
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
  // const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
  //   <Button className="example-custom-input" onClick={onClick} ref={ref}>
  //     <Icon icon="simple-line-icons:calender" color="black" />
  //   </Button>
  // ));
  return (
    <>
      <TableDataGrid
        rows={rows}
        // tableTitle={"All Withdraws"}
        rowHeight={36}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableRowSelectionOnClick
        //  /   isSearch={true}
        // isIcon={true}
      />
    </>
  );
};

export default WithdrawRequestTable;
