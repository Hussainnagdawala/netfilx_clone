import { Box, Button, Card, CardMedia, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { fetchfromapi } from "../fetchfromapi";
import { styled } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DownloadIcon from "@mui/icons-material/Download";
import MoviesBox from "./MoviesBox";
import MovieList from "./MovieList";

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
  background-image: radial-gradient(cyan 0%, transparent 0%, black 100%);
`;
const RedButton = styled(Button)`
  &:hover {
    background-color: red;
    color: #ffffff;
  }
`;
const MovieDetail = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState([]);
  const [similarmovie, setSimilarMovie] = useState([]);
  useEffect(() => {
    fetchfromapi(`/movie/${id}`).then((res) => {
      setMovieData(res);
    });
  }, [id]);

  useEffect(() => {
    fetchfromapi(`/movie/${id}/similar`).then((res) => {
      setSimilarMovie(res.results);
    });
  }, [id]);
  console.log(movieData);

  return (
    <>
      <Box>
        <Stack>
          <Card sx={{ height: "350px", borderBottom: "5px solid #808080" }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=7H3D-6nj_dY"
              width="100%"
              height="350px"
              controls
              light={`http://image.tmdb.org/t/p/w500/${movieData?.backdrop_path}`}
            />
          </Card>
          <Stack
            className="container"
            gap={4}
            flexDirection="row"
            zIndex="9"
            my={2}
          >
            <Box sx={{ width: { xs: "100%", md: "60%" } }}>
              <Typography variant="h4" color="white" fontWeight="bold" my={1}>
                {movieData.title}
              </Typography>
              <Typography variant="subtitle2" color="white" my={1}>
                {movieData.tagline}
              </Typography>
              <Typography variant="body2" color="gray" mb={2}>
                {movieData.overview}
              </Typography>
              <Stack direction="row" spacing={2} my={1}>
                {movieData?.production_companies
                  ?.slice(0, 3)
                  .map((items, index) => {
                    return (
                      <img
                        width="50px"
                        className="p-1"
                        key={index}
                        style={{
                          backgroundColor: "#fff",
                          borderRadius: "99px",
                        }}
                        src={`http://image.tmdb.org/t/p/w500${items?.logo_path}`}
                      />
                    );
                  })}
              </Stack>
              <Stack direction="row" spacing={2} my={1}>
                {movieData?.genres?.map((items, index) => {
                  return (
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ color: "white", borderColor: "gray" }}
                      key={index}
                    >
                      {items.name}
                    </Button>
                  );
                })}
              </Stack>
              <Link to={movieData ? `/moviedata/${movieData.id}` : ""}>
                <RedButton
                  variant="contained"
                  alignItems="center"
                  endIcon={<PlayArrowIcon />}
                  size="large"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  Download
                </RedButton>
              </Link>
            </Box>
            <Box sx={{ width: { xs: "100%", md: "40%" } }}>
              <Button
                variant="contained"
                alignItems="center"
                endIcon={<DownloadIcon size="large" />}
                sx={{
                  backgroundColor: "#fff",
                  color: "#000",
                  fontWeight: "500",
                  width: "100%",
                  fontSize: "1.3rem",
                }}
              >
                Download
              </Button>
              <Typography variant="body2" color="gray" mb={2}>
                {movieData.overview}
              </Typography>
            </Box>
          </Stack>
        </Stack>
        <Stack className="container">
          <MovieList similarmovie={similarmovie} title="Similar" />
        </Stack>
      </Box>
    </>
  );
};

export default MovieDetail;
