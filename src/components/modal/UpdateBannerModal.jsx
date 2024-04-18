




// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Card,
//   Grid,
//   IconButton,
//   Modal,
//   Typography,
//   TextField,
//   Button,
//   Divider,
// } from "@mui/material";
// import { Icon } from "@iconify/react";
// import { useAddBanner } from "../../../hooks/banners/useAddBanner";

// export default function Updates({
//   isModalVisible,
//   setIsModalVisible,
//   isEditMode,
// }) {
//   const [formData, setFormData] = useState({
//     event_name: "",
//     event_date: "",
//     banner_image: null,
//   });
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//   const { mutate, isLoading, isError, isSuccess } = useAddBanner();

//   useEffect(() => {
//     if (isSuccess) {
//       // Reset the form data and set the form submission flag upon successful mutation
//       setFormData({
//         event_name: "",
//         event_date: "",
//         banner_image: null,
//       });
//       setIsFormSubmitted(true);
//     }
//   }, [isSuccess]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Check if all required fields are filled
//     if (
//       formData.event_name.trim() === "" ||
//       formData.event_date.trim() === "" ||
//       formData.banner_image === null
//     ) {
//       // If any required field is empty, return and prevent form submission
//       return;
//     }
//     // If all required fields are filled, submit the form
//     mutate(formData);
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setFormData((prevData) => ({
//       ...prevData,
//       banner_image: file,
//     }));
//   };


//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 800,
//     bgcolor: "background.paper",
//     // border: '2px solid #000',
//     boxShadow: 24,
//     borderRadius: "10px",
//     // p: 4,
//   };




//   return (
//     <div  style={{width:'100%'}}    >
//       <Modal open={isModalVisible} onClose={() => setIsModalVisible(false)}>
//               <Box sx={style}>

       
//           <form onSubmit={handleSubmit}>
//             <Box sx={{ pt: "2rem", pr: "3rem", pl: "2rem", pb: "1.5rem" }}>
//               <IconButton
//                 onClick={() => setIsModalVisible(false)}
//                 sx={{
//                   position: "absolute",
//                   top: "1.6rem",
//                   right: "3rem",
//                   zIndex: 1,
//                   color: "#F9921F",
//                }}
//               >
//                 <Icon icon="system-uicons:close" />
//               </IconButton>

//               <Grid sx={{ width: "100%" }}>
//                 <Typography
//                   variant="h3"
//                   sx={{
//                     // marginTop: '2rem',
//                     justifyContent: "left",
//                     textAlign: "left",
//                     color: "Black",
//                   }}
//                 >
//                   {isEditMode ? "Edit Banner" : "Add Banner"}
//                 </Typography>
//               </Grid>
//             </Box>

//             <Divider />

//             <Box sx={{ pt: "2rem", pr: "4rem", pl: "3rem", pb: "3rem" }}>
//               <Grid container      spacing={2}>
//                 <Grid item md={6}     xs={8}>
//                   <Typography
//                     sx={{ marginBottom: "5px", fontSize: "15px", color: "gray" }}
//                   >
//                     Event Name{" "}
//                   </Typography>
//                   <TextField
//                     required
//                     hiddenLabel
//                     name="event_name"
//                     value={formData.event_name}
//                     onChange={handleChange}
//                     placeholder="Please Enter Title"
//                     fullWidth
//                     size="small"
//                   />
//                 </Grid>

//                 <Grid item  md={6}     xs={8}>
//                   <Typography
//                     sx={{ marginBottom: "5px", fontSize: "15px", color: "gray" }}
//                   >
//                     Event Date{" "}
//                   </Typography>
//                   <TextField
//                     required
//                     name="event_date"
//                     value={formData.event_date}
//                     onChange={handleChange}
//                     hiddenLabel
//                     type="date"
//                     fullWidth
//                     InputLabelProps={{
//                       shrink: true,
//                     }}
//                     size="small"
//                   />
//                 </Grid>

//                 <Grid item  md={6}     xs={8}>
//                   <Typography
//                     sx={{ marginBottom: "5px", fontSize: "15px", color: "gray" }}
//                   >
//                     Event Image
//                   </Typography>
//                   <Box
//                     sx={{
//                       height: "40px",
//                       border: "1px solid lightgray",
//                       borderRadius: "5px",
//                       display: "flex",
//                       justifyContent: "space-between",
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignContent: "center",
//                       }}
//                     >
//                       <Typography
//                         sx={{
//                           marginLeft: "2rem",
//                           textAlign: "center",
//                           marginTop: "8px",
//                           fontSize: "15px",
//                         }}
//                       >
//                         {formData.banner_image ? formData.banner_image.name : "Choose Image"}
//                       </Typography>
//                       <Icon
//                       style={{
//                         position: "fixed",
//                         left: "13rem",
//                         top: "15.2rem",
//                       }}
//                       icon="solar:gallery-bold"
//                       width="20px"
//                       height="20px"
//                     />
//                     </Box>
//                     <label htmlFor="image-upload">
//                       <input
//                         id="image-upload"
//                         type="file"
//                         accept="image/*"
//                         style={{ display: "none" }}
//                         onChange={handleImageChange}
//                       />
//                       <Button
//                         sx={{ width: "7rem", bgcolor: "#EFEFEF", color: "black" }}
//                         variant="text"
//                         component="span"
//                       >
//                         Browse
//                       </Button>
//                     </label>
//                   </Box>
//                 </Grid>

//                 <Grid item xs={12}>
//                   <Box
//                     sx={{
//                       width: "20rem",
//                       display: "flex",
//                       justifyContent: "space-between",
//                       marginTop: "2.5rem",
//                     }}
//                   >
//                     <Button
//                       onClick={() => setIsModalVisible(false)}
//                       sx={{ width: "9rem", bgcolor: "#2E394B" }}
//                       variant="contained"
//                     >
//                       Cancel
//                     </Button>
//                     <Button
//                       sx={{ width: "9rem" }}
//                       variant="contained"
//                       type="submit"
//                       disabled={isLoading}
//                     >
//                       {isLoading ? "Adding..." : "Save"}
//                     </Button>
//                   </Box>
//                 </Grid>

//                 <Grid item xs={12}>
//                   {isError && <div>Error adding banner</div>}
//                   {isFormSubmitted && <div>Banner added successfully!</div>}
//                 </Grid>
//               </Grid>
//             </Box>
//           </form>
        
//         </Box>
//       </Modal>
//     </div>
//   );
// }







import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  IconButton,
  Modal,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useAddBanner } from "../../hooks/banners/useAddBanner";
// import { useAddBanner } from "../../../hooks/banners/useAddBanner";

export default function UpdateBannerModal({
  isModalVisible,
  setIsModalVisible,
  isEditMode,
}) {
  const [formData, setFormData] = useState({
    event_name: "",
    event_date: "",
    banner_image: null,
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { mutate, isLoading, isError, isSuccess } = useAddBanner();

  useEffect(() => {
    if (isSuccess) {
      // Reset the form data and set the form submission flag upon successful mutation
      setFormData({
        event_name: "",
        event_date: "",
        banner_image: null,
      });
      setIsFormSubmitted(true);
    }
  }, [isSuccess]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all required fields are filled
    if (
      formData.event_name.trim() === "" ||
      formData.event_date.trim() === "" ||
      formData.banner_image === null
    ) {
      // If any required field is empty, return and prevent form submission
      return;
    }
    // If all required fields are filled, submit the form
    mutate(formData);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      banner_image: file,
    }));
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: 800,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "10px",
  };

  return (
    <div style={{ width: "100%" }}>
      <Modal open={isModalVisible} onClose={() => setIsModalVisible(false)}>
        <Box sx={modalStyle}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ p: "2rem" }}>
              <IconButton
                onClick={() => setIsModalVisible(false)}
                sx={{
                  position: "absolute",
                  top: "1.6rem",
                  right: "3rem",
                  zIndex: 1,
                  color: "#F9921F",
                }}
              >
                <Icon icon="system-uicons:close" />
              </IconButton>
              <Grid sx={{ width: "100%" }}>
                <Typography variant="h3" sx={{ textAlign: "left", color: "Black" }}>
                  {isEditMode ? "Edit Banner" : "Add Banner"}
                </Typography>
              </Grid>
            </Box>

            <Divider />

            <Box sx={{ p: { xs: "1rem", sm: "2rem" } }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography sx={{ marginBottom: "5px", fontSize: "15px", color: "gray" }}>
                    Event Name{" "}
                  </Typography>
                  <TextField
                    required
                    hiddenLabel
                    name="event_name"
                    value={formData.event_name}
                    onChange={handleChange}
                    placeholder="Please Enter Title"
                    fullWidth
                    size="small"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography sx={{ marginBottom: "5px", fontSize: "15px", color: "gray" }}>
                    Event Date{" "}
                  </Typography>
                  <TextField
                    required
                    name="event_date"
                    value={formData.event_date}
                    onChange={handleChange}
                    hiddenLabel
                    type="date"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    size="small"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography sx={{ marginBottom: "5px", fontSize: "15px", color: "gray" }}>
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
                        {formData.banner_image ? formData.banner_image.name : "Choose Image"}
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
                        onChange={handleImageChange}
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
                      onClick={() => setIsModalVisible(false)}
                      sx={{ width: "9rem", bgcolor: "#2E394B" }}
                      variant="contained"
                    >
                      Cancel
                    </Button>
                    <Button
                      sx={{ width: "9rem" }}
                      variant="contained"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? "Adding..." : "Save"}
                    </Button>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  {isError && <div>Error adding banner</div>}
                  {isFormSubmitted && <div>Banner added successfully!</div>}
                </Grid>
              </Grid>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
