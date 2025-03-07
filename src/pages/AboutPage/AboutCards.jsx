import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import product1Image from "../../assets/images/cart.png";
import AboutCartImage1 from "../../assets/images/AboutPage1.png";
import AboutCartImage2 from "../../assets/images/AboutPage2.png";
import AboutCartImage3 from "../../assets/images/AboutPage3.png";
import CardData from "./CardData";

const products = [
  {
    id: 1,
    image: AboutCartImage1,
    title: "Increased Interest",
    dec: "Virtual Tour grab attention and Keep it",
  },
  {
    id: 2,
    image: AboutCartImage2,
    title: "Time Saving",
    dec: "Reduce unnecessary Physical Showing",
  },
  {
    id: 3,
    image: AboutCartImage3,
    title: "Higher Conversion",
    dec: "Serious prospect are more likely to apply",
  },
  {
    id: 4,
    image: AboutCartImage2,
    title: "Competitive Edge",
    dec: "Stand out in the market",
  },
];

const AboutCardSection = () => {
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const containerWidth =
        document.getElementById("slider-container").clientWidth;
      const cardWidth = 298; // Width of each product card
      const newSlidesToShow = Math.floor(containerWidth / cardWidth);
      setSlidesToShow(newSlidesToShow);
    };

    window.addEventListener("resize", updateSlidesToShow);
    updateSlidesToShow();

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ width: "100%", backgroundColor: "#303030" }}>
      <Grid container justifyContent="center">
        <Grid item lg={9} xl={9} sx={{ paddingX: "15px" }}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: { md: "48px", xs: "24px" },
              paddingBottom: "10px",
              display: "flex",
              marginTop: "1em",
              justifyContent: "center",
              alignItems: "start",
              color: "#FFFFFF",
            }}
          >
            Key Benefits of using Taurgo.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "#8F8F8F",
            }}
          >
            In today’s digital age, virtual tours have become an essential tool
            for property owners, management companies, and estate agents. By
            offering an immersive and interactive experience, virtual tours
            enable potential buyers to explore properties remotely, saving time
            and resources for all parties involved.
          </Typography>
        </Grid>
        <Grid item lg={8} xl={8} md={12} xs={12}>
          <Box id="slider-container" sx={{ my: "40px", overflow: "hidden" }}>
            <Slider {...settings}>
              {products.map((product) => (
                <div key={product.id}>
                  <CardData
                    image={product.image}
                    title={product.title}
                    dec={product.dec}
                  />
                </div>
              ))}
            </Slider>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutCardSection;
