import axios from "axios";
import { useState, useEffect } from "react";

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  Table,
  Paper,
  Divider,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TextField,
  Pagination,
  TableContainer,
} from "@mui/material";

// ----------------------------------------------------------------------
const data = [
  {
    "S No.": 1,
    Name: "John",
    Duration: 10,
    "Start Time": "2024-02-10T08:00:00",
    "End Time": "2024-02-10T08:10:00",
    Amount: "$5",
    Details: "Normal call",
  },
  {
    "S No.": 2,
    Name: "Alice",
    Duration: 25,
    "Start Time": "2024-02-10T09:30:00",
    "End Time": "2024-02-10T09:55:00",
    Amount: "$10",
    Details: "Conference call",
  },
  {
    "S No.": 3,
    Name: "Bob",
    Duration: 15,
    "Start Time": "2024-02-11T11:15:00",
    "End Time": "2024-02-11T11:30:00",
    Amount: "$7",
    Details: "International call",
  },
  {
    "S No.": 4,
    Name: "Emma",
    Duration: 20,
    "Start Time": "2024-02-11T13:45:00",
    "End Time": "2024-02-11T14:05:00",
    Amount: "$8",
    Details: "Customer support call",
  },
  {
    "S No.": 5,
    Name: "John",
    Duration: 10,
    "Start Time": "2024-02-10T08:00:00",
    "End Time": "2024-02-10T08:10:00",
    Amount: "$5",
    Details: "Normal call",
  },
  {
    "S No.": 6,
    Name: "Alice",
    Duration: 25,
    "Start Time": "2024-02-10T09:30:00",
    "End Time": "2024-02-10T09:55:00",
    Amount: "$10",
    Details: "Conference call",
  },
];

export default function CallHistory() {
  const [chatData, setChatData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("your_api_endpoint_here");
        setChatData(response.data);
      } catch (error) {
        console.error("Error fetching chat history:", error);
      }
    };

    fetchData();
  }, []);

  // Filter the data based on the search query
  const filteredData = data.filter((row) =>
    row.Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Calculate index of the last item for the current page
  // const indexOfLastItem = currentPage * itemsPerPage;
  // // Calculate index of the first item for the current page
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // // Get current page items
  // const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // const tableData = chatData.map((record, index) => ({
  //   ...record,
  //   index: index + 1,
  // }));

  // Function to handle changes in the search query
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  // Function to handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <Container
      sx={{
        backgroundColor: "white",
        padding: "50px",
        borderRadius: "15px",
        boxShadow: "5",
      }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={3}>
        <Typography variant="h3">CallHistory</Typography>
        <TextField
          label="Search by Name"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearch}
        />
      </Stack>
      <Divider sx={{ margin: "10px" }} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Duration[Min]</TableCell>
              <TableCell>Start Time</TableCell>
              <TableCell>End Time</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.index}>
                <TableCell>{row.index}</TableCell>
                <TableCell>{row.Name}</TableCell>
                <TableCell>{row.Duration}</TableCell>
                <TableCell>{row["Start Time"]}</TableCell>
                <TableCell>{row["End Time"]}</TableCell>
                <TableCell>{row.Amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        size="large"
        sx={{ marginTop: "20px", justifyContent: "center" }}
      />
    </Container>
  );
}
