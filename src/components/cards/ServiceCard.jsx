// import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
// import product1Image from "../../assets/images/cart.png";
import PropTypes from "prop-types";

export default function ServiceCard({
  services,
  title,
  description,
  bgColor,
  marginTB,
  textColor,
}) {
  return (
    <Box
      sx={{
        // width: "100%",
        paddingX: { lg: "100px", md: "100px", xs: "16px" },
        paddingY: "42px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bgColor || "#F7F7F7",
      }}
    >
      <Grid spacing={2} container>
        <Grid item xs={12} md={12} lg={12}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: { xs: "24px", md: "48px" },
              textAlign: "center",
              color: textColor || "transparent",
              ...(textColor !== "#ffff" && {
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                backgroundImage:
                  "linear-gradient(180deg, #2F2F2F 0%, rgba(61, 60, 60, 0.81) 75.33%, rgba(61, 60, 60, 0.54) 104.62%)",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }),
              my: 2,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "16px",
              textAlign: "center",

              mx: "auto",
              my: 2,
              color: "#6C757D" || textColor,
            }}
          >
            {description}
          </Typography>
        </Grid>
        {services.map((product) => (
          <Grid
            item
            key={product.id}
            xs={12}
            sm={6}
            md={6}
            lg={4}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Card
              sx={{
                maxWidth: "403px",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: bgColor,
              }}
            >
              <CardActionArea sx={{ maxWidth: "403px", height: "100%" }}>
                <CardContent
                  mx="27px"
                  my="23px"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",

                    alignItems: "center",
                  }}
                >
                  <CardMedia
                    // justifyContent="center"
                    // alignItems="center"
                    component="img"
                    // paddingY="auto"
                    style={{
                      marginY: marginTB || " 0px",
                      width: "auto", //    background:
                      // "linear-gradient(180deg, rgba(247, 247, 247, 0) 0%, rgba(247, 247, 247, 0.79) 32%, #F7F7F7 100%)",
                    }}
                    image={product.image}
                    alt={product.title}
                  />

                  <Box sx={{ marginTop: marginTB || "34px" }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      textAlign="center"
                      sx={{
                        color: textColor,
                      }}
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign="center"
                      sx={{ color: "#6C757D" || textColor }}
                    >
                      {product.dec}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
ServiceCard.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      dec: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  marginTB: PropTypes.string,
  textColor: PropTypes.string,
};
