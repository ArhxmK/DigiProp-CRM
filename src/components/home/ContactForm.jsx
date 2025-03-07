import { Grid, TextField, Button, Typography, Box } from "@mui/material";
import axiosInstance from "../../utils/axiosConfig";
import { useForm } from "react-hook-form";
import useSnackbar from "../../utils/swalConfig";
import { useState, useEffect } from "react";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    shouldUnregister: false,
  });

  const [loading, setLoading] = useState(false);
  const { showSnackbar, SnackbarComponent } = useSnackbar();
   
  const onSubmit = async (data) => {
 const updateData = {...data,userEmail:data.email}
 delete updateData.email
 console.log(updateData)
 const addEmail = {...updateData,email:"info@taurgo.co.uk", email_type: 3,}
    setLoading(true);
    console.log(addEmail);
    try {
      console.log("data", data);
      const response = await axiosInstance.post("/mail/sendEmail", addEmail);
      const { success, message } = response.data;
     
      if (success) {
        showSnackbar("success", message);
    
      } else {
        showSnackbar("error", message);
      }
    } catch (error) {
      showSnackbar("error", error.message);
    }
    reset();
    setLoading(false);
  };
  const userEmail = watch("email");
  const number = watch("number");
  const name = watch("name");


  useEffect(() => {
    setValue("email", userEmail);
    setValue("number", number);
    setValue("name", name);
  }, [name, userEmail, number]);


  return (
    <Box
      sx={{ px: { xs: "15px", md: "67px" }, py: { xs: "50px", md: "150px" } }}
    >
      <Grid container spacing={3}>
        {/* Left text */}
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: { xs: "24px", md: "50px", xl: "60px" },
              fontWeight: 500,
              lineHeight: { xs: "36px", md: "73px" },
              letterSpacing: "-0.036em",
              textAlign: "left",
              width: { xs: "100%", md: "70%" },
              margin: "auto",
              background:
                "-webkit-linear-gradient(#2F2F2F, rgba(61, 60, 60, 0.71), rgba(61, 60, 60, 0))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Experience the Future Today with Taurgo&apos;s Virtual Tours
          </Typography>
        </Grid>

        {/* Right form */}
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  inputProps={inputstyle}
                  label="Name"
                  {...register("name", { required: true })}
                  sx={{ width: "100%" }}
                  error={!!errors.name}
                  helperText={errors.name ? "Name is required" : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  inputProps={inputstyle}
                  label="Phone Number"
                  {...register("number", { required: true })}
                  sx={{ width: "100%" }}
                  error={!!errors.number}
                  helperText={errors.number ? "Phone Number is required" : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  inputProps={inputstyle}
                  label="Email Address"
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ""}
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  multiline
                  rows={4}
                  inputProps={inputstyle}
                  label="Your Message"
                  {...register("message", { required: true })}
                  sx={{ width: "100%" }}
                  error={!!errors.message}
                  helperText={errors.message ? "Message is required" : ""}
                />
              </Grid>
              <Grid
                item
                sx={{ width: "100%", textAlign: { xs: "center", md: "start" } }}
                xs={12}
              >
                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  sx={{
                    width: "fit-content",
                    backgroundColor: "black",
                    color: "white",
                    padding: "12px 27px",
                    borderRadius: "233232px",
                    mt: { xs: "20px", md: "20px" },
                    mx: { xs: "auto", md: "0" },
                    "&:hover": {
                      backgroundColor: "grey",
                      color: "white",}
                    
                  }}
                  color="primary"
                  fullWidth
                >
                  {loading ? "Sending Message..." : "Contact Now"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
      {SnackbarComponent}
    </Box>
  );
}
const inputstyle = {
  sx: {
    width: "100%",
    paddingY: "20px", // Apply padding 20px to the top and bottom
    "& input": {
      boxSizing: "border-box",
    },
    "& input::placeholder": {
      opacity: 0.7, // Reduce opacity of placeholder
    },
    "& .MuiInputBase-input": {
      boxSizing: "border-box",
    },
    "& .MuiOutlinedInput-root": {
      minWidth: 280,
      minHeight: 40,
      height: "100%",
      borderRadius: "10px",
      border: "1px solid",
      borderColor: "",
      transition: "border-color 120ms ease-in",
      "& fieldset": {
        border: "none",
        boxShadow: `0px 2px 4px 'rgba(0, 0, 0, 0.1)'}`,
        background: "{alpha('#FFF', 0.4)}",
      },
      "&:hover": {
        borderColor: "",
      },
      "&.Mui-focused": {
        borderColor: "",
        outline: "4px solid",
        outlineColor: "",
      },
    },
  },
};
