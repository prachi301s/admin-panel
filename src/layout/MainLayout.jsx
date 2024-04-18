import { useState } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";

// import Nav from "./Nav";
// import Main from "./Main";
// import Header from "./Header";
import { PrimaryRoutes } from "../routes/MainRoutes";
import Header from "../components/common/admin/Header";
import Main from "../components/common/admin/Main";
import Nav from "../components/common/admin/Nav";
// import Caheader from './caheader'

// ----------------------------------------------------------------------

export default function MainLayout({ children }) {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      {/* <Caheader onOpenNav={() => setOpenNav(true)} /> */}
      <Header onOpenNav={() => setOpenNav(true)} />

      <Box
        sx={{
          minHeight: 1,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
        }}>
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />

        <Main><PrimaryRoutes/></Main>
      </Box>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};
