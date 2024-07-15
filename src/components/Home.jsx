import React, { useEffect, useState } from "react";
import { fetchfromapi } from "../fetchfromapi";
import { Box, Stack, Typography } from "@mui/material";
import MoviesBox from "./MoviesBox";
import MovieList from "./MovieList";
import Banner from "./Banner";
const Home = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <Box>
          <MovieList type="now_playing" title="Now Playing" />
          <MovieList type="upcoming" title="Upcoming" />
          <MovieList type="popular" title="Popular" />
          <MovieList type="top_rated" title="Top Rated" />

          {/* <Typography variant="h5" mb={3} color="#fff">
          Upcomming Movies
        </Typography>
        <Stack
          direction={{ sm: "column", md: "row" }}
          sx={{ overflowX: "auto" }}
        >
          <MoviesBox movie={upcomming} />
        </Stack> */}
        </Box>
      </div>
    </>
  );
};

export default Home;
