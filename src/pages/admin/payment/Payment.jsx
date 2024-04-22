import React, { useState } from "react";

import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";

import { useTheme } from "@emotion/react";
import PaymentTable from "../../../components/table/PaymentTable";

const Payment = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  return (
    <div>
      <PaymentTable />
    </div>
  );
};

export default Payment;
