import React, { useEffect, useState } from "react";
import TableDataGrid from "../common/customtabels/TableDataGrid";
import { Badge, IconButton, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
// import AddSubCategoryModal from "../modal/AddSubCategoryModal";
// import { useGetAllSubCategory } from "../../hooks/subcategories/useAllSubCategory";

const AdminSubCategoryTable = () => {
  const { theme } = useTheme();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [rows, setRows] = useState();
  // const { data } = useGetAllSubCategory();
  // console.log(data);
  const handleCreate = () => {
    // setIsEditMode(false);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  // useEffect(() => {
  //   if (data?.data?.data) {
  //     setRows(data?.data?.data);
  //   }
  // }, [data?.data?.data]);
  const columns = [
    {
      field: "id",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          id
        </Typography>
      ),
      // headerName: 'ID',
      width: 100,
      align: "left",
    },

    {
      field: "category_name",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          name
        </Typography>
      ),
      width: 160,
      align: "left",
      // valueGetter: (params) => params.row.category_name.toUpperCase(),
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
      // renderCell: (params) => (
      //   <>
      //     {" "}
      //     {/* <StyledSwitch defaultChecked /> */}
      //   </>
      // ),
    },

    {
      field: "status",
      headerName: (
        <Typography
          variant="subtitle1"
          sx={{ textTransform: "capitalize", textTransform: "capitalize" }}
          ml="2.8rem"
        >
          status
        </Typography>
      ),
      sortable: false,
      width: 180,
      align: "center",
      //   renderCell: (params) => {
      //     const status = params.value;
      //     return (
      //       <>
      //         {status ? (
      //           <Badge color="success" badgeContent="APPROVED"></Badge>
      //         ) : (
      //           <Badge color="error" badgeContent="REJECTED"></Badge>
      //         )}
      //       </>
      //     );
      //   },
    },

    {
      field: "actions",
      headerName: (
        <Typography
          variant="subtitle1"
          sx={{
            textTransform: "capitalize",
            textTransform: "capitalize",
            ml: "1rem",
          }}
        >
          actions
        </Typography>
      ),
      // headerName: 'ACTIONS',
      width: 180,
      align: "left",

      //   renderCell: (params) => (
      //     <>
      //       {" "}
      //       <IconButton
      //         style={{ border: "none", color: theme.palette.secondary.dark }}
      //         aria-label="view"
      //         // onClick={() => handleEdit(params.row.id)}
      //       >
      //         <Icon icon="solar:eye-bold" />
      //       </IconButton>
      //       <IconButton
      //         style={{ border: "none", color: theme.palette.secondary.dark }}
      //         aria-label="edit"
      //         onClick={() => handleEdit(params.row.id)}
      //       >
      //         <Icon icon="mdi:edit-box" />
      //       </IconButton>
      //       <IconButton
      //         aria-label="delete"
      //         onClick={() => handleDelete(params.row.id)}
      //       >
      //         <Icon icon="mdi:delete" />
      //       </IconButton>
      //     </>
      //   ),
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
      <div>
        {/* <button onClick={handleCreate}>fjdsljfl</button> */}
        <TableDataGrid
          tableTitle={"Sub Category List"}
          isAdd={true}
          columns={columns}
          rows={rows}
          buttonTitle={"Add Sub Category"}
          buttonOnClick={handleCreate}
          icon={"ic:baseline-plus"}
          tooltipTitle={"Add Subcategory"}
        />
      </div>

      {/* {isModalVisible && (
        <AddSubCategoryModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )} */}
    </>
  );
};

export default AdminSubCategoryTable;
