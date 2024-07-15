import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SearchFeed from "./components/SearchFeed";
import { Box } from "@mui/material";
import GenreTabs from "./components/GenreTabs";
import MovieDetail from "./components/MovieDetail";
import Footer from "./components/Footer";
import ShowMoreData from "./components/ShowMoreData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{ background: "#111", height: "100%" }}>
          <Navbar />
          <GenreTabs />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/searchfeed/:searchdata"
              exact
              element={<SearchFeed />}
            />
            <Route path="/moviedata/:id" exact element={<MovieDetail />} />
            <Route path="/moredata/:data" exact element={<ShowMoreData />} />
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
