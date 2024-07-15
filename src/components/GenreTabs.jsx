import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { styled } from "@mui/material/styles";
import TabPanel from "@mui/lab/TabPanel";
import { fetchfromapi } from "../fetchfromapi";
import MoviesBox from "./MoviesBox";
import SearchFeed from "./SearchFeed";

export default function GenreTabs() {
  const [value, setValue] = useState(0);
  const [genre, setGenre] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    fetchfromapi("genre/movie/list").then(({ genres }) => setGenre(genres));
  }, []);
  //   console.log(genre.name);
  const tabChange = (name) => {
    console.log(name);
  };
  const AntTabs = styled(Tabs)({
    "& .MuiTabs-indicator": {
      backgroundColor: "red",
    },
  });
  const AntTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      "&:hover": {
        color: "red",
        opacity: 1,
      },
      "&.Mui-selected": {
        color: "red",
        fontWeight: theme.typography.fontWeightMedium,
      },
      "&.Mui-focusVisible": {
        backgroundColor: "#d1eaff",
      },
    })
  );

  return (
    <>
      <Box sx={{ width: "100vw", bgcolor: "transparent" }}>
        <AntTabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          sx={{ color: "red" }}
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {genre.map((items, index) => {
            return (
              <AntTab
                label={items.name}
                key={index}
                sx={{ color: "#fff" }}
                onClick={() => tabChange(items.name)}
              />
            );
          })}
        </AntTabs>
      </Box>
      {/* <Box sx={{ width: "100vw", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              
              aria-label="scrollable auto tabs example"
            >
              {genre.map((items, index) => {
                return (
                  <Tab
                    label={items.name}
                    value={index}
                    key={index}
                    sx={{ color: "#fff" }}
                    onClick={()=>tabChange(items.name)}
                  />
                );
              })}
            </TabList>
          </Box>
          {/* {genre.map((items, index) => {
            return (
              <TabPanel value={index} key={index} sx={{ color: "#fff" }}>
                <MoviesBox movie = {items}/>

              </TabPanel>
            );
          })} 
        </TabContext>
      </Box> */}
    </>
  );
}
