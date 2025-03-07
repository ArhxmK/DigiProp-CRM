import { Grid, Typography, Box, Button } from "@mui/material";

import PropTypes from "prop-types";
import LazyImage from "../media/LazyImage";
export const linkstyle = {
  textDecoration: "none",
  color: "inherit",
};
const HeroSection = ({
  title,
  description,
  // buttonText1,
  imageHero,
  imageHeroMobile,
}) => {
  return (
    <Grid
      container
      sx={{
        height: "fit-content",
        justifyContent: "space-between",
        "@media (max-width: 900px)": {
          flexDirection: "column-reverse",
          flexWrap: "nowrap",
        },
      }}
    >
      <Grid item xs={12} sm={12} md={7} lg={7}>
        <Box
          sx={{
            backgroundColor: "white",
            // height: { lg: "300px", xs: "auto" },
            paddingTop: { lg: "197px", md: "130px", xs: "0px" },
            // paddingBottom: { lg: "80px", md: "80px", xs: "40px" },
            paddingBottom: "20px",

            paddingLeft: { lg: "105px", md: "40px", xs: "20px" },
            paddingRight: "20px",
            textAlign: "start",
          }}
        >
          <Typography
            variant=""
            sx={{
              background:
                "linear-gradient(89.17deg, #272727 12.15%, rgba(39, 39, 39, 0.82) 66.35%, rgba(39, 39, 39, 0.09) 131.13%, rgba(39, 39, 39, 0) 158.14%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              fontSize: { md: "62px", xs: "24px" },
              paddingTop: { xs: "10px", sm: "100px" },
              fontWeight: "700",
              lineHeight: "72px",
              fontFamily: "InterBold",
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              color: "#5C5C5C",
              width: "100%",
              marginTop: { md: "20px", xs: "10px" },
              fontSize: { md: "16px", xs: "16px" },
              fontFamily: "inter",
              fontWeight: "400",
              marginBottom: { md: "42px", xs: "30px" },
            }}
          >
            {description}
          </Typography>
          <Box>
            <Button
              color="primary"
              variant="contained"
              onClick={() => window.handleCalendlyButtonClick()}
              size="small"
              sx={{
                py: "20px",
                marginTop: "10px",
                px: { md: "20px", xs: "10px" },
                fontSize: { md: "16px", xs: "14px" },
                border: "1px white solid",
                marginRight: "10px",
                marginBottom: "30px",
                borderRadius: "9999px",
              }}
            >
              Book a Consultant
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item overflow="hidden" xs={12} sm={12} md={5} lg={4}>
        <div className="HeroImagePositon">
          <LazyImage
            width="100%"
            className="HeroBackGroundImage"
            height="100%"
            style={{
              width:"100%",
              height:"100%"
            }}
            src={imageHero}
            alt="Process"
          />
          <div className="Overlay"></div>
          <div className="Image_div">
            <LazyImage
              src={imageHeroMobile}
              className="HeroMobileImage"
              alt=""
              width="100%"
            />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageHero: PropTypes.string.isRequired,
  imageHeroMobile: PropTypes.string.isRequired,
};
export default HeroSection;
