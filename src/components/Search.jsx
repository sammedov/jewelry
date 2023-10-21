import React, { useState } from "react";

const Search = ({ data }) => {
  const [search, setSearch] = useState([]);

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
       {data.filter((item)=>{
              return search === '' ? data : data.title.toLowerCase().includes(search) 
              
            })
            // .map((data, index) => (
              
            // ))
          } */}
    </div>
  );
};

export default Search;
