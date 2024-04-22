import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
// import { fToNow } from 'src/utils/format-time';

import Iconify from "../../../../src/components/iconify/index";
// import Scrollbar from 'src/components/scrollbar';
import { primary } from "../../../../src/theme/palette";
import { DataGrid } from "@mui/x-data-grid";
import { Badge } from "@mui/material";

import { useQueryClient } from "react-query";
import { useEffect, useState } from "react";
// import { useAllBooking } from "../../../hooks/booking/useBooking";
import { useNavigate } from "react-router-dom";

const DashboardBookingTable = ({
  title,
  subheader,
  children,
  list,
  ...other
}) => {
  const [tableData, setTableData] = useState([]);
  const queryClient = useQueryClient();
  // const { isLoading, data } = useAllBooking();
  const {rows,setRows}=useState([]);
  const navigate = useNavigate();
  const handleView = () => {
    navigate("/admin/booking");
  };
  // console.log(data?.data?.data);
  // if (isLoading) {
  //   console.log('Loading');
  //   queryClient.refetchQueries(['all_booking']);
  // }

  // useEffect(() => {
  //   if (data?.data?.data) {
  //     setRows(data?.data?.data);
  //   }
  // }, [data?.data?.data]);
  // console.log(tableData)
  // const mappedBookings = tableData.map((booking) => ({
  //   id: booking.id,
  //   status: booking.status,
  //   createdAt: new Date(booking.createdAt).toLocaleString(),
  //   userName: booking.User.name,
  //   expertName: booking.service.User.name,
  //   // phone_no: booking.User.phone_no,
  // }));
  // console.log('mapdata', mappedBookings);
  // refresh-reload
  // const handleView = () => {
  // setLoading(true);
  // setTimeout(() => {
  //   setLoading(false); setSearch(""); setSort('DESC'); setApplyFilter(null);
  // }, 1000);

  // queryClient.refetchQueries(['all_booking'])
  // }

  // };

  const columns = [
    {
      field: "id",
      // headerName: 'ID',
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          id
        </Typography>
      ),
      sortable: true,
      //   width: 100,
      //   align: 'left',
    },
    {
      field: "name",

      // 'service.User.name',
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          experts
        </Typography>
      ),
      sortable: false,
      //   width: 130,
      //   align: 'left',
      // valueGetter: (params) =>{
      //   console.log('paa2', params.row.service.User);
      //   params.row.service},
    },
    {
      field: "name",
      headerName: (
        <Typography sx={{ textTransform: "capitalize" }} variant="subtitle1">
          customer
        </Typography>
      ),
      sortable: false,
      //   width: 130,
      //   align: 'left',
      // valueGetter: (params) => {
      //   console.log('paa1', params.row.User.name );
      //   params.row.User.name.toUpperCase();
      // },
    },

    {
      field: "createdAt",
      headerName: (
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          created at
        </Typography>
      ),
      sortable: false,
      //   width: 140,
      // editable: true,
      //   align: 'left',
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
      field: "status",
      headerName: (
        <Typography
          variant="subtitle1"
          ml="2rem"
          sx={{ textTransform: "capitalize" }}
        >
          payment
        </Typography>
      ),
      sortable: false,
      width: 130,
      align: "center",
      renderCell: (params) => {
        const status = params.value;
        return (
          <>
            {!status ? (
              <Badge color="success" badgeContent="Approved"></Badge>
            ) : (
              <Badge color="warning" badgeContent="Pending"></Badge>
            )}
          </>
        );
      },
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
    <Card {...other} sx={{ borderRadius: 1, height: 400, width: "100%" }}>
      <>
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" color={primary.contrastText}>
            {title}
          </Typography>

          <Button
            size="small"
            variant="text"
            endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
            // color="blue"
            onClick={handleView}
            sx={{
              fontWeight: 20,
              typography: "subtitle2",
              color: primary.dark,
              backgroundColor: "none",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            View all
          </Button>
        </Box>

        <DataGrid
          // rows={data?.data?.data}
          rows={rows}
          columns={columns}
          // disableColumnFilter={true}
          // disableColumnMenu
          // hideFooterPagination
          // pageSizeOptions={10}
          // autoPageSize={5}

          rowHeight={36}
          // checkboxSelection={false}
          // disableRowSelectionOnClick
          // showCellVerticalBorder={false}
          // showColumnVerticalBorder={true}
        />
      </>
      {/* //   </Stack> */}
    </Card>
  );
};
export default DashboardBookingTable;
// DashboardBookingTable.propTypes = {
//   title: PropTypes.string,
//   subheader: PropTypes.string,
//   handleView: PropTypes.func,
//   // list: PropTypes.array,
// };
