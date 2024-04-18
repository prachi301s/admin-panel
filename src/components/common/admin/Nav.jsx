import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
import { Button, Typography } from "@mui/material";

// import Avatar from "@mui/material/Avatar";
import ListItemButton from "@mui/material/ListItemButton";

// import { usePathname } from "src/routes/hooks";

import { useResponsive } from "../../../hooks/useResponsive";

// import { account } from "./AccountPopover";

import Scrollbar from "../scrollbar/scrollbar";

import { Icon } from "@iconify/react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom
import Iconify from "../../iconify/iconify";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/useAction";

// ----------------------------------------------------------------------
const menuItems = [
  {
    title: "Main",
    items: [
      {
        title: "Dashboard",
        path: "/admin",
        icon: <Icon icon="fluent-mdl2:b-i-dashboard" fontSize={20} />,
      },
    ],
  },
  {
    title: "User",
    items: [
      {
        title: "Customer",
        path: "/admin/customer",
        icon: <Icon icon="heroicons:user-group" fontSize={20} />,
      },
    ],
  },
  {
    title: "Provider",
    items: [
      {
        title: "Experts",
        path: "/admin/expert",
        icon: <Icon icon="ph:student" fontSize={20} />,
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        title: "Category",
        path: "/admin/category",
        icon: <Icon icon="ic:outline-category" fontSize={20} />,
      },
      {
        title: "Sub Category",
        path: "/admin/subcategory",
        icon: <Icon icon="codicon:type-hierarchy" fontSize={20} />,
      },
      {
        title: "Service",
        path: "/admin/service",
        icon: <Icon icon="ri:service-line" fontSize={20} />,
      },
    ],
  },
  {
    title: "Booking",
    items: [
      {
        title: "Booking",
        path: "/admin/booking",
        icon: <Icon icon="basil:book-outline" fontSize={20} />,
      },
    ],
  },
  {
    title: "Transaction",
    items: [
      {
        title: "Payment History",
        path: "/admin/payment-history",
        icon: <Icon icon="icon-park-outline:transaction-order" fontSize={20} />,
      },
      {
        title: "Earning",
        path: "/admin/earning",
        icon: <Icon icon="grommet-icons:transaction" fontSize={20} />,
      },
      {
        title: "Withdraw",
        path: "/admin/withdraw",
        icon: <Icon icon="icon-park-twotone:folder-withdrawal" fontSize={20} />,
      },
    ],
  },
  {
    title: "Settings",
    items: [
      {
        title: "Setting",
        path: "/admin/setting",
        icon: <Icon icon="ep:setting" fontSize={20} />,
      },
      {
        title: "Banner",
        path: "/admin/banner",
        icon: <Icon icon="icomoon-free:image" fontSize={20} />,
      },
    ],
  },
  {
    title: "Help Center",
    items: [
      {
        title: "Support",
        path: "/admin/customer",
        icon: <Icon icon="streamline:customer-support-1" fontSize={20} />,
      },
    ],
  },
  // {
  //   // title: "Help Center",
  //   items: [
  //     {
  //       title: "Logout",
  //       path: "/login",
  //       icon: <LogoutIcon />,
  //       onclick
  //     },
  //   ],
  // },
];

export default function Nav({ openNav, onCloseNav }) {
  const [pathname, setPathname] = useState("/admin");
  const location = useLocation();
  //   const history = useHistory(); // Use useHistory hook
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const upLg = useResponsive("up", "lg");

  // useEffect(() => {
  //   setPathname(location.pathname);
  //   if (openNav) {
  //     onCloseNav();
  //   }
  // }, [location, openNav, onCloseNav]);

  const handleNavigate = (path) => {
    // history.push(path);
    onCloseNav();
  };

  useEffect(() => {
    const userData = localStorage.getItem("user_data");
    if (userData === null) {
      navigate("/login");
    }
  });

  // logout
  const handleLogout = () => {
    localStorage.removeItem("user_data");
    dispatch(logout());
    // window.location.replace("/login");
    toast.success("User logged out successfully");
  };
  const NAV = {
    WIDTH: 291,
  };

  //   const renderAccount = (
  //     <Box
  //       sx={{
  //         mb: 1,
  //         mt: 1,
  //         mx: 2.5,
  //         py: 2,
  //         px: 2.5,
  //         display: "flex",
  //         borderRadius: 1.5,
  //         alignItems: "center",
  //         // bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
  //       }}>
  //       <Avatar src={account.photoURL} alt="photoURL" />

  //       <Box sx={{ ml: 2 }}>
  //         <Typography variant="subtitle2">{account.displayName}</Typography>

  //         <Typography variant="body2" sx={{ color: "text.secondary" }}>
  //           {account.role}
  //         </Typography>
  //       </Box>
  //     </Box>
  //   );

  const renderMenu = (
    <Box sx={{ height: "calc(95vh - 64px)", overflowY: "auto" }}>
      <Stack component="nav" spacing={1} sx={{ mt: 2 }}>
        {menuItems.map((menu, index) => (
          <>
            <NavBox key={index}>
              <Typography
                mb={1}
                variant="subtitle1"
                sx={{
                  background: "#EFEFEF",
                  backgroundPosition: "cover",
                  p: 1,
                }}
                color="black"
              >
                {menu.title}
              </Typography>
              {menu.items.map((item, itemIndex) => (
                <NavItem
                  key={itemIndex}
                  title={item.title}
                  path={item.path}
                  icon={item.icon}
                />
              ))}
            </NavBox>
          </>
        ))}
        <Stack spacing={1} sx={{ mt: 2 }} p={3}>
          <NavBox>
            <Button
              onClick={handleLogout}
              variant="contained"
              sx={{
                typography: "subtitle1",
                display: "flex",
                color: "white",
                justifyContent: "space-evenly",
                "& .MuiButton-endIcon": {
                  color: "white",
                },
              }}
            >
              <Typography variant="subtitle1">Logout</Typography>
              <Iconify
                icon="ant-design:logout-outlined"
                width="18px"
                height="18px"
              />
            </Button>
          </NavBox>
        </Stack>
      </Stack>
    </Box>
  );

  const renderContent = (
    <>
      <Box
        sx={{
          borderRadius: "0px 30px 0px 0px",
          backgroundColor: "#FE870A",
          height: "20px",
        }}
      />
      <Box position="relative" p={1}>
        {/* {/ <img width="50%" margin="auto" src="image.png" /> /} */}
        <Typography
          sx={{ p: 1.3, textAlign: "center" }}
          variant="h2"
          color="#fe870a"
        >
          LOGO
        </Typography>
      </Box>
      {/* {/ <Divider sx={{ borderStyle: 'solid', }} /> /} */}
      <Scrollbar
        sx={{
          height: 600,
          "& .simplebar-content": {
            height: "auto",
            display: "flex",
            flexDirection: "column",
            paddingRight: "4px",
            borderRadius: "0px 30px 0px 0px",
          },
        }}
      >
        {/* {renderAccount}
        <Divider sx={{ borderStyle: 'solid' }} /> */}
        {renderMenu}

        {/* {/ {renderUpgrade} /} */}
      </Scrollbar>
    </>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            // p: 1,
            // mt: 3,
            height: 1,
            position: "fixed",
            backgroundColor: "white",
            width: { lg: NAV.WIDTH },
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <>
          <Drawer
            open={openNav}
            onClose={onCloseNav}
            position="fixed"
            PaperProps={{
              sx: {
                width: NAV.WIDTH,
                // mt: 3,
              },
            }}
          >
            {renderContent}
          </Drawer>
        </>
      )}
    </Box>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavItem({ title, path, icon }) {
  const location = useLocation();
  const active = path === location.pathname;
  console.log(location);
  const navigate = useNavigate();
  const handleNavigate = (event) => {
    event.preventDefault();
    navigate(path);
    // window.location.href = path; // Redirect to the specified path
  };

  return (
    <ListItemButton
      component="button" // Use button component instead of link
      title={title}
      onClick={(e) => handleNavigate(e)} // Handle navigation on button click
      sx={{
        margin: 1,
        minHeight: 44,
        borderRadius: 0.75,
        typography: "subtitle2",
        color: "primary.contrastText",
        bgcolor: "white",
        textTransform: "capitalize",
        fontVariant: "subtitle2",
        ...(active
          ? {
              boxShadow: "0px 4px 4px 0px #00000040",
              color: "white",
              background: "#FE890F",
            }
          : {
              color: "#3A3A3A",
              bgcolor: "white",
            }),
        "&:hover": {
          color: "white",
          background: " #FE890F",
        },
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
        {icon}
      </Box>
      <Box component="span">{title}</Box>
    </ListItemButton>
  );
}

NavItem.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

function NavBox({ children }) {
  return (
    <Box
      m={2}
      sx={{
        // margin:2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "flex-start",
      }}
    >
      {children}
    </Box>
  );
}
NavBox.propTypes = {
  children: PropTypes.node,
};
