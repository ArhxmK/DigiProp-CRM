import { Box, Stack, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import GridViewIcon from "@mui/icons-material/GridView";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, useLocation } from "react-router-dom";
import { linkstyle } from "../components/cards/heroSection";
import { useState } from "react";
import Logo from "../assets/images/logo.png";

const SideBar = ({open,setOpen}) => {
  const location = useLocation();
  const [active, setActive] = useState("");
 
  const { pathname } = location;

  const handleChange = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useState(() => {
    if (pathname === "/dashboard") {
      setActive("");
    } else if (pathname === "/dashboard/users") {
      setActive("users");
    } else if (pathname === "/dashboard/orders") {
      setActive("orders");
    } else {
      setActive("");
    }
  }, [pathname]);
  return (
    <>
      <Box
        sx={{
          flex: "initial",
          borderRight: "2px solid #DEE2E6",
          fontWeight: "bold",
          maxWidth: "220px",
          gap: "0px",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          height: "100vh",
          fontFamily: "InterBold",
          overflow: "hidden",
          background: "#D3D3D3",
          zIndex: 30,
          paddingTop: 0,
        }}
      >
        <Box
          sx={{
            zIndex: 330,
            position: "absolute",
            right: -4,
            top: 70,
            cursor: "pointer",
            backgroundColor: "white",
            color: "#000000",
            padding: "6px",
            borderRadius: "7px",
            // display: { md: "block", sm: "none" },
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleChange}
        >
          {open ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
        </Box>
        <Link to="/dashboard">
          <Box
            sx={{
              padding: "8px",
              display: "flex",

              gap: "12px",
              cursor: "pointer",
              alignItems: "center",
              borderBottom: "1px #DEE2E6 solid",
              justifyContent: "center",
              paddingX: { md: "24px", xs: "12px" },
              // paddingY:'15px'
            }}
          >
            <Box sx={{ width: "36px" }}>
              <img
                src={Logo}
                alt="logo"
                style={{ width: "100%", height: "100%", marginTop: "10px" }}
              />
            </Box>

          </Box>
        </Link>
        <Stack useFlexGap gap="10px">
          <Link style={linkstyle} to="/dashboard">
            <Box
              sx={{
                marginTop: "40px",
                padding: "12px",
                display: "flex",
                justifyContent: { xs: "center", sm: "start" },
                gap: "12px",
                alignItems: "center",
                cursor: "pointer",
                color: active === "" ? "#000000" : "#6C757D",
                fontFamily: "InterBold",
                background: active === "" ? "#f0f0f0" : "transparent",
                paddingX: { md: "24px", xs: "12px" },
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              <GridViewIcon />

              {open && (
                <Typography
                  variant=""
                  color=""
                  sx={{
                    padding: "4px",
                    fontFamily: active === "" ? "InterBold" : "Inter",
                    fontWeight: active === "" ? 700 : 500,
                    fontSize: "18px",
                    lineHeight: "20px",
                    letterSpacing: "-0.02em",
                    textAlign: "left",
                    // display: { xs: "none", sm: "block", lg: "block" },
                  }}
                >
                  Dashboard
                </Typography>
              )}
            </Box>
          </Link>
          <Link style={linkstyle} to="/dashboard/users">
            <Box
              sx={{
                padding: "12px",
                display: "flex",
                justifyContent: { xs: "center", sm: "start" },
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
                color: active === "users" ? "#000000" : "#6C757D",
                background: active === "users" ? "#f0f0f0" : "transparent",
                fontFamily: "InterBold",
                paddingX: { md: "24px", xs: "12px" },
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              <PersonOutlineIcon />
              {open && (
                <Typography
                  variant=""
                  color=""
                  sx={{
                    padding: "4px",
                    fontFamily: active === "users" ? "InterBold" : "Inter",
                    fontWeight: active === "users" ? 700 : 500,
                    background: active === "users" ? "#f0f0f0" : "transparent",
                    fontSize: "18px",
                    lineHeight: "20px",
                    letterSpacing: "-0.02em",
                    textAlign: "left",
                    // display: { xs: "none", sm: "block", lg: "block" },
                  }}
                >
                  Users
                </Typography>
              )}
            </Box>
          </Link>
          <Link style={linkstyle} to="/dashboard/orders">
            <Box
              sx={{
                padding: "12px",
                paddingX: { md: "24px", xs: "12px" },
                display: "flex",
                justifyContent: { xs: "center", sm: "start" },
                alignItems: "center",
                gap: "12px",
                background: active === "orders" ? "#f0f0f0" : "transparent",
                color: active === "orders" ? "#000000" : "#6C757D",
                fontFamily: "InterBold",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              <ShoppingCartOutlinedIcon />

              {open && (
                <Typography
                  variant=""
                  color=""
                  sx={{
                    padding: "4px",
                    fontFamily: active === "orders" ? "InterBold" : "Inter",
                    fontWeight: active === "orders" ? 700 : 500,
                    fontSize: "18px",
                    lineHeight: "20px",
                    letterSpacing: "-0.02em",
                    textAlign: "left",
                    // display: { xs: "none", sm: "block", lg: "block" },
                  }}
                >
                  Orders
                </Typography>
              )}
            </Box>
          </Link>
        </Stack>
      </Box>
    </>
  );
};

export default SideBar;
