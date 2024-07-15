import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import img_not_available from "../images/Image_not_available.png";
import { Link } from "react-router-dom";

const Moviedata = ({ moviedata }) => {
  return (
    <>
      <Card
        sx={{
          width: { xs: "100%", sm: "320px", md: "175px" },
          boxShadow: "none",
          height: "auto",
          position: "relative",
          backgroundColor: "#111",
          borderRadius: 0,
        }}
      >
        <Link to={moviedata.id ? `/moviedata/${moviedata.id}` : ""}>
          <CardMedia className="boxhover"
            image={
              moviedata?.backdrop_path
                ? `http://image.tmdb.org/t/p/w500/${moviedata?.poster_path}`
                : img_not_available
            }
            alt={moviedata?.title}
            sx={{
              width: { xs: "300px", sm: "320px", md: "100%" },
              height: "250px",
            }}
          />
        </Link>
        <Box sx={{ position: "absolute", top: "10px", right: "10px" }}>
          <Box
            sx={{
              backgroundColor: "#FFFF00",
              borderRadius: "990px",
              color: "#000",
            }}
            px={1}
            size="small"
            fontWeight="500"
          >
            {moviedata.vote_average.toFixed(1)}
          </Box>
        </Box>
        <CardContent sx={{ backgroundColor: "#030303", height: "120px" }}>
          <Link to={moviedata.id ? `/moviedata/${moviedata.id}` : ""}>
            <Typography variant="subtitle1" fontWeight="bold" color="#fff">
              {moviedata?.title.slice(0, 25) || "Loading....."}
            </Typography>
            {/* <Typography variant="subtitle2" fontWeight="" color="grey">
              {moviedata?.overview.slice(0, 20) || "Loading....."}
            </Typography> */}
            <Stack marginY={1}>
              <Typography
                variant="body2"
                fontWeight=""
                color="grey"
                sx={{ fontSize: "12px" }}
              >
                {/* {`Language : ${moviedata?.original_language}`} */}
              </Typography>
              <Typography
                variant="body2"
                fontWeight=""
                color="grey"
                sx={{ fontSize: "12px" }}
              >
                {`Date : ${moviedata?.release_date}`}
              </Typography>
            </Stack>
          </Link>
        </CardContent>
      </Card>
    </>
  );
};

export default Moviedata;
