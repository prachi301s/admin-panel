import { useRef, useState } from "react";

import {
  Box,
  Stack,
  Typography,
  TextField,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Divider,
  Card,
  CardContent,
  Container,
} from "@mui/material";

// import {
//   freeTime,
//   languages,
//   categories,
//   skillsOptions,
//   experienceYear,
// } from "src/options";

import {
  freeTime,
  languages,
  categories,
  skillsOptions,
  experienceYear,
} from "../../../option";

import AvailabilityField from "./AvailabilityField ";
import profileimg from "../../../../src/assets/caassets/profileimg.jpg";
// import BankForm from './BankForm';
// import Form from './CAProfile';

// ----------------------------------------------------------------------

const CaProfile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    language: "",
    photo: "",
    category: "",
    skills: "",
    experience: "",
    pricePerMinute: "",
    callActive: "",
    chatActive: "",
    freeAvailability: "",
    freeTimeAvailability: "",
    gender: "",
    password: "",
    aboutMe: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };
  const fileInputRef = useRef(null);

  const handleUploadProfile = () => {
    // Trigger click event on file input
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Handle file selection logic here
    console.log("Selected file:", file);
  };

  // const ITEM_HEIGHT = 48;
  // const ITEM_PADDING_TOP = 8;
  // const MenuProps = {
  //   PaperProps: {
  //     style: {
  //       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
  //       width: 250,
  //     },
  //   },
  // };

  return (
    <Container
      sx={{
        backgroundColor: "white",
        padding: "50px",
        borderRadius: "15px",
        boxShadow: "5",
      }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}>
        <Typography variant="h4">Profile Settings</Typography>
        <Grid item xs={3}>
          <Button>Reset</Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#5BE0FE",
              "&:hover": {
                backgroundColor: "#0a58ca",
              },
            }}>
            Update Profile
          </Button>
        </Grid>
      </Stack>
      <Divider sx={{ mb: "20px" }} />
      <Box sx={{ width: "170px", marginBottom: "30px" }}>
        <Typography variant="body1">Your Profile Picture</Typography>
        <Box
          sx={{
            border: "dotted 2px",
            textAlign: "center",
            borderRadius: "15px",
            boxShadow: "5",
            padding: "10px",
            background: "#F6F6F6",
          }}>
          <Box
            sx={{ justifyContent: "center", alignItems: "center", width: 150 }}>
            <Grid item>
              {/* Input element for file selection */}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              {/* Label for the input element */}
              <label htmlFor="upload-button">
                {/* Image placeholder */}
                <img
                  src={profileimg}
                  alt="Profile"
                  style={{
                    width: "130px",
                    height: "130px",
                    // borderRadius: '50%',
                  }}
                />
              </label>
            </Grid>
            <Grid item marginTop={1}>
              {/* Upload Profile button */}
              <Button
                id="upload-button"
                variant="contained"
                // color="primary"
                onClick={handleUploadProfile}
                sx={{
                  borderRadius: "50px",
                  backgroundColor: "#5BE0FE",
                  "&:hover": {
                    backgroundColor: "#0a58ca",
                  },
                }}>
                Upload Profile
              </Button>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ mb: "20px" }} />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Full Name"
              fullWidth
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Language"
              fullWidth
              name="language"
              value={formData.language}
              onChange={handleChange}>
              {languages.map((language) => (
                <MenuItem key={language} value={language}>
                  {language}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="file"
              label="Upload your Photo"
              fullWidth
              name="photo"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Category"
              fullWidth
              name="category"
              value={formData.category}
              onChange={handleChange}>
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Skills"
              fullWidth
              name="skills"
              value={formData.skills}
              onChange={handleChange}>
              {skillsOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Experience"
              fullWidth
              name="experience"
              value={formData.experience}
              onChange={handleChange}>
              {experienceYear.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Price per Minute"
              fullWidth
              name="pricePerMinute"
              value={formData.pricePerMinute}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormGroup sx={{ display: "inline" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.callActive}
                    onChange={handleChange}
                    name="callActive"
                  />
                }
                label="Call Active"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.chatActive}
                    onChange={handleChange}
                    name="chatActive"
                  />
                }
                label="Chat Active"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.freeAvailability}
                    onChange={handleChange}
                    name="freeAvailability"
                  />
                }
                label="Free Availability"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Free Time Availability"
              fullWidth
              name="freeTimeAvailability"
              value={formData.freeTimeAvailability}
              onChange={handleChange}>
              {freeTime.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <Typography>Gender</Typography>
              <RadioGroup
                row
                value={formData.gender}
                onChange={handleChange}
                name="gender">
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="password"
              label="Change Password"
              fullWidth
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>About Me</Typography>
            <TextField
              label="About Me"
              multiline
              fullWidth
              rows={4}
              name="aboutMe"
              value={formData.aboutMe}
              onChange={handleChange}
            />
          </Grid>
          <Grid sx={{ margin: "20px" }}>
            <AvailabilityField />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default CaProfile;
