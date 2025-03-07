// import * as React from 'react'
import { Grid, TextField, Button } from "@mui/material";
import axiosInstance from "../../utils/axiosConfig";
import { useForm } from "react-hook-form";
import useSnackbar from "../../utils/swalConfig";
import { useEffect, useState } from "react";
const ContactFromData = () => {
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
 const addEmail = {...updateData,email:"info@taurgo.co.uk" , email_type: 3,}
 console.log(addEmail)
    setLoading(true);
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
    <>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={1}>
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
                minRows={1}
                maxRows={4}
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
                  padding: "12px 27px",
                  borderRadius: "233232px",
                  mt: { xs: "20px", md: "20px" },
                  mx: { xs: "auto", md: "0" },
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
      {SnackbarComponent}
    </>
  );
};

export default ContactFromData;

const inputstyle = {
  sx: {
    width: "100%",
    paddingY: "20px", 
    "& input": {
      boxSizing: "border-box",
    },
    "& input::placeholder": {
      opacity: 0.7, 
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
