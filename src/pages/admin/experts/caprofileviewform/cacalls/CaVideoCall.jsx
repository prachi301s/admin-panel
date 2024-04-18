
import Grid from '@mui/material/Unstable_Grid2';

import { Icon } from '@iconify/react';
import { Avatar, Box, Divider, InputAdornment, OutlinedInput } from '@mui/material';
import CaTabIndex from '../../../../../components/table/catabletabs/CaTabIndex';
import { CaChatCard } from '../cachats/CaChatCard';


// ----------------------------------------------------------------------

export default function CaVideoCall() {
  const totalCardData = [
    {
      id: 1,
      icon: <Icon icon="fluent:chat-28-filled"  fontSize={22} color="#F9921F" />,
      title: 'Total Chat',
    },
    {
      id: 2,
      icon: <Icon icon="fluent:chat-28-filled" fontSize={22} color="#F9921F" />,
      title: 'Total Call',
    },
    {
      id: 3,
      icon: <Icon icon="fluent:chat-28-filled" fontSize={22} color="#F9921F" />,
      title: 'Chats Earnings',
    },
    {
      id: 4,
      icon: <Icon icon="fluent:chat-28-filled"  fontSize={22} color="#F9921F" />,
      title: 'Calls Earnings',
    },
    {
      id: 5,
      icon: <Icon icon="fluent:chat-28-filled" fontSize={22} color="#F9921F" />,
      title: 'Video Calls Earnings',
    },
  ];

  return (
    <>
    <Box sx={{ bgcolor: '#ffffff', padding: '1rem', mt: '1rem' }}>
      <Grid container spacing={1} mt={1} sx={{ justifyContent: 'center' }}>
        {totalCardData.map((card) => (
          <Grid xs={12} sm={6} md={4} lg={2.4}>
            <CaChatCard title={card.title} total={714000} icon={card.icon} />
          </Grid>
        ))}
      </Grid>
    </Box>

    <Box><CaTabIndex/>
    </Box>


    </>


  );
}
