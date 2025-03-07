import { AppBar, Toolbar, Button, Grid } from "@mui/material"; 
import { useNavigate } from "react-router-dom";

const NavBar = () => { 
  const navigate = useNavigate();

  const handleLogout = () => {
    const designer = localStorage.getItem("designer");

    if (designer) {
      localStorage.removeItem("designer");
      navigate("/designer/login"); // Properly redirect for designers
      return;
    }

    // Remove all admin-related authentication
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("user"); 
    localStorage.removeItem("admin"); // Make sure to remove admin session too

    navigate("/adminlogin"); // Properly redirect to admin login
  };

  return (
    <AppBar
      position="fixed"
      minHeight="74px"
      sx={{
        minHeight: "74px",
        justifyContent: "center",
        backgroundColor: "#ffff",
        boxShadow: "none",
        borderBottom: "1px solid #DEE2E6",
        zIndex: 4,
      }}
    >
      <Toolbar sx={{ paddingLeft: "0px !important" }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xl={1.4} lg={2} md={2.4} sm={2.6} xs={1.8}></Grid>
          <Grid
            item
            textAlign="end"
            xl={10.6}
            lg={10}
            md={9.6}
            sm={9.4}
            xs={10.2}
          >
            <Button
              color="primary"
              variant="contained"
              size="small"
              onClick={handleLogout}
              sx={{
                paddingX: { sm: "49px", xs: "29px" },
                paddingY: "20px",
                borderRadius: "9999px",
                backgroundColor: "black"
              }}
            >
              Logout
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
