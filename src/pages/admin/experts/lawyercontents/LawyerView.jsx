import { useTheme } from "@emotion/react";
import { Icon } from "@iconify/react";
import {
  Badge,
  Box,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import TableDataGrid from "../../../../components/common/customtabels/TableDataGrid";
import { useGetAllCategory } from "../../../../hooks/categories/useGetAllCategory.js";
 import TableSearchBar from "../../../../components/common/customtabels/TableSearchBar";
// import { useGetAllCategory } from "src/hooks/categories/useGetAllCategory";

export default function LawyerView() {
  const [rows, setRows] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [verify, setVerify] = useState("");
  const theme = useTheme();

  const { data } = useGetAllCategory();

  const queryClient = useQueryClient();

  // console.log('datataat', data);

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

  const handleChange = (e) => {
    const value = e.target.value;
    setVerify(value);

    const updatedRows = rows.map((row) => {
      if (row.id === params.id) {
        return {
          ...row,
          verify: value,
          status: value === "Approved" ? true : false,
        };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const verifyOptions = ["Approved", "Pending", "Rejected", "Suspended"];

  const renderSelectInput = (params) => (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">VERIFY</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={verify}
          onChange={handleChange}
          // value={params.value || ''}
          // onChange={(e) => {
          //   params.api.setValue(params.id, e.target.value);
          // }}
        >
          {verifyOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );

  const columns = [
    {
      field: "id",
      // headerName: 'ID',
      headerName: <Typography variant="subtitle1">ID</Typography>,
      width: 100,
      align: "left",
    },

    {
      field: "name",
      headerName: <Typography variant="subtitle1">NAME</Typography>,
      width: 130,
      align: "left",
      valueGetter: (params) => params.row.category_name.toUpperCase(),
    },
    {
      field: "mobile",
      headerName: <Typography variant="subtitle1">MOBILE</Typography>,
      width: 130,
      align: "left",
      valueGetter: (params) => params.row.category_name.toUpperCase(),
    },
    {
      field: "status",
      headerName: (
        <Typography variant="subtitle1" ml="2rem">
          STATUS
        </Typography>
      ),
      sortable: false,
      width: 130,
      align: "center",
      renderCell: (params) => {
        const status = params.value;
        return (
          <>
            {status ? (
              <Badge color="success" badgeContent="Approved"></Badge>
            ) : (
              <Badge color="warning" badgeContent="Pending"></Badge>
            )}
          </>
        );
      },
    },

    {
      field: "verify",
      headerName: <Typography variant="subtitle1">VERIFY</Typography>,
      width: 130,
      align: "left",
      renderCell: renderSelectInput,
      valueGetter: (params) => {
        if (params.row && params.row.verify) {
          return params.row.verify.toUpperCase();
        } else {
          return "";
        }
      },
      valueSetter: (params) => {
        const updatedRow = { ...params.row, verify: params.newValue };
        return updatedRow;
      },
      headerAlign: "center",
    },

    // {
    //   field: 'verify',
    //   headerName: <Typography variant='subtitle1'>VERIFY</Typography>,
    //   width: 130,
    //   align: 'left',
    //   renderCell: renderSelectInput,
    //   valueGetter: (params) => {
    //     if (params.row && params.row.verify) {
    //       return params.row.verify.toUpperCase();
    //     } else {
    //       return '';
    //     }
    //   },

    //   valueSetter: (params) => {
    //     const updatedRow = { ...params.row, verify: params.newValue };
    //     return updatedRow;
    //   },
    // },
    {
      field: "createdAt",
      headerName: <Typography variant="subtitle1">CREATED DATE</Typography>,
      width: 140,
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

    {
      field: "last-seen",
      headerName: <Typography variant="subtitle1">LAST SEEN</Typography>,
      width: 140,
      align: "left",
      valueGetter: (params) => params.row.category_name.toUpperCase(),
    },

    {
      field: "actions",
      headerName: (
        <Typography variant="subtitle1" sx={{ ml: "1rem" }}>
          ACTIONS
        </Typography>
      ),
      // headerName: 'ACTIONS',
      width: 130,
      align: "left",

      renderCell: (params) => (
        <>
          {" "}
          <IconButton
            style={{ border: "none" }}
            color="primary"
            aria-label="edit"
            onClick={() => handleEdit(params.row.id)}>
            <Icon icon="line-md:edit-twotone-full" />
          </IconButton>
          <IconButton
            color="error"
            aria-label="delete"
            onClick={() => handleDelete(params.row.id)}>
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
        }}>
        <Typography variant="h4">ALL LAWYER</Typography>
        {/* <Tooltip title="Create New Category">
          <Button variant="outlined" onClick={handleCreate} sx={{ width: '8rem', height: '2rem' }}>
            <Typography variant="subtitle1">Add Category</Typography>
          </Button>
        </Tooltip> */}
        <div
          style={{
            width: "15rem",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
          }}>
          {/* <TableSearchBar/> */}
        </div>
      </Box>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TableDataGrid
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
