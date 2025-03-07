import { Typography, Box } from "@mui/material";

const Benefits = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F7F7F7",
        justifyContent: "center",

        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Inter",
          fontWeight: 400,
          fontSize: { md: "16px", xs: "16px" },
          color: "#6C757D",

          paddingY: { md: "30px", xs: "15px" },
          paddingX: "15px",

          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          mx: "auto",
          maxWidth: "1078px",
        }}
      >
        One of the key benefits of Taurgo’s virtual tours is their ability to
        increase engagement and conversion rates. According to recent studies,
        virtual tours can increase website engagement by up to 60%, and they can
        also increase conversion rates by up to 30%. This means that businesses
        that use Taurgo’s virtual tours are more likely to attract and retain
        customers, which can lead to increased revenue and growth.
      </Typography>
      <Box
        sx={{
          fontFamily: "Inter",
          fontWeight: 400,
          fontSize: { md: "16px", xs: "16px" },
          color: "#6C757D",

          paddingBottom: { md: "30px", xs: "15px" },
          paddingX: "15px",

          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          mx: "auto",
          maxWidth: "1078px",
        }}
      >
        In addition to their marketing benefits, Taurgo’s virtual tours can also
        help businesses to save time and money. By using virtual tours,
        businesses can reduce the need for physical viewings and inspections,
        which can save time and resources. Virtual tours can also help
        businesses to reach a wider audience, as they can be accessed from
        anywhere in the world.{" "}
      </Box>
    </Box>
  );
};

export default Benefits;
