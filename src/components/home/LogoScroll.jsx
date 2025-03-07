import React from "react";
import { Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo2 from "../../assets/images/logo1.png";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/osborne.jpg";
import logo5 from "../../assets/images/logo5.png";
import logo6 from "../../assets/images/logo6.png";
import logo7 from "../../assets/images/RightmoveLogo.png";
import logo8 from "../../assets/images/purpleLogo.png";
import LazyImage from "../media/LazyImage";

const LogoMarquee = () => {
  // Sample logo data
  const logos = [
    { id: 7, src: logo7, alt: "Logo 7" },
    { id: 3, src: logo3, alt: "Logo 3" },
    { id: 4, src: logo4, alt: "Logo 4" },
    { id: 5, src: logo5, alt: "Logo 5" },
    { id: 8, src: logo8, alt: "Logo 8" },
    { id: 2, src: logo2, alt: "Logo 2" },
    { id: 6, src: logo6, alt: "Logo 6" },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2400,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
       
        my: { xs: "30px", md: "74px" },
        mx: { xs: "30px", md: "40px" },
      }}
    >
    <Slider {...settings}>
      {logos.map((logo) => (
        <Box key={logo.id} sx={{ width: { xs: "150px", lg: "300px"  } }}>
          <LazyImage src={logo.src} alt={logo.alt} className="logo-img" />
        </Box>
      ))}
    </Slider>
    </Box>
  );
};

export default LogoMarquee;
