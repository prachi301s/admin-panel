import React, { useState } from "react";

import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";


import EarningTable from "../../../components/table/earningTable/AdminEarningTable";
import { useTheme } from "@emotion/react";
import AdminEarningTable from "../../../components/table/earningTable/AdminEarningTable";
import LawyerEarningTable from "../../../components/table/earningTable/LawyerEarningTable";
import CaEarningTable from "../../../components/table/earningTable/CaEarningTable";

const Earning = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const renderTabContent = () => {
    if (value === 0) {
      return <AdminEarningTable/>;
    } else if (value === 1) {
      return <LawyerEarningTable/>;
    } else if (value === 2) {
      return <CaEarningTable/>;
    } else {
      return null;
    }
  };

  const theme=useTheme();
  return (
    <div>
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          alignItems: "center",
          width: "100%",
          mt: "0.1rem",
          p: "0.1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // mb: "1rem",
            color: theme.palette.primary.main,
            alignItems: "start",
            width: "100%",
          }}
        >
          {/* Our Tab components here */}
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon position tabs example"
          >
            <Tab
              // icon={<Icon icon="fluent:chat-20-filled" />}
              // iconPosition="start"
              label={
                <Typography variant="subtitle1">Admin Earning</Typography>
              }
            />
            <Tab
              // icon={<Icon icon="ic:round-call" />}
              // iconPosition="start"
              label={
                <Typography variant="subtitle1">Lawyer Earning</Typography>
              }
            />
             <Tab
              // icon={<Icon icon="ic:round-call" />}
              // iconPosition="start"
              label={
                <Typography variant="subtitle1">CA Earning</Typography>
              }
            />
          </Tabs>
        </Box>
      </Box>
      <Divider />

     {renderTabContent()}
    </div>
  );
};

export default Earning;
