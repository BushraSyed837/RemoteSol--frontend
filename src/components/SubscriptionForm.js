import React from "react";
import {
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  MenuItem,
  TextField,
  Grid,
  Typography,
  ThemeProvider,
} from "@mui/material";
import { useFormik } from "formik";
import sub from "../assets/sub.jpg";
import { validationSchema, profession, useStyles, theme, initialValues } from '../helpers/helpers'

const SubscriptionForm = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log('Form values:', values); 
      try {
        const response = await fetch('http://localhost:8000/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        console.log('Response:', response); 

        if (response.ok) {
          console.log('Subscription saved successfully');
          formik.resetForm();
        } else {
          const errorData = await response.json();
          console.error('Error saving subscription:', errorData);
        }
      } catch (error) {
        console.error('Error saving subscription:', error.message);
      }
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <div className={classes.formContainer}>
            <div className={classes.logoContainer}>
              <img src={sub} alt="Logo" className={classes.logo} />
            </div>
            <Typography variant="h5" gutterBottom>
              Subscription Form
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="First Name"
                    name="firstname"
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.firstname &&
                      Boolean(formik.errors.firstname)
                    }
                    helperText={
                      formik.touched.firstname && formik.errors.firstname
                    }
                    fullWidth
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Last Name"
                    name="lastname"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.lastname && Boolean(formik.errors.lastname)
                    }
                    helperText={
                      formik.touched.lastname && formik.errors.lastname
                    }
                    fullWidth
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Picture (URL)"
                    name="picture"
                    value={formik.values.picture}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.picture && Boolean(formik.errors.picture)
                    }
                    helperText={formik.touched.picture && formik.errors.picture}
                    fullWidth
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                      row
                      aria-label="gender"
                      name="gender"
                      value={formik.values.gender}
                      onChange={formik.handleChange}
                    >
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="date"
                    label="Date of Birth"
                    name="dob"
                    value={formik.values.dob}
                    onChange={formik.handleChange}
                    error={formik.touched.dob && Boolean(formik.errors.dob)}
                    helperText={formik.touched.dob && formik.errors.dob}
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    required
                    className={classes.select}
                  >
                    <TextField
                      select
                      label="Profession"
                      name="profession"
                      value={formik.values.profession}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.profession &&
                        Boolean(formik.errors.profession)
                      }
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      variant="outlined"
                      required
                    >
                      {profession.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Shoe Size"
                    name="shoesize"
                    value={formik.values.shoesize}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.shoesize && Boolean(formik.errors.shoesize)
                    }
                    helperText={
                      formik.touched.shoesize && formik.errors.shoesize
                    }
                    fullWidth
                    variant="outlined"
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Hair Color"
                    name="haircolor"
                    value={formik.values.haircolor}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.haircolor && Boolean(formik.errors.haircolor)
                    }
                    helperText={
                      formik.touched.haircolor && formik.errors.haircolor
                    }
                    fullWidth
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Hair length"
                    name="hairlength"
                    value={formik.values.hairlength}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.hairlength && Boolean(formik.errors.hairlength)
                    }
                    helperText={
                      formik.touched.hairlength && formik.errors.hairlength
                    }
                    fullWidth
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Height"
                    name="heightCm"
                    value={formik.values.heightCm}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.heightCm && Boolean(formik.errors.heightCm)
                    }
                    helperText={
                      formik.touched.heightCm && formik.errors.heightCm
                    }
                    fullWidth
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Waist Size"
                    name="waistSizeCm"
                    value={formik.values.waistSizeCm}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.waistSizeCm && Boolean(formik.errors.waistSizeCm)
                    }
                    helperText={
                      formik.touched.waistSizeCm && formik.errors.waistSizeCm
                    }
                    fullWidth
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Weight"
                    name="weight"
                    value={formik.values.weight}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.weight && Boolean(formik.errors.weight)
                    }
                    helperText={
                      formik.touched.weight && formik.errors.weight
                    }
                    fullWidth
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SubscriptionForm;
