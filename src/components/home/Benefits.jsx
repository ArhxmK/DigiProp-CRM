import { Grid, Box, Typography, Stack, Button } from "@mui/material";
import serviceimg from "../../assets/images/homePage_image_3.webp"
import LazyImage from "../media/LazyImage";
const Benefits = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: "fit-content",
        px: { xs: "15px", md: "67px" },
        py: { xs: "50px", md: "150px" },
        background: "#303030",
      }}
    >
      <Grid
        container
        sx={{ flexDirection: { xs: "column", lg: "row-reverse" } }}
      >
        {/* right video */}
        <Grid
          sx={{ display: "flex", minHeight: "600px", position: "relative" }}
          item
          xs={12}
          md={5}
        >
          <div className="benefits-video banner-video-web">
            <div className="tt-container-inner">
            </div>
            <div className="tt-overlay"></div>
            <LazyImage src={serviceimg} style={{
              height: '100%',
              width: "100%",
              position: "absolute",
              zIndex: 1,
              objectFit: "cover",
            }} />
          </div>
        </Grid>

        {/* left text */}
        <Grid item xs={12} md={6}>
          <Stack useFlexGap rowGap="60px">
            <Box>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: { xs: "24px", md: "32px", xl: "46px" },
                  fontWeight: 500,
                  letterSpacing: "-0.036em",
                  textAlign: "left",
                  background:
                    "-webkit-linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 130.95%);",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                How Does It Work
              </Typography>
            </Box>
            <Box>
              <Grid
                container
                justifyContent="space-between"
                columnGap="54px"
                rowGap="36px"
              >
                {/* Left video */}
                <Grid
                  sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
                  item
                  xs={12}
                >
                  <Box
                    sx={{ background: "white", height: "3px", width: "116px" }}
                  ></Box>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontWeight: "600",
                      color: "white",
                      lineHeight: "24px",
                    }}
                  >
                    We Create The Tour For You
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#8F8F8F",
                      lineHeight: "24px",
                    }}
                  >
                    We will create the tour for you, from taking pictures of the
                    property to delivering the virtual tour.
                  </Typography>
                </Grid>
                <Grid
                  sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
                  item
                  xs={12}
                >
                  <Box
                    sx={{ background: "white", height: "3px", width: "116px" }}
                  ></Box>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontWeight: "600",
                      color: "white",
                      lineHeight: "24px",
                    }}
                  >
                    You Create The Tour Yourself
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#8F8F8F",
                      lineHeight: "24px",
                    }}
                  >
                    This will included you taking the pictures, using our tools
                    to create the video yourself and uploading it onto your
                    chosen platform.
                  </Typography>
                </Grid>
                <Grid
                  sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
                  item
                  xs={12}
                >
                  <Box
                    sx={{ background: "white", height: "3px", width: "116px" }}
                  ></Box>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontWeight: "600",
                      color: "white",
                      lineHeight: "24px",
                    }}
                  >
                    Hybrid Version
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#8F8F8F",
                      lineHeight: "24px",
                    }}
                  >
                    This includes you taking the pictures and sending it to us
                    and our team will edit and create the tour for you.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
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
                  fontSize: { xs: "14px", sm: "16px" },
                  borderRadius: "9999px",
                  borderColor: "black",
                  bgcolor: "white",
                  color: "black","&:hover": {
                    backgroundColor: "grey",
                    color: "black",} }}
              >
                Book a Consultant
              </Button>

              {/* <Button
                                color="primary"
                                variant="contained"
                                size="small"
                                sx={{ py: "20px", px: "20px", fontSize: { xs: "14px", sm: "16px" }, borderRadius: "9999px", border: "1px white solid", bgcolor: "transparent", color: "white" }}
                            >
                                Book a Session
                            </Button> */}
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Benefits;
