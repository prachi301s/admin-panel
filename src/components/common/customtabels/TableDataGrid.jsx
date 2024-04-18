import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Button,
  Typography,
  Tooltip,
  makeStyles,
  IconButton,
} from "@mui/material";
import { Icon } from "@iconify/react";
import TableSearchBar from "./TableSearchBar";

export default function TableDataGrid({
  columns,
  rows,
  pageSize,
  tableTitle,
  buttonTitle,
  buttonOnClick,
  tooltipTitle,
  icon,
  isSearch,
  handleSearch,
  isAdd,
  isIcon,
  iconClick,
  children
}) {
  return (
    <div>
      <Box
        sx={{
          p: "1rem",
          bgcolor: "#FFFFFF",
          display: "flex",
          justifyContent: "space-between",
          //   mb: '1rem',
          //   color: 'primary.main',
          p: "1rem",
          bgcolor: "#FFFFFF",
          display: "flex",
          justifyContent: "space-between",
          //   mb: '1rem',
          //   color: 'primary.main',
        }}
      >
        <Typography variant="h3">{tableTitle}</Typography>
        {isSearch ? (
          <div
            style={{
              width: "25.563rem",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <TableSearchBar handleSearch={handleSearch} />
          </div>
        ) : (
          ""
        )}

        {isAdd ? (
          <Tooltip title={tooltipTitle}>
            <Button
              variant="outlined"
              onClick={buttonOnClick}
              sx={{ width: "auto", height: "2rem" }}
            >
              <>
                <Icon icon={icon} style={{ marginRight: "0.5rem" }} />
                <Typography variant="subtitle1">{buttonTitle}</Typography>
              </>
            </Button>
          </Tooltip>
        ) : (
          ""
        )}
        {isIcon ? (
          <Tooltip title={tooltipTitle}>
            <IconButton
              // variant="text"
              onClick={iconClick}
              sx={{ width: "auto", height: "2rem" }}
              // color={"black"}
            >
              {icon}
            </IconButton>
          </Tooltip>
        ) : (
          ""
        )}
      </Box>
      <div style={{ height: "auto", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter={true}
          disableColumnMenu
          columnVisibilityModel={true}
        />
      </div>
    </div>
  );
}
