import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import Moviedata from "./Moviedata";

const MoviesBox = ({ movie, wrap }) => {
  // console.log(movie);
  return (
    <Stack
      direction={"row"}
      flexWrap={wrap || "nowrap"}
      justifyContent="start"
      gap={1}
    >
      {movie?.map((item, index) => {
        return (
          <Box key={index}>{item.id && <Moviedata moviedata={item} />}</Box>
        );  
      })}
    </Stack>
  );
};

export default MoviesBox;
{
  /* {item.id.videoId && <VideoCard video={item} />} */
}
