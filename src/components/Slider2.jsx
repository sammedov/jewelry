import React from "react";
import styles from "../styles/Slider2.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const Slider2 = ({ data }) => {
  return (
    // <div className={`${styles.sliderMain} w-[80%] mx-auto `}>
    //   <div className={`${styles.ourColCon}  w-[100%] h-[60%] grid grid-rows-2 grid-cols-1 mx-auto text-center md:grid-cols-2 md:grid-rows-1 md:w-[100%] `}>
    //     <div className={`${styles.ourCol}  flex items-center justify-end md:w-[40%]`}>OUR COLLECTIONS</div>
    //     <Swiper
    //     grid={
    //       3
    //     }
    //       navigation={true}
    //       modules={[Navigation]}
    //       loop={true}
    //       // slidesPerView={2}
    //       className={`${styles.slide} w-full  h-[100%] mx-auto md:w-[50%] `}
    //       breakpoints={{
    //         370: {
    //           slidesPerView: 2,
    //           spaceBetween: 20,
    //         },
    //         480:{
    //           slidesPerView: 4,
    //           spaceBetween:20,
    //         },
    //         768: {
    //           slidesPerView: 4,
    //           spaceBetween:20,
    //         },
    //         1024: {
    //           slidesPerView: 4,
    //           spaceBetween:20,
    //         },
    //       }}
    //     >
    //       {data?.map((item) => (
    //         <SwiperSlide>
    //           <>
    //             <div className={`${styles.slideContent2} `}>
    //               <Image
    //                 fill
    //                 // layout="fill"
    //                 // objectFit="cover"
    //                 src={item.image}
    //               />
    //               {/* <div className={styles.title2}>{item.title}</div> */}
    //             </div>
    //           </>
    //         </SwiperSlide>
    //       ))}
    //     </Swiper>
    //   </div>
    // </div>
    <>
      <div className="container w-full mx-auto my-10 flex mt-32  md:h-[350px] ">
        <div className=" flex w-[100%] h-[300px] flex-wrap md:flex">
          <div className="title justify-center md:justify-start  flex items-center w-[100%] md:w-[35%] md:m-auto ">
            <h2 className={`${styles.ourCol} text-l  md:h-[300px] xl:my-10 `}>
              OUR COLLECTIONS
            </h2>
          </div>

          <Swiper
            // className="w-4/5 h-full ms-2"
            navigation={true}
            modules={[Navigation]}
            loop={true}
            // slidesPerView={2}
            className={`${styles.slide} w-full  h-[50%] mx-10  md:w-[50%] xl:w-[60%] `}
            breakpoints={{
              370: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {data?.map((item) => (
              <SwiperSlide className="box relative ">
                <Image src={item.image} fill />

                <div className="overlay w-full h-full relative bg-slate-50 opacity-0 hover:opacity-50">
                  <p className="item_category absolute transition delay-150 duration-300 ease-in-out bottom-2 right-5">
                    {item.category}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Slider2;
