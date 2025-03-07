import { Stack } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../home/AppAppBar";
import Footer from "../home/Footer";
import getLPTheme from "../home/getLPTheme";
import PropTypes from "prop-types";
const Wrapper = ({ children }) => {
  const LPtheme = createTheme(getLPTheme("light"));
  return (
    <>
      <ThemeProvider theme={LPtheme}>
        <Stack
          useFlexGap
          sx={{
            minHeight: "60vh",
            backgroundColor: "white",
            color: "black",
            paddingLeft: { xs: "20px", lg: "100px" },
            paddingRight: { xs: "20px", lg: "100px" },
            paddingTop: { xs: "80px", lg: "150px" },
          }}
        >
          <AppAppBar />
          {children}
        </Stack>
        <Footer />
      </ThemeProvider>
    </>
  );
};
Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
