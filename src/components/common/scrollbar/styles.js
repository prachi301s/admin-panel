import SimpleBar from 'simplebar-react';

import { alpha, styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const StyledRootScrollbar = styled('div')(() => ({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
  // width:"1px",
}));

export const StyledScrollbar = styled(SimpleBar)(({ theme }) => ({
  maxHeight: '100%',

  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: theme.palette.primary.main,
      color:"red",
    },
    '&.simplebar-visible:before': {
      opacity: 1,
      color:"red",
    },
  },
  
  '& .simplebar-mask': {
    zIndex: 'inherit',
    color:"red",
  },
}));
