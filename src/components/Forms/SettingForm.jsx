import { Icon } from "@iconify/react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export default function SettingForm() {
  return (
    <Box sx={{ bgcolor: "white" }}>
      <Box sx={{ pt: "2rem", pl: "2rem", pr: "2rem", pb: "1rem" }}>
        <Grid sx={{ width: "100%" }}>
          <Typography
            variant="h3"
            sx={{ textAlign: "left", color: "Black", fontWeight: "600" }}
          >
            {/* {isEditMode ? "Edit Banner" : "Add Banner"} */}
            Setting
          </Typography>
        </Grid>
      </Box>
      <Divider />

      <Box sx={{ pl: "4rem", pr: "4rem", pt: "2rem" }}>
        <Grid container columnSpacing={12} spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ marginBottom: "5px", fontSize: "15px", color: "gray" }}
            >
              Admin Name{" "}
            </Typography>
            <TextField
              required
              hiddenLabel
              name="event_name"
              // value={formData.event_name}
              // onChange={handleChange}
              placeholder="Admin name"
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              sx={{ marginBottom: "5px", fontSize: "15px", color: "gray" }}
            >
              Password{" "}
            </Typography>
            <TextField
              required
              id="outlined-password-input"
              // label="Password"
              type="password"
              //   autoComplete="current-password"
              fullWidth
              size="small"
              placeholder="*************"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              sx={{ marginBottom: "5px", fontSize: "15px", color: "gray" }}
            >
              Admin Email{" "}
            </Typography>
            <TextField
              required
              //   id="outlined-password-input"
              // label="Password"
              type="Email"
              //   autoComplete="current-password"/
              fullWidth
              size="small"
              placeholder="Please Enter Email"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ marginBottom: "5px", fontSize: "15px", color: "gray" }}
            >
              Confirm-Password{" "}
            </Typography>
            <TextField
              required
              id="outlined-password-input"
              // label="Password"
              type="password"
              autoComplete="current-password"
              fullWidth
              size="small"
              placeholder="Please Enter Confirm-Password"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ marginBottom: "5px", fontSize: "15px", color: "gray" }}
            >
              Contact Email{" "}
            </Typography>
            <TextField
              required
              //   id="outlined-password-input"
              // label="Password"
              //   type="password"
              //   autoComplete="current-password"
              fullWidth
              size="small"
              placeholder="Please Enter Contact Email"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ marginBottom: "5px", fontSize: "15px", color: "gray" }}
            >
              Contact Address{" "}
            </Typography>
            <TextField
              required
              //   id="outlined-password-input"
              // label="Password"
              //   type="password"
              //   autoComplete="current-password"
              fullWidth
              size="small"
              placeholder="Please Enter Contact Address"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ marginBottom: "5px", fontSize: "15px", color: "gray" }}
            >
              Contact Number{" "}
            </Typography>
            <TextField
              required
              //   id="outlined-password-input"
              // label="Password"
              type="Number"
              //   autoComplete="current-password"
              fullWidth
              size="small"
              placeholder="Please Enter Contact  Number"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ marginBottom: "5px", fontSize: "15px", color: "gray" }}
            >
              Event Image
            </Typography>
            <Box
              sx={{
                height: "40px",
                border: "1px solid lightgray",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Typography
                  sx={{
                    marginLeft: "2rem",
                    textAlign: "center",
                    marginTop: "8px",
                    fontSize: "15px",
                  }}
                >
                  {/* {formData.banner_image ? formData.banner_image.name : "Choose Image"} */}
                  Choose Image
                </Typography>
                {/* <Icon
                        style={{
                          position: "fixed",
                          left: "13rem",
                          top: "15.7rem",
                        }}
                        icon="solar:gallery-bold"
                        width="20px"
                        height="20px"
                      /> */}
              </Box>
              <label htmlFor="image-upload">
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  // onChange={handleImageChange}
                />
                <Button
                  sx={{ width: "7rem", bgcolor: "#EFEFEF", color: "black" }}
                  variant="text"
                  component="span"
                >
                  Browse
                </Button>
              </label>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ pt: "4rem", pl: "2rem", pr: "2rem", pb: "1rem" }}>
        <Grid sx={{ width: "100%" }}>
          <Typography
            variant="h3"
            sx={{ textAlign: "left", color: "Black", fontWeight: "600" }}
          >
            {/* {isEditMode ? "Edit Banner" : "Add Banner"} */}
            Api Credential Setting
          </Typography>
        </Grid>
      </Box>
      <Divider />

      <Box sx={{ pl: "4rem", pr: "4rem", pt: "2rem", pb: "4rem" }}>
        <Grid container columnSpacing={12} spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ marginBottom: "5px", fontSize: "15px", color: "gray" }}
            >
              CA api key{" "}
            </Typography>
            <TextField
              required
              hiddenLabel
              name="CA api key"
              // value={formData.event_name}
              // onChange={handleChange}
              placeholder="Admin name"
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              sx={{ marginBottom: "5px", fontSize: "15px", color: "gray" }}
            >
              Map key{" "}
            </Typography>
            <TextField
              required
              id="outlined-password-input"
              // label="Password"
              type="password"
              autoComplete="current-password"
              fullWidth
              size="small"
              placeholder="Please Enter Email"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              sx={{ marginBottom: "5px", fontSize: "15px", color: "gray" }}
            >
              CA api userid{" "}
            </Typography>
            <TextField
              required
              id="outlined-password-input"
              // label="Password"
              type="text"
              autoComplete="current-password"
              fullWidth
              size="small"
              placeholder="admin@admin.com"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ marginBottom: "5px", fontSize: "15px", color: "gray" }}
            >
              CA Percentage{" "}
            </Typography>
            <TextField
              required
              id="outlined-password-input"
              // label="Password"
              type="Number"
              autoComplete="current-password"
              fullWidth
              size="small"
              placeholder="0%"
            />
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                width: "20rem",
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2.5rem",
              }}
            >
              <Button
                //   onClick={() => setIsModalVisible(false)}
                sx={{ width: "9rem", bgcolor: "#2E394B" }}
                variant="contained"
              >
                Cancel
              </Button>
              <Button
                sx={{ width: "9rem" }}
                variant="contained"
                type="submit"
                //   disabled={isLoading}
              >
                Save
                {/* {isLoading ? "Adding..." : "Save"} */}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>


















{/* <Box sx={{ pt: "4rem", pl: "0.7em", pr: "2rem", pb: "1rem" }}>
  <Grid sx={{ width: "100%" }}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "11rem",
        alignItems: "center",
      }}
    >
      <Icon icon="solar:arrow-left-linear" width="24px" height="24px" />
      <Typography
        variant="h4"
        sx={{ textAlign: "left", color: "Black", fontWeight: "600" }}
      >
        All Chats
      </Typography>
    </Box>
  </Grid>
</Box>
<Divider />

<Box sx={{ pl: "2rem", pr: "2rem", pt: "1rem", pb: "1rem" }}>
  <Grid>
    <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
      <Box sx={{ flex: "0 0 auto", marginRight: { xs: '0', sm: '1rem' } }}>
        <Avatar
          sx={{ width: 54, height: 54 }}
          alt="Travis Howard"
          src="/static/images/avatar/2.jpg"
        />
      </Box>
      <Box sx={{ flex: "1 1 auto", marginRight: { xs: '0', sm: '1rem' }, minWidth: 0 }}> 
        <Typography     >Jacob Jones</Typography>
        <Typography>It’s sound good will connect with you soon </Typography>
      </Box>
      <Box sx={{ flex: "0 0 auto" }}>
        <Button variant="contained">
          <Icon icon="mdi:eye" width="24px" height="24px" /> View Chats
        </Button>
      </Box>
    </Box>
  </Grid>
</Box> */}



    </Box>
  );
}
