import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const ExperienceData = ({ data }) => {
  return (
    <Box sx={{ paddingLeft: "20px", paddingBottom: "30px" }}>
      {data.map((item, index) => (
        <Box
          key={index}
          sx={{
            paddingBottom: { md: "50px", xs: "30px" },
          }}
        >
          <Box
            sx={{
              width: "fit-content",
              display: "flex",
              justifyContent: "start",
              textAlign: "start",
              alignItems: "start",
              paddingBottom: "16px",
            }}
          >
            <hr
              style={{
                width: "116px",
                border: "2px solid #DEE2E6",
                display: "flex",
                justifyContent: "start",
                textAlign: "start",
                alignItems: "start",
              }}
            />
          </Box>

          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "24px",
              fontFamily: "Inter",
              color: "#303030",
            }}
          >
            {item.title}
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              fontFamily: "Inter",
              color: "#5C5C5C",
            }}
          >
            {item.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

ExperienceData.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ExperienceData;
