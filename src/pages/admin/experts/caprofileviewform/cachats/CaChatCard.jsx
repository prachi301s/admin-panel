// import PropTypes from "prop-types";

// import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
// import { Card, Typography } from "@mui/material";
// import { primary } from "src/theme/palette";

// // ----------------------------------------------------------------------

// export function CaChatCard({
//   title,
//   total,
//   icon,
//   color = "primary",
//   sx,
//   ...other
// }) {
//   return (
//     <Card
//       component={Stack}
//       sx={{
//         width: "13rem",
//         height: "9.4rem",
//         backgroundImage: `url("../../../../../src/assets/assets/images/Frame 12.png")`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         "@media (max-width: 400px)": {
//           width: "50%",
//           height: "auto",
//         },
//       }}
//     >
//       {icon && (
//         <Box
//           sx={{
//             width: 100,
//             height: 100,
//             // mx: -4,
//             // my: -5,
//             borderRadius: 50,
//             background: "#FAFAFA4D",
//             justifyContent: "center",
//             // position: 'relative',
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
//     </Card>
//   );
// }

// CaChatCard.propTypes = {
//   color: PropTypes.string,
//   icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
//   sx: PropTypes.object,
//   title: PropTypes.string,
//   total: PropTypes.number,
// };
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Card, Typography } from "@mui/material";
import { fShortenNumber } from "../../../../../utils/format-number.js";
import { CustomCard } from "../../../../../../src/components/common/card/CustomCard.jsx";

export function CaChatCard({
  title,
  total,
  icon,
  color = "primary",
  sx,
  ...other
}) {
  return (
    
 <> 
 <CustomCard/>
   <Card
 component={Stack}
 sx={{
   position: "relative", 
   width: "13rem",
   height: "9.4rem",
   backgroundImage: `url("../../../../../assets/assets/expertcard.png")`,
   backgroundSize: "cover",
   backgroundPosition: "center",
   "@media (max-width: 400px)": {
     width: "50%",
     height: "auto",
   },
 }}
>

 
   <Box
     sx={{
       width: "1.8rem",
       height: "1.8rem",
       justifyContent: "center",
       alignItems: "center",
       textAlign: "center",
       borderRadius: "5px",
       background: "#FFE4C7",
       marginTop: "1.5rem",
       marginLeft: "1.1rem"
     }}
   >
     {icon}
   </Box>

 <Stack
   spacing={0.3}
   sx={{
     position: "absolute",
     bottom: 0,
     left: 0,
     margin:"1.7rem",
     justifyContent:"start",
     // padding: "0.5rem",
     // background: "rgba(255, 255, 255, 0.7)",
     width: "100%",
     borderBottomLeftRadius: "10px",
     borderBottomRightRadius: "10px",
   }}
 >
   <Typography
     variant="subtitle2"
     sx={{ color: "#ffffff", whiteSpace: "nowrap" }}
   >
     {title}
   </Typography>
   <Typography variant="subtitle1" color="#ffffff">
     {fShortenNumber(total)}
   </Typography>
 </Stack>
</Card></>
  );
}

CaChatCard.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
