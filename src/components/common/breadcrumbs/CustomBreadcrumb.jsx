// import * as React from 'react';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
// import Stack from '@mui/material/Stack';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import { Icon } from '@iconify/react';

// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

// export default function CustomBreadcrumb() {
//   const breadcrumbs = [
//   //  <Typography> <Icon icon="ic:round-home" /></Typography>,
//     <Link underline="hover"
//      key="1"
//      color="inherit"
//       // href="/" onClick={handleClick}
//       >
//     <Icon icon="ic:round-home" />
//     </Link>,
//     <Link
//       underline="hover"
//       key="2"
//       color="inherit"
//       // href="/material-ui/getting-started/installation/"
//       onClick={handleClick}
//     >
//      CA
//     </Link>,
//     <Typography key="3" color="text.primary">
//       Albert Flores
//     </Typography>,
//   ];

//   return (
//     <Stack spacing={2}>
//       <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
//         {breadcrumbs}
//       </Breadcrumbs>
//     </Stack>
//   );
// }
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Icon } from "@iconify/react";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function CustomBreadcrumb() {
  const breadcrumbs = [
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      key="1"
      sx={{ ml: "1rem" }}
    >
      <Icon icon="ic:round-home" color="#5D87FF" />
      <Link
        underline="hover"
        color="#5D87FF"
        // onClick={handleClick}
      ></Link>
    </Stack>,
    <Stack direction="row" alignItems="center" spacing={1} key="2">
      <Link
        underline="hover"
        color="#5D87FF"
        // onClick={handleClick}
      >
        CA
      </Link>
    </Stack>,
    <Typography key="3" color="text.primary">
      Albert Flores
    </Typography>,
  ];

  return (
    <Stack spacing={2} sx={{ mt: "1rem" }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
