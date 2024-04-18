import { useTheme } from "@emotion/react";
import { useState } from "react";
import LawyerView from "./lawyercontents/LawyerView";
import CaView from "./cacontents/CaView";
import { Box, Button, Grid, Tab, Tabs, Tooltip, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

export default function Expert() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabContent = () => {
    if (value === 0) {
      return <LawyerView />;
    } else if (value === 1) {
      return <CaView />;
    } else {
      return null;
    }
  };

  const renderAddButton = () => {
    if (value === 0) {
      return (
        <Tooltip title="Create Lawyer">
          <Button variant="outlined" sx={{ width: '8rem', height: '2rem' }}>
            <Icon
              icon="icon-park:plus"
              style={{ color: theme.palette.primary.main, marginRight: '0.5rem' }}
            />
            <Typography variant="subtitle1">Add Lawyer</Typography>
          </Button>
        </Tooltip>
      );
    } else if (value === 1) {
      return (
        <Tooltip title="Create CA">
          <Button variant="outlined" sx={{ width: '8rem', height: '2rem' }}>
            <Icon
              icon="icon-park:plus"
              style={{ color: theme.palette.primary.main, marginRight: '0.5rem' }}
            />
            <Typography variant="subtitle1">Add CA</Typography>
          </Button>
        </Tooltip>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <Box
        sx={{
          p: '1rem',
          bgcolor: '#FFFFFF',
          display: 'flex',
          justifyContent: 'space-between',
          mb: '1rem',
          color: theme.palette.primary.main,
          alignItems: 'center',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon position tabs example"
          indicatorColor="primary"
          sx={{
            height: '1rem',
            '& .MuiTab-root': {
              minHeight: '1rem',
            },
            '& .MuiTabs-indicator': {
              height: '0.3rem',
              borderRadius: '0 0 0.75rem 0.75rem ',
            },
          }}
        >
          <Tab
            icon={<Icon icon="octicon:law-16" />}
            iconPosition="end"
            label={<Typography variant="h5">LAWYER</Typography>}
          />
          <Tab icon={<Icon icon="mdi:user-tie" />} iconPosition="end"  label={<Typography variant="h5">CA</Typography>} />
        </Tabs>

        {renderAddButton()}
      </Box>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        {renderTabContent()}
      </Grid>
    </div>
  );
}
