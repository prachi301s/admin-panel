import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Divider,
  TextField,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useAddCategory } from "../../hooks/categories/useAddCategory";

function AddSubCategoryForm({ isEdit, closeModal, setCloseModal }) {
  const { mutate: addCategory } = useAddCategory();
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const categoryData={
        category_name:data.category_name,
        image:data.image,
        status:data.status,
        description:data.description
    }
    console.log(categoryData)
    {
      addCategory(categoryData, {
        onSuccess: () => {
          console.log("added");
        },
        onError: (err) => {
          console.log(err);
        },
      });
    }
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    // setFormData((prevData) => ({
    //   ...prevData,
    //   banner_image: file,
    // }));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ p: "2rem" }}>
        <IconButton
          onClick={() => closeModal(true)}
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

        <Typography variant="h3" sx={{ textAlign: "left", color: "black" }}>
          {isEdit ? "Edit SubCategory" : "Add New SubCategory"}
        </Typography>
      </Box>

      <Divider />

      <Box sx={{ p: "2rem" }}>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12} sm={12}>
            <Typography
              sx={{
                fontSize: "15px",
                color: "gray",
                marginBottom: "7px",
              }}
            >
              Category Name{" "}
            </Typography>
            <TextField
              {...register("category_name", { required: true })}
              name="category_name"
              placeholder="Please Enter Title"
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <Typography
              sx={{
                fontSize: "15px",
                color: "gray",
                marginBottom: "7px",
              }}
            >
              Category
            </Typography>
            <Select
              {...register("category", { required: true })}
              defaultValue="Select"
              size="small"
              fullWidth
            >
              <MenuItem value="Select" disabled>
                <em>Select</em>
              </MenuItem>
              <MenuItem value="1">Approved</MenuItem>
              <MenuItem value="2">Pending</MenuItem>
              <MenuItem value="3">Reject</MenuItem>
            </Select>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography
              sx={{
                fontSize: "15px",
                color: "gray",
                marginBottom: "7px",
              }}
            >
              Status
            </Typography>
            <Select
              {...register("status", { required: true })}
              defaultValue="Select"
              size="small"
              fullWidth
            >
              <MenuItem value="Select" disabled>
                <em>Select</em>
              </MenuItem>
              <MenuItem value="1">Approved</MenuItem>
              <MenuItem value="2">Pending</MenuItem>
              <MenuItem value="3">Reject</MenuItem>
            </Select>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography
              sx={{
                fontSize: "15px",
                color: "gray",
                marginBottom: "7px",
              }}
            >
              Image
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
              <Typography
                sx={{
                  marginLeft: "2rem",
                  marginTop: "8px",
                  fontSize: "15px",
                }}
              ></Typography>
              <label htmlFor="image-upload">
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                  {...register("image", { required: true })}
                />
                <Button
                  variant="text"
                  component="span"
                  sx={{
                    width: "7rem",
                    bgcolor: "#EFEFEF",
                    color: "black",
                  }}
                >
                  Browse
                </Button>
              </label>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography sx={{ fontSize: "15px", color: "gray" }}>
              Description
            </Typography>
            <TextField
              required
              hiddenLabel
              name="description"
              {...register("description", { required: true })}
              //   onChange={handleChange}
              placeholder="Description"
              fullWidth
              size="small"
              multiline
              rows={4}
            />
          </Grid>

          {/* Other fields go here */}

          <Grid item md={6} xs={12}>
            <Box sx={{ display: "flex", justifyContent: "left", mt: "1rem" }}>
              <Button
                onClick={() => setCloseModal(true)}
                sx={{ mr: "1rem", bgcolor: "#2E394B", width: "8rem" }}
                variant="contained"
              >
                Cancel
              </Button>
              <Button sx={{ width: "8rem" }} variant="contained" type="submit">
                Save
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}

export default AddSubCategoryForm;
