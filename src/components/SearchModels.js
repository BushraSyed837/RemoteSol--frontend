import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  MenuItem,
} from "@mui/material";
import { profession, handleSearch, useStyles, theme, initialValues } from "../helpers/helpers";

const SearchModels = () => {
  const classes = useStyles();
  const [searchResults, setSearchResults] = useState([]);
  const [allModels, setAllModels] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState(initialValues);


  useEffect(() => {
    fetch('http://localhost:8000/api/models')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch models');
        }
        return response.json();
      })
      .then(data => {
        setAllModels(data);
        setSearchResults(data);
      })
      .catch(error => {
        console.error('Error fetching models:', error);
      });
  }, []);

  const search = () => {
    const data = handleSearch(allModels, searchCriteria)
    console.log('data', data)
    setSearchResults(data)
  }

  return (
    <div className={classes.formContainers}>
      <Grid container spacing={1} alignItems="center" justify="center">
        <Grid item xs={12} sm={8}>
          <TextField
            label="Search by First Name, Last Name, or Profession"
            value={searchCriteria.query}
            onChange={(e) =>
              setSearchCriteria({ ...searchCriteria, query: e.target.value })
            }
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={search}
            className={classes.searchButton}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        alignItems="center"
        marginTop={2}
        justify="center"
      >
        <Grid
          item
          container
          xs={12}
          sm={6}
          md={4}
          lg={2}
          spacing={0}
          alignItems="center"
        >
          <Typography variant="body1" gutterBottom>
            Gender:
          </Typography>
          <RadioGroup
            aria-label="gender"
            name="gender"
            value={searchCriteria.gender}
            onChange={(e) =>
              setSearchCriteria({ ...searchCriteria, gender: e.target.value })
            }
            row
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
        </Grid>
        <Grid item xs={12} sm={6} md={2} lg={1}>
          <TextField
            label="Date of Birth"
            type="date"
            value={searchCriteria.dob}
            onChange={(e) =>
              setSearchCriteria({ ...searchCriteria, dob: e.target.value })
            }
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={3} md={2} lg={1}>
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
              value={searchCriteria.profession}
              onChange={(e) =>
                setSearchCriteria({ ...searchCriteria, profession: e.target.value })
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
        <Grid item xs={12} sm={3} md={2} lg={1}>
          <TextField
            label="Shoe Size"
            type="number"
            value={searchCriteria.shoeSize}
            onChange={(e) =>
              setSearchCriteria({ ...searchCriteria, shoeSize: Number(e.target.value) })
            }
          />
        </Grid>
        <Grid item xs={12} sm={3} md={2} lg={1}>
          <TextField
            label="Hair Color"
            value={searchCriteria.hairColor}
            onChange={(e) =>
              setSearchCriteria({
                ...searchCriteria,
                hairColor: Number(e.target.value),
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2} lg={1}>
          <TextField
            label="Hair Length"
            value={searchCriteria.hairLength}
            onChange={(e) =>
              setSearchCriteria({
                ...searchCriteria,
                hairLength: Number(e.target.value),
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2} lg={1}>
          <TextField
            label="Waist Size (cm)"
            type="number"
            value={searchCriteria.waistSize}
            onChange={(e) =>
              setSearchCriteria({
                ...searchCriteria,
                waistSize: Number(e.target.value),
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={4} md={2} lg={1}>
          <TextField
            label="Height (cm)"
            type="number"
            value={searchCriteria.height}
            onChange={(e) =>
              setSearchCriteria({ ...searchCriteria, height: Number(e.target.value) })
            }
          />
        </Grid>
        <Grid item xs={12} sm={4} md={2} lg={1}>
          <TextField
            label="Weight (kg)"
            type="number"
            value={searchCriteria.weight}
            onChange={(e) =>
              setSearchCriteria({ ...searchCriteria, weight: Number(e.target.value) })
            }
          />
        </Grid>
      </Grid>


      <Grid container spacing={1} style={{ marginTop: '10px' }}>
        {searchResults.map(model => (
          <Grid item xs={12} sm={6} md={4} key={model._id}>
            <Card className={classes.card}>
              <CardMedia
                component="img"
                height="200"
                image={model.picture}
                alt={`${model.firstname} ${model.lastname}`}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>{`${model.firstname} ${model.lastname}`}</Typography>
                <Typography variant="body2" color="textSecondary">{model.profession}</Typography>
                <Typography variant="body2" color="textSecondary">Gender: {model.gender}</Typography>
                <Typography variant="body2" color="textSecondary">Date of Birth: {model.dob}</Typography>
                <Typography variant="body2" color="textSecondary">Shoe Size: {model.shoesize}</Typography>
                <Typography variant="body2" color="textSecondary">Hair Color: {model.haircolor}</Typography>
                <Typography variant="body2" color="textSecondary">Hair Length: {model.hairlength}</Typography>
                <Typography variant="body2" color="textSecondary">Waist Size: {model.waistSizeCm} cm</Typography>
                <Typography variant="body2" color="textSecondary">Height: {model.heightCm} cm</Typography>
                <Typography variant="body2" color="textSecondary">Weight: {model.weight} kg</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SearchModels;

