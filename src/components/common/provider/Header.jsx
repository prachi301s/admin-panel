// import PropTypes from "prop-types";

// import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
// import AppBar from "@mui/material/AppBar";
// import {
//   Grid,
//   InputAdornment,
//   OutlinedInput,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import Toolbar from "@mui/material/Toolbar";
// // import { useTheme } from "@mui/material/styles";
// import IconButton from "@mui/material/IconButton";
// import NotificationsIcon from "@mui/icons-material/Notifications";

// import { useResponsive } from "../../../hooks/useResponsive";

// // import { bgBlur } from "src/theme/css";

// import Iconify from "../../iconify/iconify";

// // import Searchbar from './common/searchbar';
// // import { NAV, HEADER } from "./config-layout";
// import AccountPopover from "./AccountPopover";
// import { Icon } from "@iconify/react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { logout } from "../../../store/useAction";
// import { toast } from "react-toastify";
// // import LanguagePopover from './common/language-popover';
// // import NotificationsPopover from './common/notifications-popover';

// // ----------------------------------------------------------------------

// export default function Header({ onOpenNav }) {
//   const theme = useTheme();
//   const navigate=useNavigate()
//   const dispatch=useDispatch()
//   const HEADER = {
//     H_MOBILE: 64,
//     H_DESKTOP: 80,
//     H_DESKTOP_OFFSET: 80 - 16,
//   };

//   const NAV = {
//     WIDTH: 291,
//   };

//   const lgUp = useResponsive("up", "lg");
//   useEffect(() => {
//     const userData = localStorage.getItem("user_data");
//     if (userData === null) {
//       navigate("/login");
//     }
//   });

//   // logout
//   const handleLogout = () => {
//     localStorage.removeItem("user_data");
//     dispatch(logout());
//     // window.location.replace("/login");
//     toast.success("User logged out successfully");
//   };
//   const renderContent = (
//     <>
//       {!lgUp && (
//         <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
//           <Iconify icon="eva:menu-2-fill" />
//         </IconButton>
//       )}

//       {/* <Searchbar /> */}
//       <Typography variant="h3" sx={{ color: "#5BE0FE" }}>
//         CA Dashbord
//       </Typography>

//       <Box sx={{ flexGrow: 1 }} />

//       <Stack direction="row" alignItems="center" spacing={3}>
//         {/* <LanguagePopover />
//         <NotificationsPopover /> */}
//         <Grid xs={12} sm={6} md={9}>
//           <OutlinedInput
//             sx={{ width: "100%", height: 40 }}
//             // value={filterName}
//             // onChange={onFilterName}
//             placeholder="Search"
//             startAdornment={
//               <InputAdornment position="start">
//                 <Iconify
//                   icon="eva:search-fill"
//                   sx={{ color: "text.disabled", width: 20, height: 20 }}
//                 />
//               </InputAdornment>
//             }
//           />
//         </Grid>
      
//         <NotificationsIcon />
//         <AccountPopover />
//         <Icon
//                 icon="ant-design:logout-outlined"
//                 width="18px"
//                 height="18px"
//                 color="black"
//                 onClick={handleLogout}
//               />
//       </Stack>
//     </>
//   );

//   return (
//     <AppBar
//       sx={{
//         boxShadow: "2",
//         height: HEADER.H_MOBILE,
//         zIndex: theme.zIndex.appBar + 1,
//         color: theme.palette.background.default,
//         backgroundColor: "transparent",
//         transition: theme.transitions.create(["height"], {
//           duration: theme.transitions.duration.shorter,
//         }),
//         ...(lgUp && {
//           width: `calc(100% - ${NAV.WIDTH + 1}px)`,
//           height: HEADER.H_DESKTOP,
//         }),
//       }}
//       // sx={{ backgroundColor: "transparent" }}
//     >
//       <Toolbar
//         sx={{
//           height: 1,
//           px: { lg: 5 },
//         }}>
//         {renderContent}
//       </Toolbar>
//     </AppBar>
//   );
// }

// Header.propTypes = {
//   onOpenNav: PropTypes.func,
// };
