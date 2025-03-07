import getLPTheme from "../../components/home/getLPTheme";
import { PropTypes } from "prop-types";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Grid, Stack } from "@mui/material";
import SideBar from "./playSidebar";
import NavBar from "../../adminDashboard/NavBar";

const PlaygroundLayout = ({ children }) => {
  const LPtheme = createTheme(getLPTheme("light"));
  return (
    <>
      <ThemeProvider theme={LPtheme}>
        <Stack
          useFlexGap
          gap="0px"
          sx={{
            backgroundColor: "#ffff",
            minHeight: "calc(100vh - 100px)",

            height: "100%",
          }}
        >
          <NavBar />
          <Grid container spacing={0}>
            <Grid
              item
              xl={1.4}
              lg={2}
              md={2.4}
              sm={2.6}
              xs={1.8}
              sx={{
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SideBar />
            </Grid>

            <Grid
              item
              xl={10.6}
              lg={10}
              md={9.6}
              sm={9.4}
              xs={10.2}
              sx={{ padding: { sm: "30px", xs: "10px" }, marginTop: "64px" }}
            >
              {children}
            </Grid>
          </Grid>
        </Stack>
      </ThemeProvider>
    </>
  );
};

export default PlaygroundLayout;
PlaygroundLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
