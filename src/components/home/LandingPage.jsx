import { ThemeProvider } from "@mui/material/styles";
import AppAppBar from "./AppAppBar.jsx";

import Hero from "./Hero.jsx";
import getLPTheme from "./getLPTheme";
import { createTheme } from "@mui/material/styles";
import { Stack, Box } from "@mui/material";
import Footer from "./Footer.jsx";
import LogoMarquee from "./LogoScroll.jsx";
import ContactForm from "./ContactForm.jsx";
import FAQ from "./FAQ.jsx";
import ResearchOverview from "./ResearchOverview.jsx";
import Benefits from "./Benefits.jsx";
import Services from "./Services.jsx";

export default function LandingPage() {
  const LPtheme = createTheme(getLPTheme("light"));

  return (
    <ThemeProvider theme={LPtheme}>
      <Stack useFlexGap gap="0px">
        <AppAppBar />
        <Hero />
        <Services />
        <Benefits />
        {/* <Process /> */}
        <ResearchOverview />
        <Box sx={{ backgroundColor: "#F7F7F7" }}>
          <FAQ />
          <ContactForm />
          <LogoMarquee />
        </Box>
        <Footer />
      </Stack>
    </ThemeProvider>
  );
}
