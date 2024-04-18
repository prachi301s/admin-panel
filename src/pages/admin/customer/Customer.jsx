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

import CustomersDetails from "./CustomersDetails";
import ProfileCard from "../../../../src/components/common/card/ProfileCard";
import AdminCustomersTable from "../../../../src/components/table/AdminCustomerTable/AdminCustomersTable";
const Customer = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();

  return (
    <>
      <AdminCustomersTable/>
      {/* <CustomersDetails /> */}
    </>
  );
};

export default Customer;
