import React from "react";

import IconButton from "@mui/material/IconButton";
import { Icon } from "@iconify/react";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useQueryClient } from "react-query";

import { useTheme } from "@emotion/react";
import { useState } from "react";
import TableDataGrid from "../../common/customtabels/TableDataGrid";
// import { useAllCustomer } from "../../../../src/hooks/customer/useCustomer";
// import { useCustomerById } from "../../../../src/hooks/customer/useCustomerById";
const AdminCustomersTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [rows, setRows] = useState([]);
  // const { data } = useAllCustomer();
  const { mutate: viewCustomerById } = useCustomerById();
  const theme = useTheme();
  // console.log(data);
  // const { message, success, mutate: delBanners } = useDeleteBanner();
  const queryClient = useQueryClient();

  console.log(data);

  // useEffect(() => {
  //   if (data?.data?.data?.rows) {
  //     setRows(data?.data?.data?.rows);
  //   }
  // }, [data?.data?.data?.rows]);
  //   console.log('data.....', data);

  // const handleView = (id) => {
  //   console.log(`Editing row with ID ${id}`);
  //   const customerData = {
  //     customer_id: id,
  //   };
  //   console.log(customerData);

  //   {
  //     viewCustomerById(customerData, {
  //       onSuccess: (data) => {
  //         console.log("Update data successfully");
  //         queryClient.refetchQueries(["all_customer"]);
  //         console.log(data);
  //         // setEditingRecord(null);
  //       },
  //       onError: (err) => {
  //         console.log(err);
  //       },
  //     });
  //   }
  // };

  // const handleDelete = (id) => {
  //   delBanners(id, {
  //     onSuccess: () => {
  //       setRows(rows.filter((row) => row.id !== id));
  //       if (message && message.success) {
  //         message.success(`Item with ID ${id} has been deleted`);
  //       }
  //       queryClient.invalidateQueries("all_banners");
  //     },
  //     onError: (error) => {
  //       console.error("Error deleting feature:", error);
  //       if (message && message.error) {
  //         message.error("Failed to delete feature");
  //       }
  //     },
  //   });
  // };

  // const renderFieldValue = (value) => {
  //   return value !== null ? value : "-";
  // };
  const renderFieldValue = (field, value) => {
    if (field === "createdAt" && value !== null) {
      const date = new Date(value);
      return date.toLocaleDateString();
    } else if (value === null) {
      return "-";
    } else {
      return value;
    }
  };

  const columns = [
    {
      field: "id",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          ID
        </Typography>
      ),
      sortable: true,
      width: 50,
      align: "left",
      renderCell: (params) => renderFieldValue(params.value),
    },
    {
      field: "name",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          Name
        </Typography>
      ),
      sortable: false,
      width: 80,
      align: "left",
      renderCell: (params) => renderFieldValue(params.value),
    },
    {
      field: "email_id",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          Email
        </Typography>
      ),
      sortable: false,
      width: 150,
      align: "left",
      renderCell: (params) => renderFieldValue(params.value),
    },
    {
      field: "otp_verified_at",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          Verification
        </Typography>
      ),
      sortable: false,
      width: 120,
      align: "left",
      renderCell: (params) => renderFieldValue(params.value),
    },
    {
      field: "phone_no",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          Mobile
        </Typography>
      ),
      sortable: false,
      width: 120,
      align: "left",
      renderCell: (params) => renderFieldValue(params.value),
    },
    {
      field: "createdAt",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          Date
        </Typography>
      ),
      sortable: false,
      width: 150,
      align: "left",
      renderCell: (params) => renderFieldValue("createdAt", params.value),
    },

    {
      field: "last_seen",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          Last Seen
        </Typography>
      ),
      sortable: false,
      width: 120,
      align: "left",
      renderCell: (params) => renderFieldValue(params.value),
    },
    {
      field: "actions",
      headerName: <Typography variant="subtitle1">Actions</Typography>,
      width: 100,
      align: "left",
      renderCell: (params) => (
        <>
          <IconButton
            style={{ border: "none", color: theme.palette.secondary.dark }}
            aria-label="view"
            onClick={() => handleView(params.row.id)}>
            <Icon icon="solar:eye-bold" />
          </IconButton>
          {/* <IconButton
          style={{ border: 'none', color: theme.palette.secondary.dark }}
          aria-label="edit"
          // onClick={() => handleEdit(params.row.id)}
        >
          <Icon icon={mdiEditBox} />
        </IconButton> */}
          <IconButton
            aria-label="delete"
            // onClick={() => handleDelete(params.row.id)}
          >
            <Icon icon="mdi:delete" />
          </IconButton>
        </>
      ),
    },
  ];
  return (
    <>
      <TableDataGrid
        rows={rows}
        tableTitle={"All Customers"}
        rowHeight={36}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableRowSelectionOnClick
        isSearch={true}
        isAdd={true}
        buttonTitle={"Select"}
        // handleSearch={}
      />
    </>
  );
};

export default AdminCustomersTable;
