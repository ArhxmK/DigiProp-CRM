import { Box, Grid, Typography, Button } from "@mui/material";
import ServiceInfoImage from "../../assets/images/serviceInfo.webp";
import LazyImage from "../media/LazyImage";
// import { Link } from "react-router-dom";

const ServiceInfo = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#2D7775",
          p: 2,

          paddingX: {
            lg: "105px",
            md: "105px",
            xs: "20px",
          },
          paddingY: {
            lg: "30px",
            md: "20px",
            xs: "10px",
          },
        }}
      >
        <Grid
          container
          spacing={0}
          sx={{
            //   height: { lg: "500px" },
            //   overflow: "hidden",
            "@media (max-width: 900px)": {
              flexDirection: "column-reverse",
              gap: "280px",
            },
            "@media (max-width: 700px)": {
              gap: "170px",
            },
            "@media (max-width: 500px)": {
              gap: "0px",
            },
          }}
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            item
            sm={12}
            md={7}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: { md: "28px", xs: "24px" },
                textAlign: "start",
                color: "#ffff",
                my: 4,
              }}
            >
              For more information on our services or to request a consultation,
              please use our contact form or call us directly.
            </Typography>
            <Box>
              <Button
                onClick={() => window.handleCalendlyButtonClick()}
                color="primary"
                variant="text"
                size="small"
                sx={{
                  marginX: { md: "10px", xs: "10px" },
                  py: "20px",
                  px: { md: "20px", xs: "10px" },
                  fontSize: { xs: "14px", sm: "16px" },
                  borderRadius: "9999px",
                  border: "1px solid white",
                  "&:hover": {
                    border: "1px solid white",
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
                      py: "20px",    px: {md:"20px",xs: "10px"}, marginY:'10px',
                       fontSize: { xs: "14px", sm: "16px" }, borderRadius: "9999px", border: "1px solid white",
                    }}
                  >
                   Book a Session
                  </Button> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <LazyImage
              src={ServiceInfoImage}
              alt="serviceInfo"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ServiceInfo;
