import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../images/Logonetflix.png";
// import { logo } from "../utils/constatnt";

const Navbar = () => {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        zIndex="999"
        sx={{
          position: "sticky",
          top: "0",
          background: "#000",
          justifyContent: "space-between",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" height={45} className="logo" />
        </Link>
        <SearchBar />
      </Stack>
    </>
  );
};

export default Navbar;
