import { Card } from "@mui/material";
import React, { useState } from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "call", "Chat", "video call"],
  ["Jan", 1000, 400, 200],
  ["Feb", 1170, 460, 250],
  ["Mar", 660, 1120, 300],
  ["Apr", 1030, 540, 350],
  ["May", 1030, 540, 350],
  ["Jun", 950, 540, 350], // Modified value on the y-axis for June
  ["Jul", 1030, 540, 350],
  ["Aug", 1030, 540, 350],
  ["Sep", 1030, 540, 350], // Changed "sep" to "Sep" for consistency
  ["Oct", 1030, 540, 350],
  ["Nov", 1030, 540, 350],
  ["Dec", 1030, 540, 350],
];

function getTotalEarningsByYear(data) {
  const totals = {};
  for (let i = 1; i < data.length; i++) {
    const year = data[i][0].split("-")[0]; // Extracting year from month
    if (!totals[year]) {
      totals[year] = 0;
    }
    for (let j = 1; j < data[i].length; j++) {
      totals[year] += data[i][j];
    }
  }
  return totals;
}

function DashboardGraph() {
  const totalEarningsByYear = getTotalEarningsByYear(data);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const subtitle = selectedYear
    ? `Total earnings for ${selectedYear}: ₹${totalEarningsByYear[selectedYear] || 0}`
    : `   ₹${Object.values(totalEarningsByYear).reduce(
        (acc, curr) => acc + curr,
        0
      )}`;

  console.log("Total earnings by year:", subtitle);

  return (


    <Card  sx={{padding:'1rem'}} >    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={{
        chart: {
          title: "Total Earning of the year",
          subtitle: subtitle,
        },
        legend: {
          position: "top",
          textStyle: { color: "#FE870A", fontSize: 16 },
        }, // Positioning legend at the top and customizing text style
        colors: ["#FE870A", "#455A64", "#D1D1D1"], // Customizing colors of the series
        hAxis: {
          title: "Months", // Customizing horizontal axis label
          titleTextStyle: { color: "#FE870A" }, // Customizing horizontal axis label text style
          textStyle: { color: "green" }, // Customizing horizontal axis tick text style
        },
        vAxis: {
          title: "Earnings", // Customizing vertical axis label
          titleTextStyle: { color: "blue" }, // Customizing vertical axis label text style
          textStyle: { color: "orange" }, // Customizing vertical axis tick text style
        },
      }}

    />
    </Card>

  );
}

export default DashboardGraph;
// import PropTypes from 'prop-types';

// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';

// import Chart, { useChart } from 'src/components/chart';
// import { Typography } from '@mui/material';

// // ----------------------------------------------------------------------

// export default function DashboardGraph({ title, subheader, chart, ...other }) {
//   const { labels, colors, series, options } = chart;

//   const chartOptions = useChart({
//     colors,
//     plotOptions: {
//       bar: {
//         columnWidth: '16%',
//       },
//     },
//     fill: {
//       type: series.map((i) => i.fill),
//     },
//     labels,
//     xaxis: {
//       type: 'datetime',
//     },
//     tooltip: {
//       shared: true,
//       intersect: false,
//       y: {
//         formatter: (value) => {
//           if (typeof value !== 'undefined') {
//             return `${value.toFixed(0)} visits`;
//           }
//           return value;
//         },
//       },
//     },
//     ...options,
//   });

//   return (
//     <Card {...other}>
//       {/* <CardHeader title={title}  subheader={subheader} /> */}
//       <Box
//         sx={{
//           p: 2,
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'space-between',
//           // textAlign: 'center',
//         }}
//       >
//         <Typography variant="h4">{title}</Typography>
//         <Typography variant="body2" color={'text.secondary'}>
//           {subheader}
//         </Typography>
//       </Box>

//       <Box sx={{ p: 3, pb: 1 }}>
//         <Chart
//           dir="ltr"
//           type="line"
//           series={series}
//           options={chartOptions}
//           width="100%"
//           height={364}
//         />
//       </Box>
//     </Card>
//   );
// }

// DashboardGraph.propTypes = {
//   chart: PropTypes.object,
//   subheader: PropTypes.string,
//   title: PropTypes.string,
// };
