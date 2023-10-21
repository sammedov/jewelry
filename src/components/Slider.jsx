import React, { useState } from "react";
// import {data} from '../pages/api/hello';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import styles from "../styles/Slider.module.scss";

const Slider = ({ data }) => {
  // const [search, setSearch] = useState("");
  // const filteredData = data?.filter((item) => {
  //   const searchTerm = search.toLowerCase();
  //   return search === '' || item.title.toLowerCase().includes(searchTerm);
  // });
  return (
    <div>
      {/* <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      /> */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.map((item) => (
          <SwiperSlide>
            <>
              <div className={styles.slideContent}>
                <Image width={400} height={400} src={item.image} className={styles.img} />
              </div>
                <div className={styles.title}>{item.title}</div>
            </>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
