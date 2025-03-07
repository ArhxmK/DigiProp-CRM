import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo2 from "../../assets/images/textlogo.jpeg";
import { Button, Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TiktokIcon from "../../assets/images/Vector.png";
import { Link } from "react-router-dom";
import "../../assets/css/footer.css";
import ContactFromData from "../cards/ContactFromData";
import LazyImage from "../media/LazyImage";
const logoStyle = {
  width: "40px",
  height: "auto",
};
const linkstyle = {
  textDecoration: "none",
  color: "inherit",
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
export default function Footer() {
  return (
    <Box
      sx={{
        // mt:'-100px',
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        gap: { xs: 4, sm: 8 },
        padding: (theme) => ({
          // xs: theme.spacing(3),
          sm: theme.spacing(9.7),
          md: theme.spacing(10), // Adjust this value as needed
        }),
        paddingBottom: "10px !important",
        paddingTop: {
          xs: "26px !important",
          lg: "60px !important",
          xl: "97px !important",
        },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Box sx={{ textAlign: { xs: "center", md: "start" } }}>
        <Typography
          component="div"
          sx={{
            fontWeight: 500,
            fontFamily: "InterMedium",
            fontSize: { xs: "23px", md: "60px" },
            textAlign: { xs: "center", md: "start" },
            // margin: { xs: "auto", sm: "0" },
            marginBottom: "30px",
            background:
              "linear-gradient(172.84deg, #FFFFFF 49.99%, rgba(255, 255, 255, 0) 182.88%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Create & Book your Virtual Tour Now
        </Typography>

        <Button
          variant="contained"
          size="small"
          sx={{
            width: "fit-content",
            margin: { xs: "auto", sm: "0" },
            padding: "8px 30px 8px 20px",
            fontSize: "16px",
            borderRadius: "99999px",
            color: "black",
            backgroundColor: "white",
            border: "1px white solid",
            textDecoration: "none",
          }}
        >
          <a href="#modal-10" className="link">
            Contact Us
          </a>
        </Button>

        <div data-ml-modal id="modal-10">
          <a href="#" className="modal-overlay"></a>
          <div className="modal-dialog modal-dialog-lg">
            <a href="#" className="modal-close">
              &times;
            </a>
            <h3
              style={{
                color: "#286167",
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                gap: "8px",
                padding: "12px",
              }}
            >
              <LazyImage src={logo2} style={logoStyle} alt="logo " /> Contact Us
            </h3>

            <div
              className="modal-content newspaper"
              style={{ padding: "13px 10px" }}
            >
              <ContactFromData />
            </div>
          </div>
        </div>
      </Box>
      <Grid container rowSpacing={5} justifyContent="space-between">
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: { xs: "center", sm: "start" },
              justifyContent: { xs: "center", sm: "start" },
            }}
          >
            <Box sx={{ ml: "-3px" }}>
              <Link to="/" onClick={scrollToTop}>
                <LazyImage src={logo2} style={logoStyle} alt="logo " />{" "}
              </Link>
            </Box>
            <Typography
              color="link.active"
              variant="h5"
              fontWeight={600}
              gutterBottom
            >
              Digital Property Solutions
            </Typography>
            <Typography variant="body2" color="link.primary" mb={2}>
              Bringing your property to life
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography color="link.fprim" fontWeight={600}>
              Company
            </Typography>
            <Link
              style={linkstyle}
              color="link.fsec"
              to="/"
              onClick={scrollToTop}
            >
              Home
            </Link>
            <Link
              style={linkstyle}
              color="link.fsec"
              to="process"
              onClick={scrollToTop}
            >
              process
            </Link>
            <Link
              style={linkstyle}
              color="link.fsec"
              to="/packages"
              onClick={scrollToTop}
            >
              Services
            </Link>
            <Link
              style={linkstyle}
              color="link.fsec"
              to="/packages"
              onClick={scrollToTop}
            >
              Pricing
            </Link>
            <Link
              style={linkstyle}
              color="link.fsec"
              to="/about"
              onClick={scrollToTop}
            >
              About Us
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} md={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography color="link.fprim" fontWeight={600}>
              Help
            </Typography>
            <Link style={linkstyle} color="link.fsec" href="#">
              Privacy Policy
            </Link>
            <Link style={linkstyle} color="link.fsec" href="#">
              Terms of Use
            </Link>
            <Link style={linkstyle} color="link.fsec" href="#">
              Blogs
            </Link>
          </Box>
        </Grid>
      </Grid>
      {/* privacy footer */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          width: "100%",
          justifyContent: { xs: "center", md: "space-between" },
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            textAlign: { xs: "center", md: "start" },
            pb: { xs: "10px", md: "25px" },
            pt: { xs: "20px", md: "25px" },
          }}
          color="link.primary"
          mb={2}
        >
          Copyright © 2024 Digital Property Solutions . All Rights Reserved.
        </Typography>
        <Box
          sx={{
            flexDirection: "column",
            borderTop: { xs: "1px gray solid", md: "none" },
            borderBottom: { xs: "1px gray solid", md: "none" },
            py: "25px",
          }}
        >
          <Typography
            sx={{ textAlign: "center", display: { xs: "block", md: "none" } }}
            color="link.primary"
            mb={2}
          >
            Follow us on:
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "24px",
              justifyContent: { xs: "center", md: "start" },
            }}
          >
            <Link
              to="https://www.linkedin.com/company/taurgo-limited/"
              target="_blank"
            >
              <LinkedInIcon sx={{ color: "link.primary" }} fontSize="large" />
            </Link>
            <Link
              to="https://www.facebook.com/profile.php?id=61556259577976"
              target="_blank"
            >
              <FacebookOutlinedIcon
                sx={{ color: "link.primary" }}
                fontSize="large"
              />
            </Link>
            <Link to="https://vt.tiktok.com/ZGeadVBSr/" target="_blank">
              <LazyImage
                src={TiktokIcon}
                style={{
                  color: "link.primary",
                  width: "27px",
                  marginTop: "3px",
                  filter: "brightness(90%)",
                }}
                fontSize="large"
              />
            </Link>
            <Link
              to="https://www.instagram.com/taurgo360?igsh=MWlhc3RhNThsa3RucA%3D%3D&utm_source=qr"
              target="_blank"
            >
              <InstagramIcon sx={{ color: "link.primary" }} fontSize="large" />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
