import { useState, useEffect } from "react";
import "react-circular-progressbar/dist/styles.css";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, Card, Grid, CardContent } from "@mui/material";

// import ChartData from "./ChartData";
// import DashboardGraph from "src/sections/view/DashboardGraph";

// ----------------------------------------------------------------------
const cardData = [
  {
    title: "1500",
    content: "Total Chat & Call",
    imageUrl: "../../../../src/assets/caassets/chatcall.png",
  },
  {
    title: "800",
    content: "Total Call",
    imageUrl: "../../../../src/assets/caassets/call.png",
  },
  {
    title: "700",
    content: "Total Chat",
    imageUrl: "../../../../src/assets/caassets/chat.png",
  },
  {
    title: "$550",
    content: "Total Income",
    imageUrl: "../../../../src/assets/caassets/income.png",
  },
];

const CaDashboard = () => {
  const [cardsData, setCardsData] = useState([]);

  // useEffect(() => {
  //   // Fetch data from your API
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('your-api-endpoint');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data');
  //       }
  //       const data = await response.json();
  //       setCardsData(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Box
    // sx={{ backgroundColor: 'white', padding: '50px', borderRadius: '15px' }}
    >
      {/* <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
        <Typography variant="h4">Dashboard</Typography>
      </Stack> */}
      <Box
        sx={{
          display: "flex",
          gap: "33px",
          backgroundColor: "white",
          padding: "15px",
          borderRadius: "5px",
          boxShadow: "5px",
          flexDirection: { xs: "column", sm: "row" },
        }}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ display: "flex", boxShadow: "5" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography variant="h3" component="div">
                  {card.title}
                </Typography>
                <Typography sx={{ mb: 1.5, marginTop: "10px" }}>
                  {card.content}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  alignItems: "center",
                  margin: "10px",
                  height: 80,
                  width: 80,
                }}>
                <CircularProgressbarWithChildren
                  value={88}
                  styles={buildStyles({
                    // textColor: 'red',
                    pathColor: "#5BE0FE",
                    // trailColor: 'gold',
                  })}>
                  <img
                    style={{
                      height: 45,
                      width: 45,
                      padding: "6px",
                      backgroundColor: "#5BE0FE",
                      borderRadius: "50px",
                    }}
                    src={card.imageUrl}
                    alt="doge"
                  />
                </CircularProgressbarWithChildren>
              </Box>
            </Card>
          </Grid>
        ))}
      </Box>
      {/* <Box sx={{ paddingTop: '50px' }}>
        <Card sx={{ padding: '20px 20px 20px 20px', boxShadow: '5' }}>
        <Grid xs={12} md={6} lg={8} sx={{ boxShadow: '5', borderRadius: '5px' }}>
          <Typography variant="h4">
            <Typography variant="h4">Total Income</Typography>
          </Typography>
          <DashboardGraph
            title="Total Income"
            subheader="(+43%) than last year"
            chart={{
              labels: [
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
              ],
              series: [
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid>
        </Card>
      </Box> */}
      {/* <ChartData /> */}
    </Box>
  );
};
export default CaDashboard;
