import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchfromapi } from "../fetchfromapi";
import MoviesBox from "./MoviesBox";
import not_found from "../images/not-found.png";
import { Box, Stack, Typography } from "@mui/material";

const SearchFeed = () => {
  const [searchTerm, setSearchTerm] = useState([]);
  const { searchdata } = useParams();
  useEffect(() => {
    fetchfromapi(`search/movie`, `query=${searchdata}`).then((res) => {
      setSearchTerm(res.results);
      console.log(res.results);
    });
  }, [searchdata]);

  return (
    <>
      <div className="container">
        <img src="" alt="" />
        <Box my={3}>
          <Typography variant="h4" mb={2} color="#fff">
            {" "}
            Movies Data Related to{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              {searchdata}
            </span>
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

export default SearchFeed;
