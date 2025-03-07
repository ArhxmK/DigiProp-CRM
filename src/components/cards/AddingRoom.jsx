import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
const AddingRoom = ({ title, body1, body2, bgcolor }) => {
  return (
    <div>
      <Box
        sx={{
          p: 2,
          backgroundColor: bgcolor || "#F7F7F7",
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
        <Typography
          sx={{
            fontFamily: "inter",
            fontWeight: 500,
            fontSize: { lg: "32px", xs: "24px" },
            color: "#303030",
            marginBottom: {
              xs: "20px",
              sm: "20px",
              lg: "32px",
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "inter",
            fontWeight: 300,
            fontSize: { lg: "18px", xs: "16px" },
            color: "#495057",
            marginBottom: "10px",
          }}
        >
          {body1}
        </Typography>
        <Typography
          sx={{
            fontFamily: "inter",
            fontWeight: 300,
            fontSize: "18px",
            color: "#495057",
          }}
        >
          {body2}
        </Typography>
      </Box>
    </div>
  );
};
AddingRoom.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText1: PropTypes.string,
  buttonText2: PropTypes.string,
  imageHero: PropTypes.string,
  imageHeroMobile: PropTypes.string,
};

export default AddingRoom;
