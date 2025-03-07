import { Grid, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CaptureSection = ({ title, subtitle, buttonLabel, bgcolor }) => {
  return (
    <div>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: bgcolor || "#F7F7F7",
          padding: "50px",
          paddingLeft: {
            lg: "105px",
            md: "105px",
            xs: "20px",
          },
        }}
      >
        <Grid item xs={12} md={9} lg={9}>
          <Typography
            sx={{
              fontFamily: "inter",
              fontWeight: 500,
              fontSize: { lg: "28px", xs: "20px" },
              color: "#303030",
              marginBottom: "20px",
            }}
          >
            {/* Capture with an iPhone/Android in a snap */}
            {title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "inter",
              fontWeight: 300,
              fontSize: { lg: "18px", xs: "16px" },
              color: "#495057",
            }}
          >
            {/* Follow these simple steps to create, upload and finish Taurgo tours
            with your iOS/Android device. */}
            {subtitle}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          lg={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/products">
            <Button
              color="primary"
              variant="contained"
              size="small"
              sx={{
                py: { lg: "20px", md: "30px" },
                px: { md: "20px", xs: "40px" },
                fontSize: { xs: "14px", sm: "16px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: { xs: "20px" },

                border: "1px white solid",
                marginRight: "10px",
                borderRadius: "9999px",
              }}
            >
              {/* Get Started */}
              {buttonLabel}
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
CaptureSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  bgcolor: PropTypes.string,
};

export default CaptureSection;
