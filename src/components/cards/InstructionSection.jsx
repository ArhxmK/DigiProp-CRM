import { Box, Button, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PropTypes from "prop-types";
const InstructionSection = ({ title, disc, active, setActive, bgcolor }) => {
  return (
    <div>
      <Box
        sx={{
          padding: "40px",
          backgroundColor: bgcolor || "#FFFFFF",
          paddingX: {
            lg: "105px",
            md: "105px",
            xs: "20px",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "inter",
            fontWeight: 700,
            fontSize: { lg: "62px", xs: "24px" },
            marginBottom: "10px",
            background:
              "linear-gradient(89.17deg, #272727 12.15%, rgba(39, 39, 39, 0.42) 66.35%, rgba(39, 39, 39, 0) 131.13%, rgba(39, 39, 39, 0) 158.14%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",

            color: "transparent",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "inter",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            color: "#5C5C5C",
          }}
        >
          {disc}
        </Typography>
        <div>
          {!active && (
            <Button
              color="primary"
              variant="contained"
              size="small"
              sx={{
                py: "20px",
                marginTop: "20px",
                px: { md: "20px", xs: "10px" },
                fontSize: { md: "16px", xs: "14px" },
                border: "1px white solid",
                marginRight: "10px",
                borderRadius: "9999px",
              }}
              onClick={() => setActive(true)}
            >
              Expand
              <KeyboardArrowDownIcon />
            </Button>
          )}

          {active && (
            <Button
              color="primary"
              variant="contained"
              size="small"
              sx={{
                py: "20px",
                marginTop: "10px",
                px: { md: "20px", xs: "10px" },
                fontSize: { md: "16px", xs: "14px" },
                border: "1px white solid",
                marginRight: "10px",
                borderRadius: "9999px",
              }}
              onClick={() => setActive(false)}
            >
              Collapse
              <KeyboardArrowUpIcon />
            </Button>
          )}
        </div>
      </Box>
    </div>
  );
};
InstructionSection.propTypes = {
  title: PropTypes.string.isRequired,
  disc: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  bgcolor: PropTypes.string,
};

export default InstructionSection;
