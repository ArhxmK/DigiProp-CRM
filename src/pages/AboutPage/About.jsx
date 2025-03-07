import AppAppBar from "../../components/home/AppAppBar";
import getLPTheme from "../../components/home/getLPTheme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Stack } from "@mui/material";
import Footer from "../../components/home/Footer";
import PackageHeroImage from "../../assets/images/aboutus.png";
import Benefits from "./Benefits";
import Experience from "./Experience";
import AboutCardSection from "./AboutCards";
import AboutHeroSection from "./aboutBanner";

const Packages = () => {
  const LPtheme = createTheme(getLPTheme("light"));
  return (
    <>
      <ThemeProvider theme={LPtheme}>
        <Stack useFlexGap gap="0px">
          <AppAppBar />
          <AboutHeroSection
            title="About Us"
            description="Taurgo’s virtual tours are a powerful marketing tool for businesses in the property, hospitality, and tourism industries. By using Taurgo’s virtual tours, businesses can showcase their properties and attractions in a unique and engaging way that allows potential customers to experience the location before they visit."
            buttonText1="Contect us"
            // buttonText2="Book a Session"
            imageHero={PackageHeroImage}
            // imageHeroMobile={PackageHeroMobile}
          />
          <Benefits />
          <AboutCardSection />
          <Experience />

          <Footer />
        </Stack>
      </ThemeProvider>
    </>
  );
};

export default Packages;
