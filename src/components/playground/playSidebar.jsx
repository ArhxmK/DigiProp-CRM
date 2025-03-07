import { Box, Typography } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { linkstyle } from "../../pages/products/CartBanner";

const SideBar = () => {
  const location = useLocation();
  const [active, setActive] = useState("");
  const { pathname } = location;
  useState(() => {
    if (pathname === "/playground") {
      setActive("playground");
    } else if (pathname === "/dashboard/users") {
      setActive("users");
    } else if (pathname === "/dashboard/orders") {
      setActive("orders");
    }
  }, [pathname]);
  return (
    <>
      <Box
        sx={{
          flex: "initial",
          borderRight: "2px solid #DEE2E6",
          // borderRight: '2px solid',
          fontWeight: "bold",
          // borderColor: "#DEE2E6",
          maxWidth: "220px",
          paddingX: { md: "24px", xs: "0px" },
          paddingY: { md: "24px", xs: "24px" },
          gap: "0px",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          marginTop: { sm: "64px", xs: "34px" },
          height: "100vh",
          fontFamily: "InterBold",
          overflow: "hidden",
        }}
      >
        <Link style={linkstyle} to="/playground">
          <Box
            sx={{
              // height: '10%',
              padding: "12px",
              display: "flex",
              justifyContent: "start",
              gap: "12px",
              alignItems: "center",
              cursor: "pointer",
              color: active === "playground" ? "#2D7775" : "#6C757D",
              fontFamily: "InterBold",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            <GridViewIcon />

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
                display: { xs: "none", sm: "block", lg: "block" },
              }}
            >
              PlayGround
            </Typography>
          </Box>
        </Link>
      </Box>
    </>
  );
};

export default SideBar;
