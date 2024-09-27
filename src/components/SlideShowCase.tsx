import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const urls = [
  "https://seaofstarsgame.co/wp-content/uploads/2023/08/Combat-3-640x360.png",
  "https://seaofstarsgame.co/wp-content/uploads/2023/08/Combat-2-640x360.png",
  "https://seaofstarsgame.co/wp-content/uploads/2023/08/Combat-1-640x360.png",
];

const altUrls = [
  "https://seaofstarsgame.co/wp-content/uploads/2023/08/World-5-1-640x360.png",
  "https://seaofstarsgame.co/wp-content/uploads/2023/08/World-4-640x360.png",
  "https://seaofstarsgame.co/wp-content/uploads/2023/08/World-2-640x360.png",
];
const SlideShowCase = ({ alt = false }: { alt: Boolean }) => {
  const urlsBeingUsed = alt ? altUrls : urls;
  return (
    <div className="p-10 bg-white m-8 shadow-lg drop-shadow-lg">
      <Swiper
        navigation={{
          nextEl: "#next",
          prevEl: "#prev",
        }}
        pagination={true}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        className="mySwiper rounded-lg relative border-2 border-stone-200 w-full h-fit mb-10"
      >
        {/* <img src={cornerOrn.src} alt="" className="absolute top-2 left-2" />
      <img
        src={cornerOrn.src}
        alt=""
        className="absolute top-2 right-2 rotate-90"
      />
      <img
        src={cornerOrn.src}
        alt=""
        className="absolute bottom-2 right-2 rotate-[180deg]"
      />
      <img
        src={cornerOrn.src}
        alt=""
        className="absolute bottom-2 left-2 rotate-[270deg]"
      /> */}
        <button
          id="next"
          className="absolute z-10 top-1/2 right-0 w-8 h-8 flex justify-center items-center bg-stone-300 rounded-full"
        >
          <span className="material-symbols-outlined text-black">
            chevron_right
          </span>
        </button>
        <button
          id="prev"
          className="absolute z-10 top-1/2 left-0 w-8 h-8 flex justify-center items-center bg-stone-300 rounded-full"
        >
          <span className="material-symbols-outlined text-black">
            chevron_left
          </span>
        </button>
        {urlsBeingUsed.map((image: string, index: number) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex justify-center items-center md:p-2">
              <div className="w-fit h-full">
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  className="md:h-full w-full object-contain rounded-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <h2 className="font-garamond text-2xl md:text-3xl font-bold">
        Lorem Ipsum
      </h2>
      <span className="font-garamond md:text-lg line-clamp-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quae,
        voluptatem temporibus saepe reprehenderit maiores cumque alias quisquam
        aspernatur quibusdam amet expedita, numquam eum magni, iste asperiores
        obcaecati dolore officia. Impedit cupiditate exercitationem, at
        recusandae saepe voluptatibus possimus nobis eius amet maxime quo unde
        rem ullam facilis. Facilis, praesentium quaerat!
      </span>
    </div>
  );
};

export default SlideShowCase;
