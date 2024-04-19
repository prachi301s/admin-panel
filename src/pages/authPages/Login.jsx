import { useState } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { alpha, useTheme } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import { zodResolver } from "@hookform/resolvers/zod";
import loginImg from "../../../src/assets/assets/background/low1.png";
// import { useRouter } from "src/routes/hooks";

import { bgGradient } from "../../../src/theme/css";

// import Logo from "src/components/logo";

import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Controller, useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import useLogin from "../../hooks/auth/useLogin";
import {loginSuccess } from "../../store/useAction";
import { schema } from "../../schema/auth_schema/LoingSchema";
import Iconify from "../../components/iconify/index";

// ----------------------------------------------------------------------

const Login = () => {
  const theme = useTheme();

  //   const router = useRouter();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [forgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false);
  const [resetModalOpen, setResetModalOpen] = useState(false);
  // const [loginType, setLoginType] = useState('');
  // const [email_id, setEmail_id] = useState('');
  // const [password, setPassword] = useState('');

  // const dispatch = useDispatch();
  // const User = useSelector((state) => state.user);
// console.log(User.user.id)
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  // const { mutate, isLoading, message } = useLogin();

  const handleLogin = (data) => {
    const { email_id, password, user_type } = data;

    const userData = {
      email_id,
      password,
      user_type,
    };
    localStorage.setItem(
      "user_data",
      JSON.stringify({
        userData
        // // id: data?.data?.id,
        // user_email_id: data?.data?.email_id,
        // user_type: data?.data?.user_type,
      })
    );

    // // Check if both email/password and user type are provided
    // if (!email_id || !password || user_type === "") {
    //   toast.error("Please provide both email/password and select a user type");
    //   return;
    // }

    // mutate(userData, {
    //   onSuccess: (responseData) => {
    //     const data = responseData?.data;
    //     // console.log(data);
    //     if (!data?.status) {
    //       let errorMessage = data?.message?.toLowerCase();
    //       if (errorMessage.includes("verify")) {
    //         setError("email_id", {
    //           type: "server",
    //           message: "Entered email is not verified yet",
    //         });
    //         setError("password", {
    //           type: "server",
    //           message: "Entered email is not verified yet",
    //         });
    //         console.log("Verified email");
    //         return;
    //       }
    //       // Display error message when login fails
    //       toast.error("You entered incorrect Email Or Password");
    //       return;
    //     }
    //     const user = {
    //       id: data?.data?.id,
    //       user_email_id: data?.data?.email_id,
    //       user_type: data?.data?.user_type,
    //     };
    //     console.log(user);
    //     localStorage.setItem(
    //       "user_data",
    //       JSON.stringify({
    //         id: data?.data?.id,
    //         user_email_id: data?.data?.email_id,
    //         user_type: data?.data?.user_type,
    //       })
    //     );

    //     dispatch(loginSuccess(user));

    //     // Conditional navigation based on user type
    //     if (user_type === 0) {
    //       navigate("/admin");
    //     } else if (user_type === 2) {
    //       navigate("/provider");
    //     } else {
    //       //---
    //       console.log(".......");
    //     }
    //     toast.success("Login successful!");
    //   },
    //   onError: (error) => {
    //     console.error("Error during login:", error);

    //     toast.error("An error occurred during login. Please try again later.");
    //   },
    // });
  };

  const textFieldStyles = (
    borderRadius,
    labelColor1,
    borderColor,
    menuTextColor,
    labelColor2,
    menuBgColor
  ) => ({
    "& .MuiInputLabel-root": {
      color: labelColor1,
      color: labelColor2,
    },
    "& .MuiOutlinedInput-root": {
      borderRadius,
      borderColor,
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor,
    },
    "& .MuiSelect-root": {
      color: menuTextColor,
    },
    "& .MuiSelect-icon": {
      color: menuTextColor,
    },
    "& .MuiList-root .MuiMenuItem-root": {
      backgroundColor: menuBgColor,
      color: menuTextColor,
    },
  });

  const handleForgotPassword = () => {
    setForgotPasswordModalOpen(false);
    setResetModalOpen(true);
  };

  return (
    // <div style={{ backgroundColor: " #F3EEF6" }}>
    <div
      style={{
        height: "100vh",
        margin: "0px auto ",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundPosition: "left",
          width: "100%",
          // display: "flex", height: "100vh", margin: "0px auto ", alignItems: "center", justifyContent: "center", maxWidth: 500,
          // display: 'flex',
          // flexDirection: 'column',
          // justifyContent:'space-between',
          ...bgGradient({
            color: alpha(theme.palette.background.default, 0.1),

            imgUrl: loginImg,
          }),
          height: 1,
          "@media (max-width: 600px)": {
            backgroundImage: "none",
          },
        }}
      >
        <Stack
          alignItems="end"
          justifyContent="center"
          sx={{
            height: 1,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
            width: "100%",
          }}
        >
          <Card
            sx={{
              p: { xs: "1rem", md: "2rem", lg: "4rem" },
              borderRadius: "0px",
              width: { xs: "30rem", md: "30rem", lg: "33rem" },
              height: "100%",
            }}
          >
            <form onSubmit={handleSubmit(handleLogin)}>
              <Stack
                spacing={3}
                sx={{
                  marginTop: "2rem",
                  width: "100%",
                  p: { xs: "1rem", md: "2rem" },
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    marginTop: { xs: "1rem", md: "3rem" },
                    justifyContent: "center",
                    textAlign: "center",
                    color: "#F9921F",
                  }}
                >
                  LEGAL CARE
                </Typography>

                <Controller
                  name="user_type"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <FormControl
                      required
                      sx={{
                        ...textFieldStyles("50px", "#F9921F"),
                        minWidth: { xs: "100%", md: "19rem" },
                      }}
                      size="small"
                    >
                      <InputLabel id="user-type-label">User Type</InputLabel>
                      <Select
                        labelId="user-type-label"
                        id="user-type"
                        value={field.value}
                        label="User Type"
                        onChange={field.onChange}
                        sx={textFieldStyles("50px", "#F9921F", "#F9921F")}
                      >
                        <MenuItem
                          value={0}
                          style={{
                            color: "#F9921F",
                            backgroundColor: "#ececec",
                          }}
                        >
                          <Typography variant="body2">Admin Login</Typography>
                        </MenuItem>
                        <MenuItem
                          value={2}
                          style={{
                            color: "#F9921F",
                            backgroundColor: "#ececec",
                          }}
                        >
                          <Typography variant="body2">CA Login</Typography>
                        </MenuItem>
                        <MenuItem
                          value={4}
                          style={{
                            color: "#F9921F",
                            backgroundColor: "#ececec",
                          }}
                        >
                          <Typography variant="body2">Lawyer Login</Typography>
                        </MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />
                <Controller
                  name="email_id"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      required
                      id="email_id"
                      name="email_id"
                      label="Email address"
                      // label={
                      //   <>
                      //     <Typography variant="subtitle1">Email address</Typography>
                      //   </>
                      // }
                      size="small"
                      sx={textFieldStyles("50px", "#F9921F")}
                      {...field}
                    />
                  )}
                />

                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      required
                      id="password"
                      size="small"
                      name="password"
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      sx={textFieldStyles("50px", "#F9921F")}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                              sx={{ color: "#F9921F" }}
                            >
                              <Iconify
                                icon={
                                  showPassword
                                    ? "eva:eye-fill"
                                    : "eva:eye-off-fill"
                                }
                              />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      {...field}
                    />
                  )}
                />

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="flex-end"
                  sx={{ m: 1 }}
                >
                  <Link
                    sx={{ cursor: "pointer", color: "#F9921F" }}
                    variant="subtitle2"
                    underline="hover"
                    onClick={() => setForgotPasswordModalOpen(true)}
                  >
                    Forgot password?
                  </Link>
                </Stack>
                {/* <Button
                fullWidth
                size="medium"
                type="submit"
                variant="contained"
                color="inherit"
                onClick={handleLogin}
                sx={{
                  color:"#ffffff",
                  borderRadius: '2rem',
                  backgroundColor: '#F9921F',
                  '&:hover': {
                    backgroundColor: '#f2bc80',
                  },
                }}
              >
                <Typography variant='h5' >LOGIN</Typography>
              </Button> */}
                <Button
                  fullWidth
                  size="medium"
                  type="submit"
                  variant="contained"
                  color="inherit"
                  sx={{
                    color: "#ffffff",
                    borderRadius: "2rem",
                    backgroundColor: "#F9921F",
                    "&:hover": {
                      backgroundColor: "#f2bc80",
                    },
                  }}
                >
                  <Typography variant="h5">LOGIN</Typography>
                </Button>
              </Stack>
            </form>
          </Card>
        </Stack>

        <Modal
          maskClosable={false}
          open={forgotPasswordModalOpen}
          onClose={() => setForgotPasswordModalOpen(false)}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "100vh",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left",
            }}
          >
            <Card
              sx={{
                p: "3rem",
                borderRadius: "10px",
                width: "22rem",
                position: "relative",
              }}
              maskClosable={false}
            >
              <IconButton
                onClick={() => setForgotPasswordModalOpen(false)}
                sx={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  zIndex: 1,
                  color: "#F9921F",
                  color: "#F9921F",
                }}
              >
                <Icon icon="system-uicons:close" />
              </IconButton>

              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  color: "#F9921F",
                  marginBottom: "1rem",
                }}
              >
                FORGOT PASSWORD
              </Typography>
              <Divider />

              <Controller
                name="email_id"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    required
                    id="email_id"
                    name="email_id"
                    label="Email address"
                    // label={
                    //   <>
                    //     <Typography variant="subtitle1">Email address</Typography>
                    //   </>
                    // }
                    size="small"
                    sx={{
                      width: "16rem",
                      mt: "1.5rem",
                      ...textFieldStyles("50px", "#F9921F", "#F9921F"),
                    }}
                    {...field}
                  />
                )}
              />
              <Button
                fullWidth
                size="medium"
                type="submit"
                variant="contained"
                color="inherit"
                // onClick={() => setForgotPasswordModalOpen(true)}
                onClick={handleForgotPassword}
                sx={{
                  mt: "1.5rem",
                  borderRadius: "2rem",
                  backgroundColor: "#F9921F",
                  "&:hover": {
                    backgroundColor: "#f2bc80",
                  },
                }}
              >
                <Typography variant="h5">Send</Typography>
              </Button>
            </Card>
          </Box>
        </Modal>

        <Modal
          maskClosable={false}
          open={resetModalOpen}
          onClose={() => setResetModalOpen(false)}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "100vh",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left",
            }}
          >
            <Card
              sx={{
                p: "3rem",
                borderRadius: "10px",
                width: "28rem",
                position: "relative",
              }}
              maskClosable={false}
            >
              <IconButton
                onClick={() => setResetModalOpen(false)}
                sx={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  zIndex: 1,
                  color: "#F9921F",
                  color: "#F9921F",
                }}
              >
                <Icon icon="system-uicons:close" />
              </IconButton>
              <Stack spacing={3} sx={{ width: "21rem", p: "2rem" }}>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "center",
                    color: "#F9921F",
                    marginBottom: "1rem",
                  }}
                >
                  RESET PASSWORD
                </Typography>

                <TextField
                  required
                  id="newPassword"
                  size="small"
                  name="newPassword"
                  label="NEW PASSWORD"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                          sx={{ color: "#F9921F" }}
                        >
                          <Iconify
                            icon={
                              showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                            }
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={textFieldStyles("50px", "#F9921F", "#F9921F")}
                  // onChange={handleChange}
                />
                <TextField
                  required
                  id="confirmPassword"
                  size="small"
                  name="confirmPassword"
                  label="CONFIRM PASSWORD"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                          sx={{ color: "#F9921F" }}
                        >
                          <Iconify
                            icon={
                              showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                            }
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={textFieldStyles("50px", "#F9921F", "#F9921F")}
                  // onChange={handleChange}
                />
                <Button
                  fullWidth
                  size="medium"
                  variant="contained"
                  color="inherit"
                  onClick={handleForgotPassword}
                  sx={{
                    mt: "1.5rem",
                    borderRadius: "2rem",
                    backgroundColor: "#F9921F",
                    "&:hover": {
                      backgroundColor: "#f2bc80",
                    },
                  }}
                >
                  OK
                </Button>
              </Stack>
            </Card>
          </Box>
        </Modal>
      </Box>
    </div>
  );
};

export default Login;
