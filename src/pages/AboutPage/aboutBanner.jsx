import { Grid, Typography, Box, Button } from "@mui/material";
import "../../assets/css/heroSection.css";
import PropTypes from "prop-types";
import ContactFromData from "../../components/cards/ContactFromData";
import Logo from "../../assets/images/Taurgo Logo.png";
import LazyImage from "../../components/media/LazyImage";
const logoStyle = {
  width: "40px",
  height: "auto",
};
const linkstyle = {
  textDecoration: "none",
  color: "inherit",
};
const AboutHeroSection = ({
  title,
  description,

  imageHero,
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
        <div>
          <Box
            sx={{
              backgroundColor: "white",
              // height: { lg: "300px", xs: "auto" },
              paddingTop: { lg: "197px", md: "130px", xs: "40px" },
              // paddingBottom: { lg: "116px", md: "116px", xs: "40px" },

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
                fontSize: { lg: "62px", xs: "24px" },
                // paddingTop: { xs: "10px", sm: "100px" },
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
                marginTop: { lg: "20px", xs: "10px" },
                fontSize: { lg: "16px", xs: "16px" },
                fontFamily: "inter",
                fontWeight: "400",
                marginBottom: { lg: "42px", xs: "30px" },
              }}
            >
              {description}
            </Typography>

            <Button
              color="primary"
              variant="contained"
              size="small"
              sx={{
                py: "20px",
                px: { md: "20px", xs: "10px" },
                fontSize: { xs: "14px", sm: "16px" },
                marginBottom: "10px",
                border: "1px white solid",
                marginRight: "10px",
                borderRadius: "9999px",
              }}
            >
              <a href="#modal-10" style={linkstyle}>
                Contact Us
              </a>
            </Button>
            <div data-ml-modal id="modal-10">
              <a href="#" className="modal-overlay"></a>
              <div className="modal-dialog modal-dialog-lg">
                <a href="#" className="modal-close">
                  &times;
                </a>
                <h3
                  style={{
                    color: "#286167",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "8px",
                    padding: "18px",
                  }}
                >
                  <LazyImage src={Logo} style={logoStyle} alt="logo" /> Contact Us
                </h3>
                <div
                  className="modal-content newspaper"
                  style={{ padding: "13px 10px" }}
                >
                  <ContactFromData />
                </div>
              </div>
            </div>
          </Box>
        </div>
      </Grid>
      <Grid item overflow="hidden" xs={12} sm={12} md={5} lg={5}>
        <div className="HeroImagePositon aboutPosition">
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
          <div className="aboutOverlay"></div>
        </div>
      </Grid>
    </Grid>
  );
};

AboutHeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageHero: PropTypes.string.isRequired,
  // imageHeroMobile: PropTypes.string.isRequired,
};
export default AboutHeroSection;
