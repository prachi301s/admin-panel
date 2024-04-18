import React, { useState } from "react";

import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";

import { useTheme } from "@emotion/react";

import WithdrawRequestTable from "../../../components/table/withdrawTable/WithdrawRequestTable";
import WithdrawPaymentTable from "../../../components/table/withdrawTable/WithdrawPaymentTable";

const Withdraw = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const renderTabContent = () => {
    if (value === 0) {
      return <WithdrawRequestTable />;
    } else if (value === 1) {
      return <WithdrawPaymentTable />;
    } else {
      return null;
    }
  };
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
                <Typography variant="subtitle1">Withdraw Requests</Typography>
              }
            />
            <Tab
              // icon={<Icon icon="ic:round-call" />}
              // iconPosition="start"
              label={
                <Typography variant="subtitle1">Withdraw Payments</Typography>
              }
            />
          </Tabs>
        </Box>
      </Box>
      <Divider />

     { renderTabContent()}
    </div>
  );
};

export default Withdraw;
