import React, { useState, useEffect } from "react";

import { Box, Grid, Typography } from "@mui/material";

// import AppWebsiteVisits from 'src/sections/overview/app-website-visits';
// import DashboardGraph from 'src/sections/view/DashboardGraph';

const ChartData = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Fetch data from your API
    const fetchData = async () => {
      try {
        const response = await fetch("your-api-endpoint");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setChartData(data.chartData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ paddingTop: "50px" }}>
      <Typography>ChartData</Typography>
      {chartData && (
        <Grid
          xs={12}
          md={6}
          lg={8}
          sx={{ boxShadow: "5", borderRadius: "5px" }}>
          <Typography variant="h4">{chartData.title}</Typography>
          {/* <DashboardGraph
            title={chartData.title}
            subheader={chartData.subheader}
            chart={chartData.chart}
          /> */}
        </Grid>
      )}
    </Box>
  );
};

export default ChartData;
