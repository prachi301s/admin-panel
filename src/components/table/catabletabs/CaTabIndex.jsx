import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { Icon } from '@iconify/react';
import { Box, Button, Grid, Tab, Tabs, Tooltip, Typography } from '@mui/material';
import { CustomTab, CustomTabs } from '../../../../src/components/common/tab/CustomTab';
import CaChatDetailsTable from './CaChatDetailTable';
import CaCallDetailsTable from './CaCallDetailsTable';


;

export default function CaTabIndex() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabContent = () => {
    if (value === 0) {
      return <CaChatDetailsTable/>;
    } else if (value === 1) {
    return <CaCallDetailsTable/>;
    } else {
    //   return <CaChatDetails/>
    }
  };

  return (
    <div>
      <Box
        sx={{
          bgcolor: '#FFFFFF',
          alignItems: 'center',
          width: '100%',
          mt:"0.1rem"
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: '1rem',
            color: theme.palette.primary.main,
            alignItems: 'start',
            width: '100%',
          }}
        >
          {/* Our Tab components here */}
          <CustomTabs value={value} onChange={handleChange} aria-label="icon position tabs example">
            <CustomTab icon={<Icon icon="fluent:chat-20-filled" />} iconPosition="start" label={<Typography variant="subtitle1">Chat Details</Typography>} />
            <CustomTab icon={<Icon icon="ic:round-call" />} iconPosition="start" label={<Typography variant="subtitle1">Call Details</Typography>} />
            <CustomTab icon={<Icon icon="material-symbols:video-call-sharp" />} iconPosition="start" label={<Typography variant="subtitle1">Video Call Details</Typography>} />
            
          </CustomTabs>
        </Box>
      </Box>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        {renderTabContent()}
      </Grid>
    </div>
  );
}
