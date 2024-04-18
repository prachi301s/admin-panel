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

import CustomBreadcrumb from "../../../components/common/breadcrumbs/CustomBreadcrumb";
import ProfileCard from "../../../../src/components/common/card/ProfileCard";
// import img from "../../../../src/assets/assets/images/Frame12.png";
import CustomerChatDetails from "./CustomerChatDetails";
import CustomerCallDetails from "./CustomerCallDetails";
import CustomerVideoCall from "./CustomerVideoCall";
import DocumentApprovalFormCard from "../../../../src/components/common/card/DocumentCard";
const CustomersDetails = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const renderTabContent = () => {
    if (value === 0) {
      return <ProfileCard />;
    } else if (value === 1) {
      return <CustomerChatDetails />;
    } else if (value === 2) {
      return <CustomerCallDetails />;
    } else if (value === 3) {
      return <CustomerVideoCall />;
    } else if (value === 4) {
      return <DocumentApprovalFormCard />;
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
        {/* <Divider /> */}
        <CustomBreadcrumb sx={{ marginBottom: "10px" }} />
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
              // icon={<Icon icon="fluent:chat-20-filled" />}
              // iconPosition="start"
              label={
                <Typography variant="subtitle1">Wade Warren Details</Typography>
              }
            />
            <Tab
              // icon={<Icon icon="ic:round-call" />}
              // iconPosition="start"
              label={<Typography variant="subtitle1">Chat Details</Typography>}
            />
            <Tab
              // icon={<Icon icon="ic:round-call" />}
              // iconPosition="start"
              label={<Typography variant="subtitle1">Call Deatils</Typography>}
            />
            <Tab
              // icon={<Icon icon="ic:round-call" />}
              // iconPosition="start"
              label={
                <Typography variant="subtitle1">Video Call Details</Typography>
              }
            />
            <Tab
              // icon={<Icon icon="ic:round-call" />}
              // iconPosition="start"
              label={<Typography variant="subtitle1">Documents</Typography>}
            />
          </Tabs>
        </Box>
      </Box>
      <Divider />
      {renderTabContent()}
      {/* <Box sx={{ marginTop: "20px", padding: "30px" }}>
        <ProfileCard />
      </Box> */}
    </>
  );
};

export default CustomersDetails;
