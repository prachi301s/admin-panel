import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import { Icon } from "@iconify/react";
import {
  Badge,
  Button,
  Card,
  Container,
  Grid,
  Switch,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import AdminCategoryTable from "../../../components/table/AdminCategoryTable";

const Category = () => {
  return (
    <>
      <AdminCategoryTable />
    </>
  );
};
export default Category;
