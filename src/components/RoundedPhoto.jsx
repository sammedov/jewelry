import Image from "next/image";
import React from "react";
import styles from "../styles/RoundedPhoto.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";


const RoundedPhoto = ({ data }) => {
  return (
    //     <div className={`${styles.rounded} w-[80%] m-auto grid grid-cols-5         gap-x-3 `}>
    //       {/* {data.map((item)=>(
    //         <div></div>
    //       ))} */}
    //      <div className="flex flex-wrap w-full h-auto">
    // <div className="img-box relative w-full h-[150px]">
    // <Image fill src={data[0].image} className="rounded-[50%]"/>
    // </div>
    // <div className="title w-full">
    //   <p className="w-full">
    // {data[0].category}
    //   </p>
    // </div>
    //      </div>

    //      <div className="flex flex-wrap w-full h-auto">
    // <div className="img-box relative w-full h-[150px]">
    // <Image fill src={data[0].image} className="rounded-[50%]"/>
    // </div>
    // <div className="title w-full">
    //   <p className="w-full">
    // {data[0].category}
    //   </p>
    // </div>
    //      </div>
    //      <div className="flex flex-wrap w-full h-auto">
    // <div className="img-box relative w-full h-[150px]">
    // <Image fill src={data[0].image} className="rounded-[50%]"/>
    // </div>
    // <div className="title w-full">
    //   <p className="w-full">
    // {data[0].category}
    //   </p>
    // </div>
    //      </div>
    //      <div className="flex flex-wrap w-full h-auto">
    // <div className="img-box relative w-full h-[150px]">
    // <Image fill src={data[0].image} className="rounded-[50%]"/>
    // </div>
    // <div className="title w-full">
    //   <p className="w-full">
    // {data[0].category}
    //   </p>
    // </div>
    //      </div>
    //      <div className="flex flex-wrap w-full h-auto">
    // <div className="img-box relative w-full h-[150px]">
    // <Image fill src={data[0].image} className="rounded-[50%]"/>
    // </div>
    // <div className="title w-full">
    //   <p className="w-full">
    // {data[0].category}
    //   </p>
    // </div>
    //      </div>
    //     </div>
    // <div className={styles.sliderMain}>


      <div className= 'h-[500px]   flex items-center'>
        <Swiper
          loop={true}
          spaceBetween={16} 
          className={`${styles.slide} w-[90%]  h-[300px] `}
          breakpoints={{
            370: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,

            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 30  ,
            },
          }}
        >
          {data?.map((item) => (
            <SwiperSlide>
              <>
                <div>
                  <Image
                    fill
                    className="rounded-[50%] "
                    // layout="fill"
                    // objectFit="cover"
                    src={item.image}
                  />
                </div>
                <div className="absolute bottom-0 left-12 font-bold  ">
                  {/* <div className=' font-bold '></div> */}
                  {item.category}
                </div>
              </>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );
};

export default RoundedPhoto;
