// import { useState, useEffect } from "react";
// import {
//   Box,
//   Grid,
//   IconButton,
//   Modal,
//   Typography,
//   TextField,
//   Button,
//   Divider,
// } from "@mui/material";
// import { Icon } from "@iconify/react";
// import { useAddBanner } from "../../../src/hooks/banners/useAddBanner";

// export default function ServicesModal({
//   isModalVisible,
//   setIsModalVisible,
//   isEditMode,
// }) {
//   const [formData, setFormData] = useState({
//     event_name: "",
//     event_date: "",
//     banner_image: null,
//     service_name: "",
//     category: "",
//     sub_category: "",
//     discount_price: "",
//     status: "",
//     features: [],
//     description: "",
//   });
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//   const { mutate, isLoading, isError, isSuccess } = useAddBanner();

//   useEffect(() => {
//     if (isSuccess) {
//       setFormData({
//         event_name: "",
//         event_date: "",
//         banner_image: null,
//         service_name: "",
//         category: "",
//         sub_category: "",
//         discount_price: "",
//         status: "",
//         features: [],
//         description: "",
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

//   const handleFeatureChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedFeatures = [...formData.features];
//     updatedFeatures[index] = { ...updatedFeatures[index], [name]: value };
//     setFormData((prevData) => ({
//       ...prevData,
//       features: updatedFeatures,
//     }));
//   };

//   const addFeature = () => {
//     if (formData.features.length < 2) {
//       setFormData((prevData) => ({
//         ...prevData,
//         features: [...prevData.features, { title: "", price: "" }],
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (
//       formData.event_name.trim() === "" ||
//       formData.event_date.trim() === "" ||
//       formData.banner_image === null ||
//       formData.service_name.trim() === "" ||
//       formData.category.trim() === "" ||
//       formData.sub_category.trim() === "" ||
//       formData.discount_price.trim() === "" ||
//       formData.status.trim() === "" ||
//       formData.description.trim() === ""
//     ) {
//       return;
//     }
//     mutate(formData);
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setFormData((prevData) => ({
//       ...prevData,
//       banner_image: file,
//     }));
//   };

//   return (
//     <Modal open={isModalVisible} onClose={() => setIsModalVisible(false)}>
//       <Box
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           width: "90%",
//           maxWidth: 800,
//           bgcolor: "background.paper",
//           boxShadow: 24,
//           borderRadius: "10px",
//           overflow: "auto",
//           outline: 0,
//           maxHeight: "90vh",
//           overflowY: "auto",
//           //   marginTop: "90px",
//         }}>
//         <form onSubmit={handleSubmit}>
//           <Box p={2}>
//             <IconButton
//               onClick={() => setIsModalVisible(false)}
//               sx={{
//                 position: "absolute",
//                 top: 0,
//                 right: 0,
//                 color: "#F9921F",
//               }}>
//               <Icon icon="system-uicons:close" />
//             </IconButton>
//             <Typography variant="h4" mb={2}>
//               {isEditMode ? "Edit Banner" : "Add Service"}
//             </Typography>
//             <Divider />
//           </Box>
//           <Box sx={{ padding: "50px" }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} md={6}>
//                 <Typography
//                   sx={{
//                     marginBottom: "5px",
//                     fontSize: "15px",
//                     color: "gray",
//                   }}>
//                   Service Name
//                 </Typography>
//                 <TextField
//                   required
//                   hiddenLabel
//                   name="service_name"
//                   value={formData.service_name}
//                   onChange={handleChange}
//                   placeholder="Please Enter Title"
//                   fullWidth
//                   size="small"
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <Typography
//                   sx={{
//                     marginBottom: "5px",
//                     fontSize: "15px",
//                     color: "gray",
//                   }}>
//                   price
//                 </Typography>
//                 <TextField
//                   required
//                   hiddenLabel
//                   name="service_price"
//                   value={formData.service_price}
//                   onChange={handleChange}
//                   placeholder="Please Enter Price"
//                   fullWidth
//                   size="small"
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <Typography
//                   sx={{
//                     marginBottom: "5px",
//                     fontSize: "15px",
//                     color: "gray",
//                   }}>
//                   Category
//                 </Typography>
//                 <TextField
//                   required
//                   hiddenLabel
//                   name="category"
//                   value={formData.category}
//                   onChange={handleChange}
//                   placeholder="Category"
//                   fullWidth
//                   size="small"
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <Typography
//                   sx={{
//                     marginBottom: "5px",
//                     fontSize: "15px",
//                     color: "gray",
//                   }}>
//                   Sub Category
//                 </Typography>
//                 <TextField
//                   required
//                   hiddenLabel
//                   name="sub_category"
//                   value={formData.sub_category}
//                   onChange={handleChange}
//                   placeholder="Sub Category"
//                   fullWidth
//                   size="small"
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <Typography
//                   sx={{
//                     marginBottom: "5px",
//                     fontSize: "15px",
//                     color: "gray",
//                   }}>
//                   Discount Price
//                 </Typography>
//                 <TextField
//                   required
//                   hiddenLabel
//                   name="discount_price"
//                   value={formData.discount_price}
//                   onChange={handleChange}
//                   placeholder="Discount Price"
//                   fullWidth
//                   size="small"
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <Typography
//                   sx={{
//                     marginBottom: "5px",
//                     fontSize: "15px",
//                     color: "gray",
//                   }}>
//                   Status
//                 </Typography>
//                 <TextField
//                   required
//                   hiddenLabel
//                   name="status"
//                   value={formData.status}
//                   onChange={handleChange}
//                   placeholder="Status"
//                   fullWidth
//                   size="small"
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <Typography
//                   sx={{
//                     marginBottom: "5px",
//                     fontSize: "15px",
//                     color: "gray",
//                   }}>
//                   Features
//                 </Typography>
//                 <TextField
//                   required
//                   hiddenLabel
//                   name="features"
//                   value={formData.event_name}
//                   onChange={handleChange}
//                   placeholder="Please Enter Features"
//                   fullWidth
//                   size="small"
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <Typography
//                   sx={{
//                     marginBottom: "5px",
//                     fontSize: "15px",
//                     color: "gray",
//                   }}>
//                   Image
//                 </Typography>
//                 <Box
//                   sx={{
//                     height: "40px",
//                     border: "1px solid lightgray",
//                     borderRadius: "5px",
//                     display: "flex",
//                     justifyContent: "space-between",
//                   }}>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: "center",
//                       alignContent: "center",
//                     }}>
//                     <Typography
//                       sx={{
//                         marginLeft: "2rem",
//                         textAlign: "center",
//                         marginTop: "8px",
//                         fontSize: "15px",
//                       }}>
//                       {formData.banner_image
//                         ? formData.banner_image.name
//                         : "Choose Image"}
//                     </Typography>
//                     {/* <Icon
//                       style={{
//                         position: "absolute",
//                         left: "13rem",
//                         top: "15.3rem",
//                       }}
//                       icon="solar:gallery-bold"
//                       width="20px"
//                       height="20px"
//                     /> */}
//                   </Box>
//                   <label htmlFor="image-upload">
//                     <input
//                       id="image-upload"
//                       type="file"
//                       accept="image/*"
//                       style={{ display: "none" }}
//                       onChange={handleImageChange}
//                     />
//                     <Button
//                       sx={{
//                         width: "7rem",
//                         bgcolor: "#EFEFEF",
//                         color: "black",
//                       }}
//                       variant="text"
//                       component="span">
//                       Browse
//                     </Button>
//                   </label>
//                 </Box>
//               </Grid>
//               <Grid item xs={12}>
//                 <Button
//                   variant="outlined"
//                   onClick={addFeature}
//                   sx={{ mb: "10px" }}>
//                   Add Feature
//                 </Button>
//                 {formData.features.slice(0, 1).map((feature, index) => (
//                   <Box
//                     key={index}
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       marginBottom: "10px",
//                       border: "0.5px solid #FE870E",
//                       borderRadius: "10px",
//                       padding: "10px",
//                     }}>
//                     <Grid item xs={6}>
//                       <Typography
//                         sx={{
//                           marginBottom: "5px",
//                           fontSize: "15px",
//                           color: "gray",
//                         }}>
//                         Title
//                       </Typography>
//                       <TextField
//                         required
//                         hiddenLabel
//                         name="title"
//                         value={feature.title}
//                         onChange={(e) => handleFeatureChange(index, e)}
//                         placeholder="Title"
//                         size="small"
//                       />
//                     </Grid>
//                     <Grid item xs={6}>
//                       <Typography
//                         sx={{
//                           marginBottom: "5px",
//                           fontSize: "15px",
//                           color: "gray",
//                         }}>
//                         Price
//                       </Typography>
//                       <TextField
//                         required
//                         hiddenLabel
//                         name="price"
//                         value={feature.price}
//                         onChange={(e) => handleFeatureChange(index, e)}
//                         placeholder="Price"
//                         size="small"
//                       />
//                     </Grid>
//                   </Box>
//                 ))}
//               </Grid>
//               <Grid item xs={12}>
//                 <Typography
//                   sx={{
//                     marginBottom: "5px",
//                     fontSize: "15px",
//                     color: "gray",
//                   }}>
//                   Description
//                 </Typography>
//                 <TextField
//                   required
//                   hiddenLabel
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   placeholder="Service Description"
//                   fullWidth
//                   size="small"
//                   multiline
//                   rows={4}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Box
//                   sx={{
//                     width: "20rem",
//                     display: "flex",
//                     justifyContent: "space-between",
//                     marginTop: "2.5rem",
//                   }}>
//                   <Button
//                     onClick={() => setIsModalVisible(false)}
//                     sx={{ width: "9rem", bgcolor: "#2E394B" }}
//                     variant="contained">
//                     Cancel
//                   </Button>
//                   <Button
//                     sx={{ width: "9rem" }}
//                     variant="contained"
//                     type="submit"
//                     disabled={isLoading}>
//                     {isLoading ? "Adding..." : "Save"}
//                   </Button>
//                 </Box>
//               </Grid>
//               <Grid item xs={12}>
//                 {isError && <div>Error adding banner</div>}
//                 {isFormSubmitted && <div>Banner added successfully!</div>}
//               </Grid>
//             </Grid>
//           </Box>
//         </form>
//       </Box>
//     </Modal>
//   );
// }
