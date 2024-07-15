import React, { useEffect, useState } from "react";
import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { fetchfromapi } from "../fetchfromapi";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const MyCard = styled(CardMedia)`
  position: relative;
  height: 500px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
`;

const GradientOverlay = styled("div")`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgb(17 17 17) 80%
  );
`;
const RedButton = styled(Button)`
  &:hover {
    background-color: red;
    color : #ffffff;
  }
`;

const Banner = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchfromapi("trending/movie/day").then((res) => {
      setMovies(res.results);
    });
  }, []);

  return (
    <Carousel >
      {movies.slice(0, 5).map((movie, index) => (
        <Card key={index} >
          <MyCard
            image={`http://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
            alt={movie?.title}
          >
            <GradientOverlay />
            <Box
              className="container"
            
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="start"
              zIndex="9"
            >
              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <Typography variant="h3" color="white" fontWeight="bold" my={1}>
                  {movie.title}
                </Typography>
                <Typography variant="body1" color="#d5d5d5" mb={2}>
                  {movie.overview}
                </Typography>
                <Link to={movie ? `/moviedata/${movie.id}` : ""}>
                  <RedButton
                    variant="contained"
                    alignItems ="center"
                    endIcon={<PlayArrowIcon />}
                    size="large"
                    sx={{ backgroundColor: "#fff", color:"#000", fontWeight:"500", fontSize: "1rem"}}
                  >
                    Play
                  </RedButton>
                </Link>
              </Box>
            </Box>
          </MyCard>
        </Card>
      ))}
    </Carousel>
  );
};

export default Banner;
