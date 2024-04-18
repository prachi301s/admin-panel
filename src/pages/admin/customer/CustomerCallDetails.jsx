import * as React from "react";
import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";
import { Icon } from "@iconify/react";
import {
  Badge,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from "@mui/material";

import { useState } from "react";
// import Updates from './Updates';

import { useTheme } from "@emotion/react";

import { CustomCard } from "../../../components/common/card/CustomCard";
import CustomerChatDetailsTable from "../../../components/table/AdminCustomerTable/CustomerChatDetailsTable";
import CustomerCallDetailsTable from "../../../../src/components/table/AdminCustomerTable/CustomerCallDetailsTable";
import CustomerVideoCallTable from "../../../../src/components/table/AdminCustomerTable/CustomerVideoCallTable";
// import img from "../../../../src/assets/assets/images/Frame12.png";
const CustomerCallDetails = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const renderTab = () => {
    if (value === 0) {
      return <CustomerChatDetailsTable/>;
    } else if (value === 1) {
      return <CustomerCallDetailsTable />;
    } else if (value === 2) {
      return <CustomerVideoCallTable />;
    } else {
      return null;
    }
  };

  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          alignItems: "center",
          width: "100%",
          mt: "0.1rem",
          p: "0.1rem",
        }}>
        <Box>
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              alignItems: "center",
            }}>
            <Grid container>
              <Grid lg={4} sm={12} md={4}>
                <CustomCard title="Total Chats" total="50" icon="oi:chat" />
                {/* <Icon icon="oi:chat" /> */}
              </Grid>
              <Grid lg={4} sm={12} md={4}>
                <CustomCard title="Total Calls" total="100" icon="mi:call" />
              </Grid>
              <Grid lg={4} sm={12} md={4}>
                <CustomCard
                  title="Total Video Calls"
                  total="₹10,000"
                  icon="flat-color-icons:video-call"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              // mb: "1rem",
              color: theme.palette.primary.main,
              alignItems: "start",
              width: "100%",
            }}>
            {/* Our Tab components here */}
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="icon position tabs example">
              <Tab
                // icon={<Icon icon="ic:round-call" />}
                // iconPosition="start"
                label={
                  <Typography variant="subtitle1">Chat Details</Typography>
                }
              />
              <Tab
                // icon={<Icon icon="ic:round-call" />}
                // iconPosition="start"
                label={
                  <Typography variant="subtitle1">Call Deatils</Typography>
                }
              />
              <Tab
                // icon={<Icon icon="ic:round-call" />}
                // iconPosition="start"
                label={
                  <Typography variant="subtitle1">
                    Video Call Details
                  </Typography>
                }
              />
            </Tabs>
          </Box>
        </Box>
      </Box>
      <Divider />
      {renderTab()}
      {/* <CustomerCallDetailsTable /> */}
    </>
  );
};

export default CustomerCallDetails;
