import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import logo from "../../assets/images/textlogo.jpeg";
import logo2 from "../../assets/images/logo.png";
import divider from "../../assets/images/divider.png";
import { Button } from "@mui/material";
import serviceimg from "../../assets/images/image_for_homePage2.webp"
import LazyImage from "../media/LazyImage";
export default function Hero() {
 
  return (
    <Box>
      <Box
        id="hero"
        sx={() => ({
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          width: "100%",
          overflow: "hidden",
          pt: "167px",
          pb: { xs: 0, lg: "47px" },
          px: { xs: "20px", sm: "30px", md: "70px", lg: "100px" },
          position: "relative",
          boxSizing: "border-box",
        })}
      >
        <Stack
          useFlexGap
          sx={{ justifyContent: "space-around", height: "100%" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <div className="banner-video  banner-video-web">
             
              <div className="tt-overlay"></div>
             
              <LazyImage className="bannerImageHero" src={serviceimg} style={imgStyles} />
             
             
              {/* <video muted src={videoWeb}></video> */}
            </div>
            <Box
              display="flex"
              alignItems="center"
              sx={{
                height: "fit-content",
                [`@media (max-width:1072px)`]: {
                  flexDirection: "column-reverse",
                  margin: "auto",
                  zIndex: 10,
                  justifyContent: "flex-end",
                },
              }}
            >
              <Stack useFlexGap sx={{ width: { xs: "200px", sm: "430px" } }}>
                <LazyImage src={logo} className="textlogo" alt="logo" />
              </Stack>
              <LazyImage src={divider} className="borderRight" alt="divider" color="black"/>

              <Box>
                <LazyImage src={logo2} className="logo2style" alt="logo" />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              pt: { xs: "40px", lg: "270px" },
              pb: { xs: "20px", md: "auto" },
            }}
          >
            <Stack
              sx={{
                alignItems: { xs: "start", sm: "center", lg: "start" },
                flexDirection: { xs: "column-reverse", md: "column" },
              }}
              useFlexGap
              spacing="12px"
            >
              <Box
                sx={{
                  display: { xs: "flex" },
                  flexWrap: { xs: "wrap" },
                  gap: { xs: "5px", sm: "15px" },
                  justifyContent: { sm: "start", xs: "space-between" },
                  alignItems: "center",
                }}
              >
                <Button
                  color="primary"
                  onClick={() => window.handleCalendlyButtonClick()}
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor:"black", color:"white",
                    fontSize: { xs: "12px", sm: "14px", md: "16px" },
                    px: { xs: "10px", md: "15px" },
                    py: { xs: "10px", md: "18px" },
                    borderRadius: "99999px", "&:hover": {
                      backgroundColor: "grey",
                      color: "white",}
                  }}
                >
                  Book a Session NOW!
                </Button>
              </Box>
              <Typography
                component="span"
                sx={{
                  fontSize: { xs: "12px", sm: "14px", md: "32px" },
                  px: { xs: "10px", md: "15px" },
                  py: { xs: "10px", md: "18px" },
                  color: "#495057",
                  borderRadius: "99999px",
                }}
              >
                More flexibility, freedom and choice!
              </Typography>
              <Box></Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
const imgStyles = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  zIndex: '1',
  right: '270px', 
};
