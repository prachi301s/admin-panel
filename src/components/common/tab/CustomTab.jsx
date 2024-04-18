import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/system';

// Custom Tab component
const CustomTab = styled(Tab)(({ theme }) => ({
  '&.Mui-selected': {
    color: 'black', 
  },
}));

// Custom Tabs component
const CustomTabs = styled(Tabs)(({ theme }) => ({
  margin: '1rem',
  height: '1rem',
  '& .MuiTab-root': {
    minHeight: '1rem',
    color:"black"
  },
  '& .MuiTabs-indicator': {
    height: '0.3rem',
    borderRadius: '0 0 0.75rem 0.75rem',
    backgroundColor: theme.palette.primary.main, 
  },
  
}));

export { CustomTabs, CustomTab };



