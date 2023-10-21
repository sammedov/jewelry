import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/AllProducts.module.scss";

const AllProducts = ({ data }) => {
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className={`${styles.allPr} `}>
      <div className={styles.written}>All Products</div>

      <input
        className={styles.input}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className={`${styles.gridContainer} p-4 m-5  grid-flow-dense  grid gap-2 grid-cols-2  
      md:grid-cols-4   `}>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div className={`${styles.gridItems} m-5  `} key={item.id}>
              <Image
                width={150}
                height={200}
                src={item.image}
                alt={item.title}
                className="m-auto"
              />
              <div>{item.title}</div>
            </div>
          ))
        ) : (
          <div className='col-span-5'>
            Mehsul Tapilmadi
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
