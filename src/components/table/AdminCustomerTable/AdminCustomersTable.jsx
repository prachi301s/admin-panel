import React from "react";

import IconButton from "@mui/material/IconButton";
import { Icon } from "@iconify/react";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useQueryClient } from "react-query";

import { useTheme } from "@emotion/react";
import { useState } from "react";
import TableDataGrid from "../../common/customtabels/TableDataGrid";
import AddCategoryModal from "../../modal/AddCategoryModal";
import AddCustomerModal from "../../modal/AddCustomerModal";
// import { useAllCustomer } from "../../../../src/hooks/customer/useCustomer";
// import { useCustomerById } from "../../../../src/hooks/customer/useCustomerById";
const AdminCustomersTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [rows, setRows] = useState([]);
  const theme = useTheme();

  console.log(rows)
  
  const queryClient = useQueryClient();
  const handleAddCustomer = () => {
    setIsModalVisible(true);
  };


  useEffect(() => {
    let customerData=JSON.parse(localStorage.getItem('customer'))||[];
    console.log(customerData);
    if (customerData) {
      setRows(customerData);
    }
  }, []);
  function getRowId(row) {
    return row.customerId;
  }
  

  
    // console.log('data.....', data);

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
  // const renderFieldValue = (field, value) => {
  //   if (field === "createdAt" && value !== null) {
  //     const date = new Date(value);
  //     return date.toLocaleDateString();
  //   } else if (value === null) {
  //     return "-";
  //   } else {
  //     return value;
  //   }
  // };

  const columns = [
    {
      field: "customerId",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          ID
        </Typography>
      ),
      sortable: true,
      width: 50,
      align: "left",
      // renderCell: (params) => renderFieldValue(params.value),
      renderCell:getRowId()
    },
    {
      field: "customerName",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          Name
        </Typography>
      ),
      sortable: false,
      width: 80,
      align: "left",
      renderCell: (params) => {console.log(params), renderFieldValue(params.value)}
    },
    {
      field: "customerEmail",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          Email
        </Typography>
      ),
      sortable: false,
      width: 150,
      align: "left",
      renderCell: (params) => {console.log(params), renderFieldValue(params.value)},
    },
    {
      field: "customerPhone",
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
      field: "customerCreateDate",
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
      field: "actions",
      headerName: <Typography variant="subtitle1">Actions</Typography>,
      width: 100,
      align: "left",
      renderCell: (params) => (
        <>
          <IconButton
            style={{ border: "none", color: theme.palette.secondary.dark }}
            aria-label="view"
            onClick={() => handleView(params.row.id)}
          >
            <Icon icon="solar:eye-bold" />
          </IconButton>
          <IconButton
            style={{ border: "none", color: theme.palette.secondary.dark }}
            aria-label="edit"
            // onClick={() => handleEdit(params.row.id)}
          >
            {/* <Icon icon={mdiEditBox} /> */}
          </IconButton>
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
  // const rows = [
  //   { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  //   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  //   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  //   { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  //   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  //   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  //   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  //   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  //   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  // ];

  return (
    <>
      <TableDataGrid
      
        rows={rows}
        tableTitle={"All Customers"}
        rowHeight={36}
        columns={columns}
        icon={"ic:baseline-plus"}
        pageSize={5}
        checkboxSelection
        disableRowSelectionOnClick
        isSearch={true}
        isAdd={true}
        buttonOnClick={handleAddCustomer}
        buttonTitle={"Add Customer"}
        // handleSearch={}
      />
       {isModalVisible && (
        <AddCustomerModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}
    </>
  );
};

export default AdminCustomersTable;
