import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "@mui/material";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container">
        <Button onClick={() => setCount(count + 1)}>
          <AddIcon />
        </Button>
        {count}
        <Button onClick={() => setCount(count - 1)}>
          <RemoveIcon />
        </Button>
      </div>
    </>
  );
};

export default Counter;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ReactPaginate from 'react-paginate';

// const App = () => {
//   const [data, setData] = useState([]);
//   const [pageCount, setPageCount] = useState(0);
//   const [currentPage, setCurrentPage] = useState(0);

//   useEffect(() => {
//     fetchData();
//   }, [currentPage]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`https://example.com/api/data?page=${currentPage}`);
//       setData(response.data.items);
//       setPageCount(Math.ceil(response.data.totalItems / 20)); // Assuming 10 items per page
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handlePageChange = (selected) => {
//     setCurrentPage(selected.selected);
//   };

//   return (
//     <div>
//       {data.map(item => (
//         <div key={item.id}>{item.name}</div>
//       ))}
//       <ReactPaginate
//         pageCount={pageCount}
//         pageRangeDisplayed={5}
//         marginPagesDisplayed={2}
//         onPageChange={handlePageChange}
//         containerClassName={'pagination'}
//         activeClassName={'active'}
//       />
//     </div>
//   );
// };

// export default App;

