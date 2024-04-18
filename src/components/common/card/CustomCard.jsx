import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { fShortenNumber } from "../../../utils/format-number";
import { primary, secondary } from "../../../../src/theme/palette";
import { Icon } from "@iconify/react";
// import img from '../../../../src/assets/assets/images/Frame 12.png';
export function CustomCard({
  title,
  total,
  icon,
  color = "primary",
  sx,
  ...other
}) {
  return (
    <Card sx={{ position: "relative" }}>
      <Box
        component="img"
        src="../../../../src/assets/assets/images/Frame12.png"
        sx={{
          width: "100%",
          height: "189.51px",
          position: "absolute",
          top: 0,
          left: 0,
          //   zIndex: -1,
            // mb:10
        }}
      />
      <CardContent
        sx={{
          mb: 4,
          //   textAlign: "center",
          //   alignItems: "center",
          position: "relative",
          zIndex: 1,
          flexDirection: "column",
        }}>
        <Stack direction={"column"} spacing={2} m={2}>
          <Box
            sx={{
              width: 28,
              height: 28,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              // mb: 6,
              //   ml: 0,
              //   mr: 5,
              // mx: -4,
              // my: -5,
              // position: "relative",
              borderRadius: "5px",
              background: "#FFE4C7",
            }}>
            <Icon icon={icon} color="#FE870A" />
          </Box>
          <Typography variant="subtitle1" color="white">
            {title}
          </Typography>
          <Typography variant="subtitle2" color="white">
            {total}
          </Typography>
        </Stack>
        {/* <Box
              sx={{
                width: 100,
                height: 100,
                // mx: -4,
                // my: -5,
                borderRadius: 50,
                background: "#FAFAFA4D",
                justifyContent: "center",
                position: 'absolute',
              }}
            > */}

        {/* </Box> */}
      </CardContent>
    </Card>

    //     <Box
    //       component={Stack}
    //       sx={{
    //         mt:15,
    //         // width: "205.72px",
    //         width: "340.32px",
    // height: "189.51px",
    // borderRadius: "13.35px",

    //         boxShadow: "0px 3.226966381072998px 16.134830474853516px 0px #26323840",

    //         // width: "100%",
    //         // height: 150,
    //         backgroundImage: `url('../../../../src/assets/assets/images/Frame12.png')`,
    //         backgroundSize: "cover",
    //         backgroundPosition: "center",
    //         // ../../../public/assets/images/Frame 12.png
    //       }}
    //     >
    //       {icon && (
    //         <Box
    //           sx={{
    //             width: 100,
    //             height: 100,
    //             mx: -4,
    //             my: -5,
    //             borderRadius: 50,
    //             background: "#FAFAFA4D",
    //             justifyContent: "center",
    //             position: 'relative',
    //           }}
    //         >
    //           <Box
    //             sx={{
    //               width: 28,
    //               height: 28,
    //               justifyContent: "center",
    //               alignItems: "center",
    //               textAlign: "center",
    //               // mb: 6,
    //               ml: 0,
    //               // position: "relative",
    //               borderRadius: "5px",
    //               background: "#FFE4C7",
    //             }}
    //           >
    //             {icon}
    //           </Box>
    //         </Box>
    //       )}
    //       <Stack spacing={0.5}>
    //         <Typography
    //           variant="subtitle1"
    //           sx={{ color: primary.main, whiteSpace: "nowrap" }}
    //         >
    //           {title}
    //         </Typography>
    //         <Typography variant="subtitle2" color={primary.main}>
    //           {fShortenNumber(total)}
    //         </Typography>
    //       </Stack>
    //     </Box>
  );
}
