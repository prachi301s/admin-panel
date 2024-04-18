import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // height: "100vh",
      }}>
      <CircularProgress color="secondary" size="lg" thickness={5} />
    </Box>
  );
};

export default Loader;
