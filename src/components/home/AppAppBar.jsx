import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import logo from "../../assets/images/logo.png";
import toggle from "../../assets/images/toggle.png";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";

const AppAppBar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(location.pathname.replace("/", ""));
  }, [location.pathname]);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <style>
        {`
        /* Navbar Styling */
        .app-navbar {
          font-family: Arial, sans-serif !important;
          font-size: 16px !important;
          font-weight: bold !important;
          color: black !important;
          position: fixed;
          top: 0;
          width: 100%;
          background-color: white !important;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 10px 0;
          z-index: 1000;
        }

        .app-navbar .MuiToolbar-root {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 16px;
          height: 60px;
          border: 1px solid #ddd;
          background-color: white;
          box-shadow: 0 0 1px rgba(2, 31, 59, 0.7);
          padding: 10px 20px;
        }

        .app-navbar .MuiButton-root {
          background-color: black !important;
          color: white !important;
        }

        .app-navbar .MuiButton-root:hover {
          background-color: rgba(0, 0, 0, 0.8) !important;
        }
        `}
      </style>

      <AppBar className="app-navbar">
        <Container maxWidth="lg">
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
              {/* Home with Image */}
              <Link to="/">
                <img src={logo} alt="Home" style={{ width: "36px", height: "auto", cursor: "pointer" }} />
              </Link>

              <Box sx={{ display: { xs: "none", md: "flex" }, px: "20px" }}>
                {[
                  { name: "Service Booking", path: "/login" },
                  { name: "About", path: "/about" }
                ].map((item) => (
                  <MenuItem key={item.path} sx={{ py: "6px", px: "8px" }}>
                    <Link className={`menu-link ${active === item.path.replace("/", "") ? "active" : ""}`} to={item.path}>
                      {item.name.toUpperCase()}
                    </Link>
                  </MenuItem>
                ))}
              </Box>
            </Box>

            {/* Register Button */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button variant="contained" component={Link} to="/signup">
                Register
              </Button>
            </Box>

            {/* Mobile Menu Toggle */}
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button variant="text" sx={{ minWidth: "40px", p: "6px", bgcolor: "black" }} onClick={toggleDrawer(true)}>
                <img src={toggle} alt="toggle" />
              </Button>
            </Box>

            {/* Drawer Menu */}
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ minWidth: "60dvw", p: 2, backgroundColor: "background.paper" }}>
                <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseIcon />
                  </IconButton>
                </Box>

                {/* Drawer Links */}
                {[
                  { name: "Home", path: "/" },
                  { name: "Service Booking", path: "/login" },
                  { name: "About", path: "/about" }
                ].map((item) => (
                  <MenuItem key={item.path}>
                    <Link className={`menu-link ${active === item.path.replace("/", "") ? "active" : ""}`} to={item.path}>
                      {item.name.toUpperCase()}
                    </Link>
                  </MenuItem>
                ))}

                <Divider />

                {/* Register Button in Drawer */}
                <MenuItem>
                  <Button variant="contained" sx={{ width: "100%" }} component={Link} to="/signup">
                    Register
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>

      <div className="app-navbar-spacer"></div> {/* Pushes content below navbar */}
    </>
  );
};

export default AppAppBar;
