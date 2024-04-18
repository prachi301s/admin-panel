import { Icon } from "@iconify/react";
import { IconButton, Typography } from "@mui/material";
import React from "react";
import TableDataGrid from "../../../../src/components/common/customtabels/TableDataGrid";
import { useNavigate } from "react-router-dom";

export default function CaChatDetailsTable() {

  const navigate = useNavigate()

 const handleView = () => {
    navigate('/admin/ca-chat-view');
  };


  const columns = [
    {
      field: "customer",
      headerName: <Typography variant="subtitle1">Customers</Typography>,
      width: 160,
    },
    {
      field: "start_time",
      headerName: <Typography variant="subtitle1">Start Time</Typography>,
      width: 160,
    },
    {
      field: "end_time",
      headerName: <Typography variant="subtitle1">End Time</Typography>,
      width: 160,
    },
    {
      field: "amount",
      headerName: <Typography variant="subtitle1">End Amount</Typography>,
      type: "number",
      width: 160,
      align: "center",
    },
    {
      field: "duration",
      headerName: <Typography variant="subtitle1">Duration</Typography>,
      type: "number",
      width: 200,
      
    },
    {
      field: "action",
      headerName: (
        <Typography variant="subtitle1" ml="2.8rem">
          View
        </Typography>
      ),
      align: "center",
      width: 150,
      renderCell: (params) => (
        <IconButton onClick={() => handleView(params.row.id)}>
          <Icon icon="mdi:eye" />
        </IconButton>
      ),
    },
  ];

  const rows = [
    { id: 1, cutomer: "abc", start_time: "Snow", end_time: "Jon", amount: 35 },
    {
      id: 2,
      cutomer: "abc",
      start_time: "Lannister",
      end_time: "Cersei",
      amount: 42,
    },
    {
      id: 3,
      cutomer: "abc",
      start_time: "Lannister",
      end_time: "Jaime",
      amount: 45,
    },
    {
      id: 4,
      cutomer: "abc",
      start_time: "Stark",
      end_time: "Arya",
      amount: 16,
    },
    {
      id: 5,
      cutomer: "abc",
      start_time: "Targaryen",
      end_time: "Daenerys",
      amount: null,
    },
    {
      id: 6,
      cutomer: "abc",
      start_time: "Melisandre",
      end_time: null,
      amount: 150,
    },
    {
      id: 7,
      cutomer: "abc",
      start_time: "Clifford",
      end_time: "Ferrara",
      amount: 44,
    },
    {
      id: 8,
      cutomer: "abc",
      start_time: "Frances",
      end_time: "Rossini",
      amount: 36,
    },
    {
      id: 9,
      cutomer: "abc",
      start_time: "Roxie",
      end_time: "Harvey",
      amount: 65,
    },
  ];

  return (
    <div>
      <TableDataGrid
        columns={columns}
        rows={rows}
        pageSize={5}
        typographyText="Chat Details"
        icon="mdi:download"
        buttonText="Download"
        // buttonOnClick={handleCreate}
      />
    </div>
  );
}
