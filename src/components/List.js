import React, { useState } from 'react';
import {CircularProgress, MenuItem, InputLabel, Box, Typography, FormControl, Select, Grid} from "@mui/material";
import PlaceDetails from './PlaceDetails';

const List = () => {

  const [type,setType]=useState("restaurants");
  const [rating,setRating]=useState("");
  const places =["shreya","bhoomi","pragati"];

  return (
    <Box>
        <Typography variant='h4'>Restaurants, Hotels and Attractions around you</Typography>
        <FormControl>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e)=>setType(e.target.value)}>
                 <MenuItem value="restaurants">Restaurants</MenuItem>
                 <MenuItem value="hotels">Hotels</MenuItem>
                 <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
        </FormControl>
        <FormControl>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
                 <MenuItem value={0}>All</MenuItem>
                 <MenuItem value={3}>Above 3.0</MenuItem>
                 <MenuItem value={4}>Above 4.0</MenuItem>
                 <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
        </FormControl>
        <Grid container spacing={3}>
            {places?.map((place,i)=>(
                <Grid item key={i}>
                    <PlaceDetails place={place}/>
                </Grid>
            ))}
        </Grid>
    </Box>
  )
}

export default List