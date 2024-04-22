// import { useState } from "react";
// import PropTypes from "prop-types";

// import Box from "@mui/material/Box";

// import Nav from "../components/common/provider/Nav";
// import Main from "../components/common/provider/Main";
// import Header from "../components/common/provider/Header";
// import { SecondaryRoutes } from "../routes/MainRoutes";

// // ----------------------------------------------------------------------

// export default function CaLayout({ children }) {
//   const [openNav, setOpenNav] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const handleClick = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <>
//       <Header onOpenNav={() => setOpenNav(true)} />

//       <Box
//         sx={{
//           minHeight: 1,
//           display: "flex",
//           flexDirection: { xs: "column", lg: "row" },
//         }}>
//         <Nav
//           activeIndex={activeIndex}
//           handleClick={handleClick}
//           openNav={openNav}
//           onCloseNav={() => setOpenNav(false)}
//         />

//         <Main><SecondaryRoutes/></Main>
//       </Box>
//     </>
//   );
// }

// CaLayout.propTypes = {
//   children: PropTypes.node,
// };
