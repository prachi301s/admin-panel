import CustomBreadcrumb from "../../../../components/common/breadcrumbs/CustomBreadcrumb";
import CaBankDetails from "./CaBankDetails";
import CaChatDetails from "./cachats/CaChatDetails";
import CaProfileView2 from "./CaProfileView2";
import { CustomTab, CustomTabs } from "../../../../components/common/tab/CustomTab";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import DocumentApprovalFormCard from "../../../../../src/components/common/card/DocumentCard";
import CaVideoCall from "./cacalls/CaVideoCall";
import CaCallDetails from "./cacalls/CaCallDetails";

export default function CaProfileIndex() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabContent = () => {
    if (value === 0) {
      // return <LawyerView />;
      return <CaProfileView2 />;
    } else if (value === 1) {
      return <CaBankDetails/>;
    } else if (value === 2) {
      return <CaChatDetails/>
    }
    else if (value === 3) {
      return <CaCallDetails/>
      
    }
    else if (value === 4) {
      return <CaVideoCall/>
    }
    else {
      return <DocumentApprovalFormCard/>
    }
  };
  
  return (
    <div>
      <Box
        sx={{
          p: '0.1rem',
          bgcolor: '#FFFFFF',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <CustomBreadcrumb />
        <Box
          sx={{
            // p: '1rem',
            // bgcolor: '#FFFFFF',
            display: 'flex',
            justifyContent: 'space-between',
            mt: '1rem',
            mb: '1rem',
            color: theme.palette.primary.main,
            alignItems: 'start',
            width: '100%',
          }}
        >
          {/* Our Tab components here */}
          <CustomTabs value={value} onChange={handleChange} aria-label="icon position tabs example">
            <CustomTab label={<Typography variant="h5">Albert Flores Details</Typography>} />
            <CustomTab label={<Typography variant="h5">Bank Details</Typography>} />
            <CustomTab label={<Typography variant="h5">Chat Details</Typography>} />
            <CustomTab label={<Typography variant="h5">Call Details</Typography>} />
            <CustomTab label={<Typography variant="h5">Video Call Details</Typography>} />
            <CustomTab label={<Typography variant="h5">Documents</Typography>} />
          </CustomTabs>
        </Box>
      </Box>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        {renderTabContent()}
      </Grid>
    </div>
  );
}
