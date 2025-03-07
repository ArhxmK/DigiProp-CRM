import { Grid, Box, Typography, Stack, Button } from "@mui/material";
import serviceimg from "../../assets/images/Ground_floor_with_logo.webp";
import LazyImage from "../media/LazyImage";
const ResearchOverview = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: "fit-content",
        px: { xs: "15px", md: "67px" },
        py: { xs: "50px", md: "85px" },
      }}
    >
      <Grid
        container
        justifyContent={{ xs: "space-between", lg: "flex-start" }}
      >
        {/* Left video */}
        <Grid
          sx={{ height: "100%" }}
          item
          xs={12}
          md={5}
          xl={5}
        >
          <div className="view_3d">
            <div className="tt-container-inner">
            </div>
            <LazyImage
              src={serviceimg}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </Grid>
        {/* Right text */}
        <Grid item xs={12} md={7} xl={7}>
          <Stack useFlexGap rowGap="60px">
            <Box>
              <Typography
                sx={{
                  fontFamily: "InterBold",
                  fontSize: { xs: "24px", md: "34px", xl: "48px" },
                  fontWeight: 500,
                  letterSpacing: "-0.036em",
                  textAlign: "left",
                  background:
                    "-webkit-linear-gradient(270deg, #495057 36.07%, rgba(73, 80, 87, 0) 171.21%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                The study found that people who view a listing that included a
                360 Virtual Tour, were twice as likely to make a customer
                inquiry.
              </Typography>
              <Typography sx={{ color: "#495057" }}>
                “www.estateagenttoday.co.uk”
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
                  md={5}
                >
                  <Box
                    sx={{ background: "black", height: "3px", width: "116px" }}
                  ></Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      lineHeight: "24px",
                      color: "#495057",
                    }}
                  >
                    Guided virtual viewings on properties boost conversion rates
                    by nearly 20%
                  </Typography>
                </Grid>
                <Grid
                  sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
                  item
                  xs={12}
                  md={5}
                >
                  <Box
                    sx={{ background: "black", height: "3px", width: "116px" }}
                  ></Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      lineHeight: "24px",
                      color: "#495057",
                    }}
                  >
                    Research found that 70% of lettings occurred after a virtual
                    tour with 66% of tenants going ahead without physically
                    viewing the property.
                  </Typography>
                </Grid>
                <Grid
                  sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
                  item
                  xs={12}
                  md={5}
                >
                  <Box
                    sx={{ background: "black", height: "3px", width: "116px" }}
                  ></Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      lineHeight: "24px",
                      color: "#495057",
                    }}
                  >
                    According to Google research, 67% of surveyed participants
                    reported wanting a virtual tour when looking at a listing.
                  </Typography>
                </Grid>
                <Grid
                  sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
                  item
                  xs={12}
                  md={5}
                >
                  <Box
                    sx={{ background: "black", height: "3px", width: "116px" }}
                  ></Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      lineHeight: "24px",
                      color: "#495057",
                    }}
                  >
                    In one trial amongst estate agents, properties with virtual
                    tours sold for 5.62% more than those without
                  </Typography>
                </Grid>
                <Grid
                  sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
                  item
                  xs={12}
                  md={6}
                >
                  <Box
                    sx={{ background: "black", height: "3px", width: "116px" }}
                  ></Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      lineHeight: "24px",
                      color: "#495057",
                    }}
                  >
                    GLettings listings with virtual tours had let rates 8%
                    better than those without.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResearchOverview;

export const Process = () => {
  return (
    <Stack
      rowGap="32px"
      sx={{
        px: { xs: "0px", sm: "15px", md: "67px" },
        py: { xs: "67px" },
        textAlign: "center",
        background: "#2D7775",
        // mt:"-82px"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "40px", md: "8px" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: { xs: "24px", md: "34px", xl: "48px" },
            fontWeight: 500,
            letterSpacing: "-0.036em",
            color: "white",
          }}
        >
          Our Process is Simple.
        </Typography>
        <Typography sx={{ color: "#CED4DA", px: { xs: "5px", sm: "0px" } }}>
          If you have your own 360 compatible camera, click create a session. If
          you want one of our network to produce everything for you, click book
          a session.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          justifyContent: "center",
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
          }}
        >
          Create a Session
        </Button>

        <Button
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
        </Button>
      </Box>
    </Stack>
  );
};
