import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchfromapi } from "../fetchfromapi";
import MoviesBox from "./MoviesBox";
import not_found from "../images/not-found.png";
import { Box, Stack, Typography } from "@mui/material";

const ShowMoreData = () => {
  const [searchTerm, setSearchTerm] = useState([]);
  const { data } = useParams();

  useEffect(() => {
    fetchfromapi(`/movie/${data}`).then((res) => {
      setSearchTerm(res.results);
      console.log(res);
    });
  }, []);

  return (
    <>
      <div className="container">
        <Box my={3}>
          <Typography variant="h4" mb={2} color="#fff">
            {" "}
            Movies Data Related to{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>{data}</span>
          </Typography>
          {searchTerm.length == 0 ? (
            <Box textAlign="center" my={5}>
              <img src={not_found} />
            </Box>
          ) : (
            <Stack direction={{ sm: "column", md: "row" }}>
              <MoviesBox movie={searchTerm} wrap="wrap" />
            </Stack>
          )}
        </Box>
      </div>
    </>
  );
};

export default ShowMoreData;
