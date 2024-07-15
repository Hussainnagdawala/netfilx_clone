import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handlesubmit = (event) => {
    event.preventDefault();
    if (searchTerm) {
      navigate(`/searchfeed/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <>
      <Paper
        component="form"
        onSubmit={handlesubmit}
        sx={{
          borderRadius: "50px",
          border: "1px solid #e3e3e3",
          pl: 2,
          boxShadow: "none",
          mr: { sm: 3 },
        }}
      >
        <input
          type="text"
          className="search-bar"
          placeholder="Search...."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
          <Search />
        </IconButton>
      </Paper>
    </>
  );
};

export default SearchBar;
