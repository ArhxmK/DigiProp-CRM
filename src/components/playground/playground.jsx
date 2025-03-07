import { Box, Button, Stack, Typography, Card, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import PropTypes from "prop-types";
import vTours from "../../assets/images/vTours.svg";
import markers from "../../assets/images/markers.svg";
import pois from "../../assets/images/pois.svg";
import rooms from "../../assets/images/rooms.svg";
import measurements from "../../assets/images/measurement.svg";
import v3d from "../../assets/images/3d.svg";
import visitors from "../../assets/images/visitors.svg";
import onlineVis from "../../assets/images/onlineVisitors (10).svg";
import video from "../../assets/images/video.svg";
import disk from "../../assets/images/disk.svg";
import slideShows from "../../assets/images/slideshow.svg";
import noVisitors from "../../assets/images/novisitors.png";
import AddIcon from "@mui/icons-material/Add";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import PlaygroundLayout from "./playLayout";

const Playground = () => {
  return (
    <PlaygroundLayout>
      <Stack spacing="28px" sx={{ color: "black" }}>
        {/* <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            padding: "16px",
            rowGap: "10px",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "start", md: "center" },
            justifyContent: "space-between",
          }}
        >
          <Stack>
            <Typography sx={{ fontFamily: "interMedium", fontSize: "22px" }}>
              Welcome Back, Zac !
            </Typography>
            <Typography sx={{ color: "#6C757D", fontSize: "16px" }}>
              Welcome to Taurgo, where you can create Virtual tour in few simple
              steps
            </Typography>
          </Stack>
          <Button
            sx={{ padding: "17px 11px !important", borderRadius: "8px" }}
            variant="contained"
          >
            {" "}
            Create a Tour
          </Button>
        </Box> */}

        <Stack
          useFlexGap
          spacing="9px"
          sx={{ background: "#F8D7DA73", padding: "16px" }}
        >
          <Box
            sx={{
              color: "#DC3545",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "interMedium",
              fontSize: "18px",
              overflow: "visible",
            }}
          >
            {" "}
            <InfoIcon /> Note
          </Box>
          <Typography
            sx={{ color: "#6C757D", fontSize: "14px", overflow: "visible" }}
          >
            Your Demo Plan has been Expired, You will not be able to add new
            Content, But only edit Existing ones.{" "}
            <Link style={{ color: "red" }}>Click here</Link> to Change your
            Plan.
          </Typography>
        </Stack>

        <Grid
          spacing="16px"
          marginLeft="-16px !important"
          container
          justifyContent="start"
        >
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StatsCard
              title="Virtual Tours"
              img={vTours}
              Quantity={0}
              Percentage="12"
              success={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StatsCard
              title="Rooms"
              img={rooms}
              Quantity={0}
              Percentage="1"
              success={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StatsCard
              title="Markers"
              img={markers}
              Quantity={0}
              Percentage="0.2"
              success={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StatsCard
              title="Pois"
              img={pois}
              Quantity={0}
              Percentage="2"
              success={false}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StatsCard
              title="Measurements"
              img={measurements}
              Quantity={0}
              Percentage="12"
              success={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StatsCard
              title="360 Virtuals Tours"
              img={v3d}
              Quantity={0}
              Percentage="1.2"
              success={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StatsCard
              title="Video Projects"
              img={video}
              Quantity={0}
              Percentage="0.2"
              success={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StatsCard
              title="Slideshows"
              img={slideShows}
              Quantity={0}
              Percentage="2"
              success={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <StatsCard
              title="Total Visitors"
              img={visitors}
              Quantity={0}
              Percentage="6.4"
              success={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <StatsCard
              title="Online Visitors"
              img={onlineVis}
              Quantity={0}
              Percentage="24"
              success={true}
            />
          </Grid>
          <Grid item xs={12}>
            <StatsCard
              title="Disk Space Used"
              img={disk}
              Quantity={"123.22KB"}
              btn="analyze"
              success={true}
            />
          </Grid>
        </Grid>
        <Card sx={{ borderRaius: "4px" }}>
          <Typography
            sx={{
              padding: "10px 16px",
              borderBottom: "1px solid #DEE2E6",
              color: "black",
              fontFamily: "interMedium",
              fontSize: "18px",
              textWrap: "nowrap",
            }}
          >
            Visitors
          </Typography>
          <Stack sx={{ alignItems: "center", padding: "25px 25px 46px 25px" }}>
            <img style={{ width: "85px" }} src={noVisitors} />
            <Typography
              sx={{
                color: "black",
                fontFamily: "interMedium",
                fontSize: "18px",
                textWrap: "nowrap",
              }}
            >
              {" "}
              No Visitor Created Yet
            </Typography>
            <Typography sx={{ color: "#475467", textAlign: "center" }}>
              Click on the button below to create a new Visitor
            </Typography>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<AddIcon />}
              sx={{
                marginTop: "24px",
                borderRadius: "8px",
                padding: "10px 18px",
              }}
            >
              Create New Visitor
            </Button>
          </Stack>
        </Card>
      </Stack>
    </PlaygroundLayout>
  );
};
export default Playground;

const StatsCard = ({ title, img, Quantity, Percentage, success, btn }) => {
  return (
    <Box>
      <Card
        sx={{
          border: "1px #DEE2E6 solid",
          position: "relative",
          backgroundColor: "#F8F9FA",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 16px 17px 16px",
        }}
      >
        <Box sx={{ display: "flex", gap: "12px" }}>
          <img style={{ width: "48px" }} src={img} alt={title} />
          <Stack>
            <Typography
              sx={{
                color: "#6C757D",
                fontFamily: "interMedium",
                fontSize: "14px",
                textWrap: "nowrap",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontSize: "24px",
                fontFamily: "interMedium",
              }}
            >
              {Quantity}
            </Typography>
          </Stack>
        </Box>

        {Percentage && (
          <Box
            sx={{
              color: success ? "green" : "red",
              fontSize: "14px",
              position: "absolute",
              right: "10px",
              bottom: "10px",
              fontFamily: "interMedium",
              display: "flex",
              gap: "3px",
              alignItems: "flex-end",
            }}
          >
            {success ? <ArrowUpward /> : <ArrowDownward />}{" "}
            <Typography>{Percentage}%</Typography>
          </Box>
        )}
        {btn && (
          <Box sx={{ alignItems: "center", display: "flex" }}>
            {" "}
            <Button
              sx={{ padding: "15px 17px !important", borderRadius: "8px" }}
              variant="contained"
            >
              {btn}
            </Button>
          </Box>
        )}
      </Card>
    </Box>
  );
};
StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  Quantity: PropTypes.number.isRequired,
  Percentage: PropTypes.number.isRequired,
  success: PropTypes.bool.isRequired,
  btn: PropTypes.string.isRequired,
};
