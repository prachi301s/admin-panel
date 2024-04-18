import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import { fToNow } from 'src/utils/format-time';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { primary } from 'src/theme/palette';

// ----------------------------------------------------------------------

export default function DashboardRecentCards({ title, subheader, children, list,handleView, ...other }) {
  return (
    <Card {...other}>
      <Box
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" color={primary.contrastText}> {title}</Typography>
        
        <Button
          size="small"
          variant="text"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
          // color="blue"
          onClick={handleView}
          sx={{
            fontWeight: 20,
            typography:"subtitle2",
            color: primary.dark,
            backgroundColor:"none",
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          View all
        </Button>
      </Box>
      <Divider sx={{ borderStyle: 'solid' }} />

      <Stack spacing={3} sx={{ p: 3 }}>
        {children}
      </Stack>
    </Card>
  );
}

DashboardRecentCards.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  handleView: PropTypes.func,
  // list: PropTypes.array,
};

// ----------------------------------------------------------------------

export function RecentCardItem({ image, title, description, status }) {
  // const { image, title, description,status } = items;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        component="img"
        alt={title}
        src={image}
        sx={{ width: 48, height: 48, borderRadius: 50, flexShrink: 0 }}
      />

      <Box sx={{ minWidth: 40, flexGrow: 1 }}>
        <Link
          color={"text.secondary"}
          variant="subtitle1"
          sx={{ textDecoration: 'none', cursor: 'pointer' }}
          noWrap
        >
          {title}
        </Link>

        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }} noWrap>
          {description}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: 'green' }}>
          {status}
        </Typography>
      </Box>
    </Stack>
  );
}

RecentCardItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.string,
};
