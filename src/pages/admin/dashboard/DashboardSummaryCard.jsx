import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { fShortenNumber } from "../../../../src/utils/format-number";
import { primary, secondary } from "../../../../src/theme/palette";
import { Button, CardMedia, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import frame1 from "../../../../src/assets/assets/images/frame1.png";
import Iconify from "../../../../src/components/iconify/index";
// ----------------------------------------------------------------------
const DashboardSummaryCard = ({
  title,
  total,
  icon,
  color = "primary",
  sx,
  ...other
}) => {
  return (
    <Box
      component={Stack}
      spacing={1}
      sx={{
        border: "1px solid #FE870A",
        borderRadius: 1,
        display: "flex",
        flexDirection: "column",
        pb: 1,
        "& >:nth-child(2)": {
          marginLeft: 1,
        },

        // justifyContent: 'center',
      }}
    >
      <Card
        // component={Stack}
        spacing={1}
        direction="column"
        sx={{
          borderRadius: "6px 6px 0px 0px",
          background:
            "linear-gradient(310.87deg, #FFC587 -9.84%, #FE870A 56.82%)",
          ...sx,
          position: "relative",
        }}
        {...other}
      >
        {icon && (
          <Box
            sx={{
              width: 100,
              height: 100,
              mx: -4,
              my: -5,
              borderRadius: 50,
              background: "#FAFAFA4D",
              justifyContent: "center",
              // position: 'relative',
            }}
          >
            <Box
              sx={{
                width: 28,
                height: 28,
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                mt: 6,
                ml: "40px",
                position: "absolute",
                borderRadius: "5px",
                background: "#FFE4C7",
              }}
            >
              {icon}
            </Box>
          </Box>
        )}

        <Stack spacing={0.5} mt={5} position="relative">
          <Typography
            variant="subtitle2"
            sx={{ color: "white", whiteSpace: "nowrap" }}
          >
            {title}
          </Typography>
          <Typography variant="h4" color={"white"}>
            {fShortenNumber(total)}
          </Typography>
        </Stack>
      </Card>
      <Button
        variant="text"
        sx={{
          width: "10rem",
          height: 20,
          // bgcolor: 'orange',
          color: "orange",
          display: "flex",
          justifyContent: "flex-start",
          pl: "10px",
          "&:hover": {
            background:
              "linear-gradient(310.87deg, #FFC587 -9.84%, #FE870A 56.82%)",
            color: "white",
            justifyContent: "space-between",
            "& .MuiButton-endIcon": {
              color: "white",
            },
          },
        }}
      >
        <Typography variant="subtitle2"> View All</Typography>
        <Iconify icon="gravity-ui:arrow-right" width="18px" height="18px" />
      </Button>
    </Box>
  );
};
export default DashboardSummaryCard;
// DashboardSummaryCard.propTypes = {
//   color: PropTypes.string,
//   icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
//   sx: PropTypes.object,
//   title: PropTypes.string,
//   total: PropTypes.number,
// };
export function DashboardSummaryCardOne({
  title,
  total,
  icon,
  color = "primary",
  photo,
  sx,
  ...other
}) {
  return (
    <Card
      component={Stack}
      spacing={4}
      direction="row"
      justifyContent="space-between"
      sx={{
        px: 2,
        py: 2,
        borderRadius: 1,

        ...sx,
      }}
      {...other}
    >
      <Stack spacing={0.5}>
        <Typography
          variant="subtitle1"
          sx={{ color: primary.contrastText, whiteSpace: "nowrap" }}
        >
          {title}
        </Typography>
        <Typography variant="h4" color={secondary.contrastText}>
          {fShortenNumber(total)}
        </Typography>
        {icon && (
          <Box
            sx={{
              width: 28,
              height: 28,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",

              borderRadius: "5px",
              background: "#FE870A40",
            }}
          >
            {icon}
          </Box>
        )}
      </Stack>
      <Box sx={{ width: 100, height: 100 }}>
        <img width="100%" src={photo} />
      </Box>
    </Card>
  );
}

DashboardSummaryCardOne.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};

export function DashboardSummaryCardTwo({
  title,
  total,
  icon,
  color = "primary",
  sx,
  ...other
}) {
  return (
    <Card
      component={Stack}
      sx={{
        // width: "205.72px",
        height: "90.36px",
        borderRadius: "4.84px",
        boxShadow: "0px 3.226966381072998px 16.134830474853516px 0px #26323840",

        width: "100%",
        // height: 150,
        backgroundImage: `url('../../../../src/assets/assets/images/grp-1.png')`,
        backgroundSize: "cover",
        // backgroundPosition: "center",
        // ../../../public/assets/images/Frame 12.png
      }}
    >
      {icon && (
        <Box
          sx={{
            width: 100,
            height: 100,
            // mx: -4,
            // my: -5,
            borderRadius: 50,
            background: "#FAFAFA4D",
            justifyContent: "center",
            // position: 'relative',
          }}
        >
          <Box
            sx={{
              width: 28,
              height: 28,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              // mb: 6,
              ml: 0,
              // position: "relative",
              borderRadius: "5px",
              background: "#FFE4C7",
            }}
          >
            {icon}
          </Box>
        </Box>
      )}
      <Stack spacing={0.5}>
        <Typography
          variant="subtitle1"
          sx={{ color: primary.main, whiteSpace: "nowrap" }}
        >
          {title}
        </Typography>
        <Typography variant="subtitle2" color={primary.main}>
          {fShortenNumber(total)}
        </Typography>
      </Stack>
    </Card>
  );
}
