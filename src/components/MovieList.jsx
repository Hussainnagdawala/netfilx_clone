import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MoviesBox from "./MoviesBox";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { fetchfromapi } from "../fetchfromapi";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const RedButton = styled(Button)`
  &:hover {
    background-color: transparent;
    color: #ffffff;
  }
`;

const MovieList = ({ type, title, similarmovie }) => {
  const [movietype, setmovietype] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (type != null) {
      const sahil = () => {
        fetchfromapi(`/movie/${type}`).then((res) => {
          setmovietype(res.results);
        });
      };
      sahil();
    }
  }, []);

  const showMoreData = () => {
    navigate(`/moredata/${type}`);
  };

  return (
    <>
      <Box mb={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5" mb={3} color="#fff">
            <span className="fw-bold" style={{ color: "red" }}>
              {title}
            </span>{" "}
            Movies
          </Typography>
          <RedButton
            variant="text"
            endIcon={<KeyboardDoubleArrowRightIcon />}
            onClick={showMoreData}
            sx={{ color: "red" }}
          >
            View More
          </RedButton>
        </Stack>
        <Stack
          direction={{ sm: "column", md: "row" }}
          sx={{ overflowX: "auto" }}
        >
          <MoviesBox movie={similarmovie || movietype} />
        </Stack>
      </Box>
    </>
  );
};

export default MovieList;
