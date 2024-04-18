import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import {
  Avatar,
  Grid,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";

import { useResponsive } from "../../../hooks/useResponsive";

// import { bgBlur } from "src/theme/css";
import NotificationsIcon from "@mui/icons-material/Notifications";

import Iconify from "../../iconify/iconify";

import Person from "../../../../src/assets/assets/Person.png";
import { Icon } from "@iconify/react";

// import Searchbar from "./common/searchbar";
// import AccountPopover from "./AccountPopover";
// import LanguagePopover from './common/language-popover';
// import NotificationsPopover from "./NotificationPopover";

// ----------------------------------------------------------------------

export default function Header({ onOpenNav }) {
  const theme = useTheme();

  const HEADER = {
    H_MOBILE: 64,
    H_DESKTOP: 80,
    H_DESKTOP_OFFSET: 80 - 16,
  };

  const NAV = {
    WIDTH: 291,
  };

  const lgUp = useResponsive("up", "lg");

  const renderContent = (
    <>
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      {/* <Searchbar /> */}
      <Grid container mt={5}>
        <Grid xs={12} sm={6} md={9}>
          <OutlinedInput
            sx={{ width: "100%", height: 40 }}
            // value={filterName}
            // onChange={onFilterName}
            placeholder="Search"
            startAdornment={
              <InputAdornment position="start">
                <Iconify
                  icon="eva:search-fill"
                  sx={{ color: "text.disabled", width: 20, height: 20 }}
                />
              </InputAdornment>
            }
          />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Box
            sx={{
              mb: 1,
              ml: 4,
              display: "flex",
              flexDirection:"row",
              borderRadius: 1.5,
              alignItems: "center",

              justifyContent: "space-between",
              // bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
            }}
          >
            <Box
              sx={{
                // position:"fixed",
                // width: "2.438rem",
                // height: "2.438rem",
                mb:"0.2rem",
                top: "40px",
                left: "1178px",
                borderRadius: "4px",

                textAlign: "center",
                border: "1px solid #DCDCDC",
              }}
            >
              <Icon
                icon="tdesign:notification-filled"
                color="#2E394B"
                style={{ position: "fixed" ,right:"14rem",top:"2.5rem" }}
              />
              {/* <NotificationsIcon color="#2E394B" /> */}
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Avatar alt="photoURL" src={Person} />
              <Stack direction="column" ml={1}>
                <Typography variant="body1" color={"#2E394B"}>
                  Wade Warren
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "black" }}>
                  Admin
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* <Typography sx={{ mt: 3, mb: 3,ml:4 ,textAlign:"center" }} variant="h3" color="#fe870a">
        LOGO
      </Typography> */}
      <Box sx={{ flexGrow: 2 }} />

      {/* <Stack direction="row" alignItems="center" spacing={1}>
        <LanguagePopover />
        <NotificationsPopover />
        <AccountPopover />
      </Stack> */}
    </>
  );

  return (
    <AppBar
      sx={{
        // boxShadow:"rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;",
        // boxShadow: '0px 0px 30px rgba(12, 37, 86, 0.05)',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,

        backgroundColor: "white",
        boxShadow: "none",
        color: theme.palette.background.default,
        transition: theme.transitions.create(["height"], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH + 1}px)`,

          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 2,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
