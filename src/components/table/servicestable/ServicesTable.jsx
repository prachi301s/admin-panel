import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import { Icon } from "@iconify/react";
import {
  Badge,
  Button,
  Card,
  Container,
  Grid,
  Switch,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";

import { useState } from "react";
import { useEffect } from "react";
import { useQueryClient } from "react-query";

// import { secondary } from 'src/theme/palette';
import styled from "@emotion/styled";
// import { useGetAllCategory } from "../../../hooks/categories/useGetAllCategory";
import TableDataGrid from "../../../../src/components/common/customtabels/TableDataGrid";
import ServiceModal from "../../modal/ServicesModal";
// import { useAllServices } from "../../../../src/hooks/services/useServices";

const StyledSwitch = styled(Switch)({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#5D87FF",
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#5D87FF",
  },
});

const ServicesTable = () => {
  const [rows, setRows] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [isEditMode, setIsEditMode] = useState(false);
  // const [handleAdd, setHandleAdd] = useState();
  const theme = useTheme();

  const { data } = useAllServices();
  // const { message,success, mutate: delBanners } = useDeleteBanner();
  // const {  mutate: getEditBanner } = useEditBanner();
  const queryClient = useQueryClient();
  const handleAdd = () => {
    setIsModalVisible(true);
  };
  console.log("ServicesData::::", data);

  // useEffect(() => {
  //   if (data?.data?.data) {
  //     setRows(data?.data?.data);
  //   }
  // }, [data?.data?.data]);

  //   const handleEdit = (id) => {
  //     setIsEditMode(true);
  //     setIsModalVisible(true);
  //   };

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

  // const handleCreate = () => {
  //   console.log('hello');
  //   setIsModalVisible(true);
  // };
  const handleCreate = () => {
    // setIsEditMode(false);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  //   const columns = [
  //     {
  //       field: "id",
  //       headerName: (
  //         <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
  //           ID
  //         </Typography>
  //       ),
  //       sortable: true,
  //       width: 50,
  //       align: "left",
  //       //   renderCell: (params) => renderFieldValue(params.value),
  //     },
  //     {
  //       field: "serviceName",
  //       headerName: (
  //         <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
  //           Name
  //         </Typography>
  //       ),
  //       width: 160,
  //       align: "left",
  //       // valueGetter: (params) => params.row.category_name.toUpperCase(),
  //     },
  //     {
  //       field: "expert_fees",
  //       headerName: (
  //         <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
  //           Expert
  //         </Typography>
  //       ),
  //       sortable: false,
  //       width: 120,
  //       align: "left",
  //     },
  //     {
  //       field: "category",
  //       headerName: (
  //         <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
  //           Category
  //         </Typography>
  //       ),
  //       sortable: false,
  //       width: 160,
  //       align: "left",
  //     },
  //     {
  //       field: "price",
  //       headerName: (
  //         <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
  //           Price
  //         </Typography>
  //       ),
  //       // headerName: 'ID',
  //       width: 100,
  //       align: "left",
  //     },
  //     {
  //       field: "discount",
  //       headerName: (
  //         <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
  //           Discount
  //         </Typography>
  //       ),
  //       // headerName: 'ID',
  //       width: 130,
  //       align: "left",
  //     },

  //     {
  //       field: "status",
  //       headerName: (
  //         <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
  //           Status
  //         </Typography>
  //       ),
  //       sortable: false,
  //       width: 100,
  //       align: "center",
  //       renderCell: (params) => {
  //         const status = params.value;
  //         return (
  //           <>
  //             {status ? (
  //               <Badge color="success" badgeContent="APPROVED"></Badge>
  //             ) : (
  //               <Badge color="error" badgeContent="REJECTED"></Badge>
  //             )}
  //           </>
  //         );
  //       },
  //     },

  //     {
  //       field: "actions",
  //       headerName: (
  //         <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
  //           Actions
  //         </Typography>
  //       ),
  //       // headerName: 'ACTIONS',
  //       width: 150,
  //       align: "left",

  //       renderCell: (params) => (
  //         <>
  //           {" "}
  //           <IconButton
  //             style={{ border: "none", color: theme.palette.secondary.dark }}
  //             aria-label="view"
  //             // onClick={() => handleEdit(params.row.id)}
  //           >
  //             <Icon icon="solar:eye-bold" />
  //           </IconButton>
  //           <IconButton
  //             style={{ border: "none", color: theme.palette.secondary.dark }}
  //             aria-label="edit"
  //             // onClick={() => handleEdit(params.row.id)}
  //           >
  //             <Icon icon="mdi:edit-box" />
  //           </IconButton>
  //           <IconButton
  //             aria-label="delete"
  //             // onClick={() => handleDelete(params.row.id)}
  //           >
  //             <Icon icon="mdi:delete" />
  //           </IconButton>
  //         </>
  //       ),
  //     },
  //   ];

  const renderBadge = (status) => {
    let color, content;
    switch (status) {
      case "APPROVED":
        color = "success";
        content = "APPROVED";
        break;
      case "REJECTED":
        color = "error";
        content = "REJECTED";
        break;
      case "PENDING":
        color = "warning";
        content = "PENDING";
        break;
      default:
        color = "default";
        content = "UNKNOWN";
    }

    return <Badge color={color} badgeContent={content} />;
  };

  const renderCell = (field, value) => {
    if (value === null || value === undefined) {
      return "-";
    }

    return value;
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
      renderCell: (params) => renderCell(params.field, params.value),
    },
    {
      field: "serviceName",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          Name
        </Typography>
      ),
      width: 160,
      align: "left",
      renderCell: (params) => renderCell(params.field, params.value),
    },
    {
      field: "expert_fees",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          Expert
        </Typography>
      ),
      sortable: false,
      width: 120,
      align: "left",
      renderCell: (params) => renderCell(params.field, params.value),
    },
    {
      field: "category",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          Category
        </Typography>
      ),
      sortable: false,
      width: 160,
      align: "left",
      renderCell: (params) => renderCell(params.field, params.value),
    },
    {
      field: "price",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          Price
        </Typography>
      ),
      width: 100,
      align: "left",
      renderCell: (params) => renderCell(params.field, params.value),
    },
    {
      field: "discount",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          Discount
        </Typography>
      ),
      width: 130,
      align: "left",
      renderCell: (params) => renderCell(params.field, params.value),
    },
    {
      field: "status",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          Status
        </Typography>
      ),
      sortable: false,
      width: 100,
      align: "center",
      renderCell: (params) => renderBadge(params.value),
    },
    {
      field: "actions",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          Actions
        </Typography>
      ),
      width: 150,
      align: "left",
      renderCell: (params) => (
        <>
          <IconButton
            style={{ border: "none", color: theme.palette.secondary.dark }}
            aria-label="view"
            // onClick={() => handleEdit(params.row.id)}
          >
            <Icon icon="solar:eye-bold" />
          </IconButton>
          <IconButton
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
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TableDataGrid
          rows={rows}
          rowHeight={38}
          columns={columns}
          pageSize={5}
          // checkboxSelection
          // disableRowSelectionOnClick

          tableTitle={"Services"}
          buttonTitle={"Add service"}
          buttonOnClick={handleAdd}
          tooltipTitle={"Add Service"}
          // icon={}
          isSearch={false}
          // handleSearch={"handleSearch"}
          isAdd={true}
          // isIcon={"isIcon"}
          // iconClick={"iconClick"}
        />
      </Grid>
      {/* {isModalVisible && (
        <Updates
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )} */}
      {isModalVisible && (
        <ServiceModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          // isEditMode={isEditMode}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};
export default ServicesTable;
