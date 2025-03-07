import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: "30px", md: "62px" },
        my: { xs: "30px", md: "74px" },

        px: { xs: "25px", sm: "25px", md: "30px" },
        position: "relative",
        borderRadius: "32px",
        background: "#303030",
        width: "94%",
        margin: "auto",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left" },
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          alignItems: "center",
          gap: { xs: 3, sm: 5 },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            margin: "0 auto",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            color: "gray",
            width: "fit-content",
            background: "#272727",
            borderRadius: "8px",
            border: "1px gray solid",
            padding: "6px 8px",
          }}
        >
          <HelpOutlineOutlinedIcon /> <Typography>FAQS</Typography>
        </Box>
        <Box>
          <Typography
            component="h2"
            variant="h4"
            color="text.primary"
            sx={{
              textAlign: "center",
              color: "link.active",
              fontSize: { md: "40px" },
            }}
          >
            Frequently asked questions
          </Typography>
          <Typography
            component="h2"
            variant="h4"
            color="text.primary"
            sx={{
              color: "#8F8F8F",
              fontSize: { xs: "16px" },
            }}
          >
            Find questions and answers related to the Virtual Tour purchase,
            updates, and support.
          </Typography>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Accordion
            sx={{
              background: "",
            }}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<AddIcon sx={{ color: "white" }} />}
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography component="h3" variant="subtitle2">
                I Have Never Produced a Virtual Tour Before, How Do I Begin?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                The easiest way to get started, simply book a consultation using
                our online form or by contacting us directly. During the
                consultation, we’ll discuss your specific needs and goals, as
                well as provide a demonstration of our services.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<AddIcon sx={{ color: "white" }} />}
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography component="h3" variant="subtitle2">
                I Have Never Produced a Virtual Tour Before, How Do I Begin?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                The easiest way to get started, simply book a consultation using
                our online form or by contacting us directly. During the
                consultation, we’ll discuss your specific needs and goals, as
                well as provide a demonstration of our services.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<AddIcon sx={{ color: "white" }} />}
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography component="h3" variant="subtitle2">
                Virtual Tour Creation
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                Our expert team will then use the collected data to create an
                engaging and interactive 360- degree virtual tour. This process
                typically takes 3-5 business days, depending on the size and
                complexity of the property.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<AddIcon sx={{ color: "white" }} />}
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography component="h3" variant="subtitle2">
                Review and Approval
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                We’ll share the completed virtual tour with you for review and
                approval. If any adjustments are needed, our team will make the
                necessary revisions and resubmit the tour for your final
                approval.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<AddIcon sx={{ color: "white" }} />}
              aria-controls="panel5d-content"
              id="panel5d-header"
            >
              <Typography component="h3" variant="subtitle2">
                Launch and Promotion
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                Once approved, we’ll help you integrate the virtual tour into
                your existing marketing materials and platforms. You can then
                share the tour with potential buyers, providing them with a more
                engaging and informative experience compared to traditional
                images or videos. To learn more about our process or to schedule
                a consultation, please use our online form or call us directly.
                We’re here to help you enhance your listings and attract more
                leads with minimal effort.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "fit-content" },
            display: "flex",
            gap: { xs: "0px", sm: "8px" },
            alignItems: "center",
            justifyContent: { xs: "space-between", sm: "center", md: "start" },
          }}
        >
          <Button
            onClick={() => window.handleCalendlyButtonClick()}
            color="primary"
            variant="text"
            size="small"
            to="/"
            sx={{
              py: "20px",
              px: "20px",
              fontSize: "16px",
              borderRadius: "9999px",
              color: "black","&:hover": {
                backgroundColor: "grey",
                color: "black",}
            }}
          >
            Book a Consultant
          </Button>
          {/* <Button
            color="primary"
            variant="text"
            size="small"
            sx={{ py: "20px", px: {md:"20px",xs: "10px"}, fontSize: { xs: "14px", sm: "16px" }, borderRadius: "9999px", borderColor: "black", color: "black", bgcolor: "white" }}

          >
            Create a Session
          </Button>

          <Button
            color="primary"
            variant="contained"
            size="small"
            sx={{ py: "20px",  px: {md:"20px",xs: "10px"}, fontSize: { xs: "14px", sm: "16px" }, borderRadius: "9999px", borderColor: "black", bgcolor: "black", color: "white" }}
          >
            Book a Session
          </Button> */}
        </Box>
      </Box>
    </Box>
  );
}
