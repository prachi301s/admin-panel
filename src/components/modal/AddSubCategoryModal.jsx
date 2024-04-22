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
//   MenuItem,
//   Select,
// } from "@mui/material";
// import { Icon } from "@iconify/react";
// import { useAddBanner } from "../../hooks/banners/useAddBanner";

// import AddSubCategoryForm from "../../components/Forms/AddSubCategoryForm";

// export default function AddSubCategoryModal({
//   isModalVisible,
//   setIsModalVisible,
//   isEditMode,
// }) {
//   const [formData, setFormData] = useState({
//     event_name: "",
//     event_date: "",
//     banner_image: null,
//     description: "", // Added description to formData
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
//         description: "", // Reset description as well
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

//   return (
//     <div>
//       <Modal open={isModalVisible} onClose={() => setIsModalVisible(false)}>
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: "90%", // Adjusted width for responsiveness
//             maxWidth: 900, // Added maxWidth for larger screens
//             bgcolor: "background.paper",
//             boxShadow: 24,
//             borderRadius: "10px",
//             overflowY: "auto", // Added to enable scrolling on small screens
//           }}
//         >
        
//           <AddSubCategoryForm isEdit={isEditMode} closeModal={() => setIsModalVisible(false)}/>
//         </Box>
//       </Modal>
//     </div>
//   );
// }
