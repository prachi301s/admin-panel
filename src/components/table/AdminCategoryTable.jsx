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
// import UpdateCategoryModal from 'src/components/modal/UpdateCategoryModal';
// import Updates from '../banner/Updates';

import TableDataGrid from "../common/customtabels/TableDataGrid";
// import { useGetAllCategory } from "../../hooks/categories/useGetAllCategory";
import AddCategoryModal from "../modal/AddCategoryModal";
// import AddCategoryModal from '../../../components/modal/AddCategoryModal';

const StyledSwitch = styled(Switch)({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#5D87FF",
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#5D87FF",
  },
});

const AdminCategoryTable = () => {
  const [rows, setRows] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [isEditMode, setIsEditMode] = useState(false);
  const theme = useTheme();
  // const { message,success, mutate: delBanners } = useDeleteBanner();
  // const {  mutate: getEditBanner } = useEditBanner();
  // const { data } = useGetAllCategory();

  const queryClient = useQueryClient();

  // console.log("datataat", data);

  // useEffect(() => {
  //   if (data?.data?.data) {
  //     setRows(data?.data?.data);
  //   }
  // }, [data?.data?.data]);

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

  const columns = [
    {
      field: "category_name",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          name
        </Typography>
      ),
      width: 160,
      align: "left",
    
      // valueGetter: (params) => (
      //   <>
      //     <Typography variant="body1" sx={{ textTransform: "capitalize" }}>
      //       {params.row.category_name ||"-"}
      //     </Typography>
      //   </>
      // ),
    },
    {
      field: "description",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          description
        </Typography>
      ),
      sortable: false,
      width: 300,
      align: "left",
      // renderCell: (params) => <>{params.color || ' --'}</>,
    },
    {
      field: "features",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          features
        </Typography>
      ),
      sortable: false,
      width: 160,
      align: "left",
      renderCell: (params) => (
        <>
          <StyledSwitch defaultChecked />
        </>
      ),
    },

    {
      field: "status",
      headerName: (
        <Typography
          variant="subtitle1"
          sx={{ textTransform: "capitalize" }}
          ml="2.8rem"
        >
          status
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
      field: "actions",
      headerName: (
        <Typography
          variant="subtitle1"
          sx={{ ml: "1rem", textTransform: "capitalize" }}
        >
          actions
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
      <TableDataGrid
        columns={columns}
        rows={rows}
        tableTitle={"Category List"}
        isAdd
        icon={"ic:baseline-plus"}
        tooltipTitle={"Add Category"}
        buttonTitle={"Add Category"}
        buttonOnClick={handleCreate}
      />

      {isModalVisible && (
        <AddCategoryModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}
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
};
export default AdminCategoryTable;
