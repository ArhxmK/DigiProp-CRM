// import * as React from 'react';
import PropTypes from "prop-types";

import {
  Card,
  Typography,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";

const CardData = ({ image, title, dec }) => {
  return (
    <>
      <Card
        sx={{
          //   maxWidth: "400px",
          maxHeight: "264px",
          marginLeft: "16px",
          marginRight: "16px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          border: "1.5px solid #FFFFFF05",
          backgroundColor: "#303030",
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: 100,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            component="img"
            height="100"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "18px",
                color: "#6C757D",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "14px",
                color: "#fff",
              }}
            >
              {dec}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

CardData.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dec: PropTypes.string.isRequired,
};

export default CardData;
