import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
// import { fToNow } from 'src/utils/format-time';
import Iconify from '../../../../src/components/iconify/index'
// import Iconify from 'src/components/iconify';
// import Scrollbar from 'src/components/scrollbar';
import { primary } from '../../../../src/theme/palette';
import { DataGrid } from '@mui/x-data-grid';
// import { useAllCustomer } from 'src/hooks/customer/useCustomer';
import { useEffect } from 'react';
import { useAllCustomer } from '../../../hooks/customer/useCustomer';
import { useNavigate } from 'react-router-dom';

// ------------------------------------------------------------------------
const DashboardCustomerTable=({
    title,
    subheader,
    children,
    list,
   
    ...other
  }) =>{
    // const {data,isLoading} =useAllCustomer();
    // console.log(data?.data?.data?.rows)
    // useEffect(() => {
    //   if (data?.data?.data) {
    //     setTableData(data?.data?.data);
    //   }
    // }, [data?.data?.data]);
    const navigate=useNavigate()
    const handleView=()=>{
      navigate('/admin/customer')
    }
    const columns = [
      {
        field: 'id',
        // headerName: 'ID',
        headerName: (
          <Typography variant="subtitle1" sx={{ textTransform: 'capitalize' }}>
            id
          </Typography>
        ),
        //   width: 100,
        //   align: 'left',
      },
  
      {
        field: 'name',
        headerName: (
          <Typography sx={{ textTransform: 'capitalize' }} variant="subtitle1">
            customers
          </Typography>
        ),
        sortable: false,
        //   width: 130,
        //   align: 'left',
          valueGetter: (params) =>   params.row.name,
      },
      {
        field: 'phone_no',
        headerName: (
          <Typography variant="subtitle1" sx={{ textTransform: 'capitalize' }}>
            mobile
          </Typography>
        ),
        sortable: false,
        //   width: 130,
        //   align: 'left',
          valueGetter: (params) => params.row.phone_no,
      },
      {
        field: 'createdAt',
        headerName: (
          <Typography variant="subtitle1" sx={{ textTransform: 'capitalize' }}>
            date
          </Typography>
        ),
          // width: 40,
        sortable: false,
        // editable: true,
        //   align: 'left',
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
          <Typography variant="subtitle1" ml="2rem" sx={{ textTransform: 'capitalize' }}>
            last seen
          </Typography>
        ),
        sortable: false,
        width: 130,
        align: 'center',
        // renderCell: (params) => {
        //   const status = params.value;
        //   return (
        //     <>
        //       {status ? (
        //         <Badge color="success" badgeContent="Approved"></Badge>
        //       ) : (
        //         <Badge color="warning" badgeContent="Pending"></Badge>
        //       )}
        //     </>
        //   );
        // },
      },
    ];
    const rows = [
      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
      { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
      { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
      { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
      { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
      { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
      { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
    return (
      <Card {...other} sx={{ borderRadius: 1 ,height: 400, width: '100%'}}>
        <>
          <Box
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              textAlign: 'center',
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
                typography: 'subtitle2',
                color: primary.dark,
                backgroundColor: 'none',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              View all
            </Button>
          </Box>
          {/* //   <Divider sx={{ borderStyle: 'solid' }} />
  
      //   <Stack spacing={3} sx={{ p: 3 }}> */}
          <DataGrid   
            disableColumnFilter={true}
            disableColumnMenu
            hideFooterPagination
           
            rowHeight={36}
            // rows={data?.data?.data?.rows}
            rows={rows}
            columns={columns}
           
            checkboxSelection={false}
            disableRowSelectionOnClick
            showCellVerticalBorder={false}
            showColumnVerticalBorder={false}
          />
        </>
        {/* //   </Stack> */}
      </Card>
    );
  }
  export default DashboardCustomerTable;
  // DashboardCustomerTable.propTypes = {
  //   title: PropTypes.string,
  //   subheader: PropTypes.string,
  //   handleView: PropTypes.func,
  //   // list: PropTypes.array,
  // };