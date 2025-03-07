import { Box, Grid, Typography } from "@mui/material";
import ExperienceData from "./ExperienceData";
import { data } from "../../components/cards/Data";
// import AboutSectionImage from "../../assets/images/AboutSection.png";
const Experience = () => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        paddingX: { lg: "100px", md: "100px", xs: "auto" },
        paddingTop: { lg: "76px", md: "76px", xs: "30px" },
      }}
    >
      <Grid
        container
        sx={{
          mx: "auto",
          overflow: "hidden",
        }}
      >
        <Grid sx={{ paddingBottom: "20px", paddingX: "15px" }}>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: { md: "40px", xs: "24px" },
              fontFamily: "Inter",
              color: "#303030",
              paddingLeft: "13px",
            }}
          >
            Why Choose Us
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              fontFamily: "Inter",
              color: "#5C5C5C",
              paddingLeft: "10px",
            }}
          >
            Taurgo’s competitive advantage lies in its ability to offer a unique
            and customizable virtual tour experience for businesses. Taurgo’s
            virtual tours are designed to be interactive and engaging, and they
            can be customized to fit the specific needs of each business.
            Additionally, Taurgo’s virtual tours can be integrated with other
            business systems.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} lg={6} sx={{ paddingY: "30px" }}>
          <ExperienceData data={data} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;
