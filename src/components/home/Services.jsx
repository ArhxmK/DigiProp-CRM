import React from "react";
import { Box, Typography, Grid, Stack, Button } from "@mui/material"; 
import videoWeb from "../../assets/Web-Video-1.mp4";
import LazyVideo from "../media/LazyVideo"; 
function Services() {
  const [active, setActive] = React.useState(0);
  const handlePlayVideo = () => {
    const videoElement = document.querySelector(".banner-video-web > video");
    if (videoElement) {
      videoElement.play();
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
      }
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: "fit-content",
        background: "#000",
        px: { xs: "15px", md: "67px" },
        py: { xs: "50px", md: "85px" },
      }}
    >
      <Grid container>
        {/* left video */}
        <Grid item xs={12} md={5}>
          <div className="services-video banner-video-web">
          <div className="tt-container-inner">
                <Button
                  id="clicktoview"
                  color="primary"
                  variant="text"
                  size="small"
                  sx={{ padding: "18px 15px", borderRadius: "99999px" ,cursor:"pointer" ,zIndex:20,color: "black","&:hover": {
                    backgroundColor: "grey",
                    color: "black",} }}
                  onClick={handlePlayVideo}
                >
                  Click To View
                </Button>
              </div>
            <div className="tt-container-inner"></div>
            <div className="tt-overlay"></div>
           
           <LazyVideo muted autoPlay loop src={videoWeb}></LazyVideo> 
          </div>
        </Grid>
        {/* right text */}
        <Grid item xs={12} md={6}>
          <Stack rowGap={{ xs: "40px", lg: "67px" }}>
            <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <Box
                sx={{ background: "#FFFFFF", height: "1px", width: "89px" }}
              ></Box>
              <Typography
                sx={{ color: "white", fontSize: "40px", fontWeight: 500 }}
              >
                What We Do
              </Typography>
            </Box>
            <Stack rowGap="0" sx={{ pl: { xs: "30px", sm: "-40px" } }}>
              <Box
                onClick={() => setActive(0)}
                sx={{
                  display: "flex",
                  alignItems: "self-start",
                  justifyContent: "flex-start",
                  gap: "20px",
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    color: `${active === 0 ? "white" : "gray"}`,
                    background: "none !important",
                    border: "none",
                  }}
                >
                  01
                </Typography>
                <Box
                  display="flex"
                  sx={{
                    px: "25px",
                    borderLeft: `${
                      active === 0 ? "1px white solid" : "1px gray solid"
                    }`,
                  }}
                  flexDirection="column"
                  rowGap="18px"
                  alignItems="start"
                >
                  <Typography
                    sx={{
                      fontSize: { md: "30px", xl: "40px", xs: "20px" },
                      fontWeight: 600,
                      color: active === 0 ? "white" : "#ADB5BD",
                    }}
                  >
                    Interactive 3D Virtual Tour
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "px6",
                      color: active === 0 ? "white" : "#ADB5BD",
                      lineHeight: "24px",
                    }}
                  >
                    We excel in crafting immersive 360-degree interactive
                    virtual tours. Our proficient team manages the entire
                    process, from capturing high-quality 2D photographs to
                    creating virtual tours.
                  </Typography>
                </Box>
              </Box>

              <Box
                onClick={() => setActive(1)}
                sx={{
                  display: "flex",
                  alignItems: "self-start",
                  justifyContent: "flex-start",
                  gap: "20px",
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    color: `${active === 1 ? "white" : "gray"}`,
                    background: "none !important",
                    border: "none",
                    py: "40px",
                  }}
                >
                  02
                </Typography>
                <Box
                  display="flex"
                  sx={{
                    px: "25px",
                    py: "40px",
                    ml: "-1px",
                    borderLeft: `${
                      active === 1 ? "1px white solid" : "1px gray solid"
                    }`,
                  }}
                  flexDirection="column"
                  rowGap="18px"
                  alignItems="start"
                >
                  <Typography
                    sx={{
                      fontSize: { md: "30px", xl: "40px", xs: "20px" },
                      fontWeight: 600,
                      color: active === 1 ? "white" : "#ADB5BD",
                    }}
                  >
                    Floor Plans:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "px6",
                      color: active === 1 ? "white" : "#ADB5BD",
                      lineHeight: "24px",
                    }}
                  >
                    With our custom designed detailed floor plans, we can
                    empower buyers to remotely explore properties making it a
                    hassle-free purchase and assisting them with there decision
                    making.
                  </Typography>
                </Box>
              </Box>

              <Box
                onClick={() => setActive(2)}
                sx={{
                  display: "flex",
                  alignItems: "self-start",
                  justifyContent: "flex-start",
                  gap: "20px",
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    color: `${active === 2 ? "white" : "gray"}`,
                    background: "none !important",
                    border: "none",
                  }}
                >
                  03
                </Typography>
                <Box
                  display="flex"
                  sx={{
                    px: "25px",
                    ml: "-1px",
                    borderLeft: `${
                      active === 2 ? "1px white solid" : "1px gray solid"
                    }`,
                  }}
                  flexDirection="column"
                  rowGap="18px"
                  alignItems="start"
                >
                  <Typography
                    sx={{
                      fontSize: { md: "30px", xl: "40px", xs: "20px" },
                      fontWeight: 600,
                      color: active === 2 ? "white" : "#ADB5BD",
                    }}
                  >
                    Marketing Your Property Virtually:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "px6",
                      color: active === 2 ? "white" : "#ADB5BD",
                      lineHeight: "24px",
                    }}
                  >
                    With Taurgo, clients can enhance their property visibility,
                    attract more leads, and expedite deal closures at a
                    significantly reduced cost.
                  </Typography>
                </Box>
              </Box>
            </Stack>
            <Box
              sx={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                justifyContent: "start",
                pl: { sm: "40px" },
              }}
            >
                <Button
  onClick={() => window.handleCalendlyButtonClick()}
  color="primary"
  variant="text"
  size="small"
  sx={{
    py: "20px",
    px: "20px",
    fontSize: "16px",
    borderRadius: "9999px",
    color: "black",
    "&:hover": {
      backgroundColor: "grey",
      color: "black",
    },
  }}
>
  Book a Consultant
</Button>


              {/* <Button
                color="primary"
                variant="contained"
                size="small"
                sx={{
                  py: "20px",
                  px: "20px",
                  fontSize: "16px",
                  border: "1px white solid",
                  borderRadius: "9999px",
                }}
              >
                Book a Session
              </Button> */}
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Services;
