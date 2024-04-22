// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";

// import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
// import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
// import Avatar from "@mui/material/Avatar";
// import { alpha } from "@mui/material/styles";
// import Typography from "@mui/material/Typography";
// import ListItemButton from "@mui/material/ListItemButton";
// import Divider from "@mui/material/Divider";


// import legallogo from "../../../assets/caassets/legallogo.png";

// import WindowIcon from "@mui/icons-material/Window";
// import ChatIcon from "@mui/icons-material/Chat";
// import AddIcCallIcon from "@mui/icons-material/AddIcCall";
// import WalletIcon from "@mui/icons-material/Wallet";
// import PersonIcon from "@mui/icons-material/Person";
// import CreditScoreIcon from "@mui/icons-material/CreditScore";
// import GradeIcon from "@mui/icons-material/Grade";
// import Scrollbar from "../scrollbar/scrollbar";

// // import { NAV } from "./config-layout";
// // import canavConfig from "./caconfig-navigation";

// // ----------------------------------------------------------------------
// const canavConfig = [
//   {
//     title: "dashboard",
//     path: "/provider",
//     icon: <WindowIcon />,
//   },
//   {
//     title: "Chat History",
//     path: "/provider/ca/chat",
//     icon: <ChatIcon />,
//   },
//   {
//     title: "Call History",
//     path: "/provider/ca/call",
//     icon: <AddIcCallIcon />,
//   },
//   {
//     title: "Wallet",
//     path: "/provider/ca/wallet",
//     icon: <WalletIcon />,
//   },
//   {
//     title: "Profile",
//     path: "/provider/ca/profile",
//     icon: <PersonIcon />,
//   },
//   {
//     title: "Booking",
//     path: "/provider/ca/booking",
//     icon: <GradeIcon />,
//   },
//   {
//     title: "Withdrawal",
//     path: "/provider/ca/withdrawal",
//     icon: <CreditScoreIcon />,
//   },
// ];

// const NAV = {
//   WIDTH: 280,
// };
// export default function Nav({ openNav, onCloseNav }) {
//   const [pathname, setPathname] = useState("/provider");

//   useEffect(() => {
//     // Placeholder for updating pathname
//     // You may replace this with your actual logic for tracking pathname changes
//   }, []);

//   // const renderAccount = (
//   //   <Box
//   //     sx={{
//   //       my: 3,
//   //       mx: 2.5,
//   //       py: 2,
//   //       px: 2.5,
//   //       display: "flex",
//   //       borderRadius: 1.5,
//   //       alignItems: "center",
//   //       bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
//   //     }}>
//   //     <Avatar src={"/path/to/default_avatar.jpg"} alt="photoURL" />{" "}
//   //     {/* Placeholder for account photo */}
//   //     <Box sx={{ ml: 2 }}>
//   //       <Typography variant="subtitle2">John Doe</Typography>{" "}
//   //       {/* Placeholder for account name */}
//   //       <Typography variant="body2" sx={{ color: "text.secondary" }}>
//   //         Role
//   //       </Typography>{" "}
//   //       {/* Placeholder for account role */}
//   //     </Box>
//   //   </Box>
//   // );

//   const renderMenu = (
//     <Stack component="nav" spacing={1.5} sx={{ px: 2 }}>
//       {canavConfig.map((item, index) => (
//         <NavBox key={index}>
//           <NavItem item={item} active={item.path === pathname} />
//           <Divider />
//         </NavBox>
//       ))}
//     </Stack>
//   );

//   const renderContent = (
//     <Scrollbar
//       sx={{
//         height: 1,
//         margin: "20px",
//         background: "white",
//         "& .simplebar-content": {
//           height: 1,
//           display: "flex",
//           flexDirection: "column",
//         },
//       }}>
//       <img
//         src={legallogo}
//         alt=""
//         style={{ margin: "30px", backgroundColor: "#5BE0FE" }}
//       />

//       {renderMenu}

//       <Box sx={{ flexGrow: 1 }} />
//     </Scrollbar>
//   );

//   return (
//     <Box
//       sx={{
//         flexShrink: { lg: 0 },
//         width: { lg: NAV.WIDTH },
//       }}>
//       {openNav ? (
//         <Drawer
//           open={openNav}
//           onClose={onCloseNav}
//           PaperProps={
//             {
//               sx: {
//                 width: NAV.WIDTH,
//               },
//             }
//           }>
//           {renderContent}
//         </Drawer>
//       ) : (
//         <Box
//           sx={{
//             height: 1,
//             position: "fixed",
//             width: "291px",
//             borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
//           }}>
//           {renderContent}
//         </Box>
//       )}
//     </Box>
//   );
// }

// Nav.propTypes = {
//   openNav: PropTypes.bool,
//   onCloseNav: PropTypes.func,
// };

// function NavItem({ item, active }) {
//   return (
//     <ListItemButton
//       href={item.path}
//       sx={{
//         minHeight: 44,
//         borderRadius: 0.75,
//         typography: "body2",
//         "&:hover": {
//           color: "#5BE0FE",
//           bgcolor: "white",
//         },
//         textTransform: "capitalize",
//         fontWeight: "fontWeightMedium",
//         ...(active && {
//           fontWeight: "fontWeightSemiBold",
//           color: "white",
//           bgcolor: "#5BE0FE",
//           "&:hover": {
//             color: "#5BE0FE",
//             bgcolor: "white",
//           },
//         }),
//       }}>
//       <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
//         {item.icon}
//       </Box>
//       <Box component="span">{item.title}</Box>
//     </ListItemButton>
//   );
// }

// NavItem.propTypes = {
//   item: PropTypes.object,
//   active: PropTypes.bool,
// };

// function NavBox({ children }) {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         textAlign: "flex-start",
//       }}>
//       {children}
//     </Box>
//   );
// }

// NavBox.propTypes = {
//   children: PropTypes.node,
// };
