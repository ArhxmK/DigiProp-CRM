import NavBar from "./NavBar";
import getLPTheme from "../components/home/getLPTheme";
import { PropTypes } from "prop-types";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Grid, Stack } from "@mui/material";
import SideBar from "./SideBar";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
  const LPtheme = createTheme(getLPTheme("light"));
  const [open, setOpen] = useState(true);
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
           {open ? ( 
            
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
              <SideBar 
              open={open}
              setOpen={setOpen}
               />
            </Grid> 
            
            
            ):( 
            
            
            <Grid
              item
              sm={0.7}
             
              xs={2}
              sx={{
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SideBar 
              open={open}
              setOpen={setOpen}
               />
            </Grid>
            )}

        {open ? ( 
            
            
            
            <Grid
              item
              xl={10.6}
              lg={10}
              md={9.6}
              sm={9.4}
              xs={10.2}
              sx={{
                paddingX: { md: "10px", sm: "20px", xs: "20px" },
                paddingY: { md: "30px", xs: "20px" },
                marginTop: "64px",
              }}
            >
              {children}
            </Grid>
            ):(<Grid
              item
              sm={11.3}
              xs={10}
              sx={{
                paddingX: { md: "30px", sm: "20px", xs: "20px" },
                paddingY: { md: "30px", xs: "20px" },
                marginTop: "64px",
              }}
            >
              {children}
            </Grid>)}   
          </Grid>
        </Stack>
      </ThemeProvider>
    </>
  );
};

export default DashboardLayout;
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
