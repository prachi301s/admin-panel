import { Icon } from '@iconify/react';
import { Badge, IconButton, Typography } from '@mui/material';
import React from 'react';
import { Navigate } from 'react-router-dom';
import TableDataGrid from '../../../../src/components/common/customtabels/TableDataGrid';


export default function CaCallDetailsTable() {

  const handleView = () => {
    return "ppppp";
  }

  const columns = [
    { field: 'customer', headerName: 'CUSTOMER', width: 160 },
    {
      field: 'date',
      headerName: 'DATE ',
      width: 200,
      editable: true,
      align: 'left',
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
    { field: 'start_time', headerName: 'START TIME', width: 150 },
    { field: 'end_time', headerName: 'EARN TIME', width: 150 },
    { field: 'duration', headerName: 'DURATION', type: 'number', width: 110 },
    {
      field: 'status',
      headerName: (
        <Typography variant="body2" ml="2.8rem">
          STATUS
        </Typography>
      ),
      width: 200,
      align: 'center',
      renderCell: (params) => {
        const status = params.value;
        let badgeColor;
        let badgeContent;

        if (status === 'Busy') {
          badgeColor = 'warning';
          badgeContent = 'Busy';
        } else if (status === 'Received') {
          badgeColor = 'success';
          badgeContent = 'Received';
        } else if (status === 'No_Answer') {
          badgeColor = 'error';
          badgeContent = 'No Answer ';
        } else {
          badgeColor = 'default';
          badgeContent = 'Unknown';
        }

        return (
          <>
            <Badge color={badgeColor} badgeContent={badgeContent} ></Badge>
          </>
        );
      },
    },
    {
        field: 'action',
        headerName: 'VIEW',
        width: 150,
        renderCell: (params) => (
          <IconButton onClick={() => handleView(params.row.id)}>
            <Icon icon="mdi:eye" />
          </IconButton>
        ),
      },
  ];

  const rows = [
    { id: 1, cutomer:"abc", date:"06/06/2006", start_time: 'Snow', end_time: 'Jon', status: "Busy" },
    { id: 2, cutomer:"abc", date:"06/06/2006", start_time: 'Lannister', end_time: 'Cersei', status: "Received" },
    { id: 3, cutomer:"abc", date:"06/06/2006", start_time: 'Lannister', end_time: 'Jaime', status: "Busy" },
    { id: 4, cutomer:"abc", date:"06/06/2006", start_time: 'Stark', end_time: 'Arya', status: "Received" },
    { id: 5, cutomer:"abc", date:"06/06/2006", start_time: 'Targaryen', end_time: 'Daenerys', status: "Received" },
    { id: 6, cutomer:"abc", date:"06/06/2006", start_time: 'Melisandre', end_time: null, status: "No_Answer" },
    { id: 7, cutomer:"abc", date:"06/06/2006", start_time: 'Clifford', end_time: 'Ferrara', status: "Busy" },
    { id: 8, cutomer:"abc", date:"06/06/2006", start_time: 'Frances', end_time: 'Rossini', status: "Received" },
    { id: 9, cutomer:"abc", date:"06/06/2006", start_time: 'Roxie', end_time: 'Harvey', status: 'No_Answer' },
  ];

  return (
    <div>
      <TableDataGrid
        columns={columns}
        rows={rows}
        pageSize={5}
        typographyText="Call Details"
        icon="mdi:download"
        buttonText="Download"
        // buttonOnClick={handleCreate}
      />
    </div>
  );
}
