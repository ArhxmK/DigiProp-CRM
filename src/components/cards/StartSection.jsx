import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import VideoPlayButton from "../../assets/images/videoplay button.png";
import "../../assets/css/yourSelf.css";
import videoWeb from "../../assets/Web-Video-1.mp4";
import LazyVideo from "../media/LazyVideo";
import LazyImage from "../media/LazyImage";
const StartSection = ({
  title,
  instructions,
  backgroundColor,
  gridValues,
  caption,
}) => {
  return (
    <Stack>
      <Grid
        container
        item
        sx={{
          backgroundColor: backgroundColor,
          paddingY: { lg: "52px", sm: "20px" },
          paddingX: {
            lg: "105px",
            md: "50px",
            sm: "20px",
          },
          "@media (max-width: 900px)": {
            flexDirection: "column-reverse",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item {...gridValues.textGrid} sx={{ marginY: { xs: "10px" } }}>
          <Typography
            sx={{
              fontFamily: "inter",
              // marginTop: "20px",
              // paddingLeft: { lg: "20px", xs: "0px" },
              paddingX: "30px",
              fontSize: { lg: "32px", xs: "24px" },
              fontWeight: 500,
              //   lineHeight: "36px",
              color: "#303030",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#495057",
              fontSize: { lg: "18px", xs: "13px" },
              paddingY: { lg: "24px", md: "20px", xs: "20px" },
              paddingX: { lg: "24px", md: "30px", xs: "30px" },
            }}
          >
            {instructions.map((instruction, index) => (
              <React.Fragment key={index}>
                <li key={index} style={{ marginBottom: "12px" }}>
                  {instruction}
                </li>
              </React.Fragment>
            ))}
          </Typography>

          {caption && (
            <Typography sx={{ color: "#495057", paddingX: "8px" }}>
              {caption}
            </Typography>
          )}
        </Grid>
        {gridValues.imageGrid && (
          <Grid item {...gridValues.imageGrid} sx={{ marginY: { xs: "10px" } }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <LazyVideo
                autoPlay
                className="StepDown_DoitPagevideo"
                height="40%"
                width="80%"
                muted
                src={videoWeb}
              ></LazyVideo>
              <Box
                sx={{
                  backgroundColor: "transparent",

                  position: "absolute", // Position the button absolutely within the container
                  zIndex: 1, // Ensure the button is above the video
                }}
                onClick={(e) => {
                  e.currentTarget.previousSibling.play();
                }}
              >
                <LazyImage style={{width:"80%"}}  src={VideoPlayButton} alt="play button" />
              </Box>
            </Box>
          </Grid>
        )}
      </Grid>
    </Stack>
  );
};
StartSection.propTypes = {
  title: PropTypes.string.isRequired,
  instructions: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.objectOf(PropTypes.any)])
  ),
  video: PropTypes.string,
  backgroundColor: PropTypes.string.isRequired,
  gridValues: PropTypes.shape({
    textGrid: PropTypes.object.isRequired,
    imageGrid: PropTypes.object,
  }).isRequired,
  caption: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.any),
  ]),
};

export default StartSection;
