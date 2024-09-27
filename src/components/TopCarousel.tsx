import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import physicalEdition from "../uploads/2024/01/assets-img-physical-bundle-1-2x.png";
import artbook from "../uploads/2024/04/assets-img-artbook-bundle-1-2x.png";
import soundtrack from "../uploads/2024/03/img-soundtrack-bundle-2x.png";
import wallmoon from "../uploads/2024/03/wallpaper-moon-thumbnail.jpg";
import eclipse from "../uploads/2024/03/wallpaper-eclipse-thumbnail.jpg";

import spotify from "../assets/dist/images/svg/svgexport-13.svg";
import bandcamp from "../assets/dist/images/svg/svgexport-14.svg";
import applem from "../assets/dist/images/svg/svgexport-15.svg";
import youtube from "../assets/dist/images/svg/svgexport-16.svg";

import { useMediaQuery } from "react-responsive";
import { FreeMode, Navigation } from "swiper/modules";

const CarouselSlideWrapper = ({ children }: { children: any }) => {
  return (
    <div className="carousel-slide-wrapper w-full h-full p-6 flex justify-center items-center">
      {children}
    </div>
  );
};

export default () => {
  const [swiper, setSwiper] = useState<any>();
  const [selectedTab, setSelectedTab] = useState(0);
  const mobile = useMediaQuery({ query: "(max-width: 800px)" });
  const tab = useMediaQuery({ query: "(min-width: 900px)" });

  return (
    <div>
      {mobile && (
        <div className="flex justify-between items-center font-monsterrat font-semibold">
          {["Physical", "Art Book", "Soundtrack", "Wallpaper"].map(
            (item, index) => (
              <div
                onClick={() => {
                  setSelectedTab(index);
                  swiper.slideTo(index);
                }}
                className={`w-1/4 text-xs py-4 uppercase flex justify-center items-center cursor-pointer transition-all border-2 border-t-0 border-l-0 border-r-0 ${index == selectedTab ? "border-stone-600 text-stone-600" : "border-stone-200 text-stone-400"}`}
              >
                {item}
              </div>
            ),
          )}
        </div>
      )}
      {tab && (
        <div className="flex justify-between items-center gap-4 px-56 font-monsterrat font-semibold">
          {["Physical", "Art Book", "Soundtrack", "Wallpaper"].map(
            (item, index) => (
              <div
                onClick={() => {
                  setSelectedTab(index);
                  swiper.slideTo(index);
                }}
                className={`ring p-2 ring-offset-1 w-full uppercase line-clamp-1 flex justify-center items-center cursor-pointer transition-all ${index == selectedTab ? "bg-stone-600 text-stone-50 ring-stone-600" : "bg-stone-200 text-stone-600 ring-stone-400"} ${index == 0 ? "rounded-full rounded-r-none" : ""} ${index == 3 ? "rounded-full rounded-l-none" : ""} `}
              >
                {item}
              </div>
            ),
          )}
        </div>
      )}
      <Swiper
        initialSlide={0}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(e) => setSelectedTab(e.activeIndex)}
        onSwiper={(swiper) => {
          setSwiper(swiper);
          console.log(swiper);
        }}
        allowTouchMove={false}
        className="my-10"
      >
        <SwiperSlide>
          <CarouselSlideWrapper>
            <div className="flex flex-col md:flex-row m-2 md:h-[35rem] justify-center items-center md:px-20">
              <img
                className="object-contain w-full md:w-2/3 h-2/3 md:h-full"
                src={physicalEdition.src}
              />
              <div className="flex flex-col w-full items-center md:items-start text-center md:text-left md:w-1/3">
                <h2 className="font-bold text-3xl md:text-5xl font-garamond">
                  The physical edition is available now through iam8bit!
                </h2>
                {tab && (
                  <ul className="my-6 ml-2 space-y-2 list-image-[url('../assets/dist/images/svg/svgexport-12.svg')]">
                    <li>Double sided poster featuring art from Bryce Kho</li>
                    <li>Available for Nintendo Switch, Xbox, PS4, and PS5</li>
                  </ul>
                )}
                <button className="uppercase text-md mt-3 font-semibold p-4 border-[3px] border-stone-200 w-fit">
                  Order Now
                </button>
              </div>
            </div>
          </CarouselSlideWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselSlideWrapper>
            <div className="flex flex-col md:flex-row m-2 md:h-[35rem] justify-center items-center md:px-20">
              <img
                className="object-contain w-full md:w-2/3 h-2/3 md:h-full"
                src={artbook.src}
              />
              <div className="flex flex-col w-full items-center md:items-start text-center md:text-left md:w-1/3">
                <h2 className="font-bold mb-3 text-3xl md:text-5xl font-garamond">
                  Sea of Stars: The Concept Art of Bryce Kho
                </h2>
                {tab && (
                  <>
                    The art book showcases all the incredible characters that
                    Bryce has lovingly brought to life through years of
                    discussion with Creative Director Thierry Boulanger, and is
                    a book to enjoy for gamers and art-lovers alike
                  </>
                )}
                {tab && (
                  <ul className="my-6 ml-2 space-y-2 list-image-[url('../assets/dist/images/svg/svgexport-12.svg')]">
                    <li>Double sided poster featuring art from Bryce Kho</li>
                    <li>Available for Nintendo Switch, Xbox, PS4, and PS5</li>
                  </ul>
                )}
                <button className="uppercase text-md mt-3 font-semibold p-4 border-[3px] border-stone-200 w-fit">
                  Order Now
                </button>
              </div>
            </div>
          </CarouselSlideWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselSlideWrapper>
            <div className="flex flex-col md:flex-row m-2 md:h-[35rem] justify-center items-center md:px-20">
              <img
                className="object-contain w-full md:w-2/3 h-2/3 md:h-full"
                src={soundtrack.src}
              />
              <div className="flex flex-col w-full items-center md:items-start text-center md:text-left md:w-1/3">
                <h2 className="font-bold text-3xl md:text-4xl font-garamond md:mb-3">
                  Listen to the Digital Soundtrack
                </h2>
                {tab &&
                  "More than 5 hours of music over the span of 3 discs. Includes a special disc with pirate versions."}
                <div className="flex justify-center items-center gap-2 my-2">
                  LISTEN:{" "}
                  <span className="ml-2">
                    <img className="w-6" src={spotify.src} />
                  </span>
                  <span className="ml-2">
                    <img className="w-6" src={bandcamp.src} />
                  </span>
                  <span className="ml-2">
                    <img className="w-6" src={applem.src} />
                  </span>
                  <span className="ml-2">
                    <img className="w-6" src={youtube.src} />
                  </span>
                </div>
                <hr className="border border-stone-200 w-full my-2" />
                <h2 className="font-bold text-3xl md:text-4xl font-garamond">
                  Pre-order the 2xLP Vinyl on iam8bit
                </h2>
                {tab && (
                  <ul className="my-6 ml-2">
                    <li>
                      Featuring Music by Eric W. Brown and Yasunori Mitsuda
                    </li>
                    <li>Includes Complete Soundtrack Download (200+ Tracks)</li>
                  </ul>
                )}
                <button className="uppercase text-md mt-3 font-semibold p-4 border-[3px] border-stone-200 w-fit">
                  Pre-Order Now
                </button>
              </div>
            </div>
          </CarouselSlideWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselSlideWrapper>
            <div className="md:px-20 w-full">
              <h2 className="font-bold text-3xl md:text-4xl mb-10 font-garamond text-center">
                Download the Official Wallpaper
              </h2>

              <Swiper
                navigation={{
                  nextEl: "#next",
                  prevEl: "#prev",
                }}
                modules={[Navigation, FreeMode]}
                slidesPerView={tab ? 3 : 2}
                spaceBetween={30}
                className="mySwiper"
              >
                <button
                  id="next"
                  className="absolute z-10 top-1/2 right-0 w-8 h-8 flex justify-center items-center bg-white rounded-full"
                >
                  <span className="material-symbols-outlined text-black">
                    chevron_right
                  </span>
                </button>
                <button
                  id="prev"
                  className="absolute z-10 top-1/2 left-0 w-8 h-8 flex justify-center items-center bg-white rounded-full"
                >
                  <span className="material-symbols-outlined text-black">
                    chevron_left
                  </span>
                </button>
                <SwiperSlide>
                  <div className="p-4 bg-stone-200 drop-shadow-xl flex flex-col justify-center items-center">
                    <div className="aspect-[9/16] md:aspect-[4/3]">
                      <img
                        src={wallmoon.src}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-sm font-semibold mt-2 uppercase">
                      Official Keyart
                    </h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-4 bg-stone-200 drop-shadow-xl flex flex-col justify-center items-center">
                    <div className="aspect-[9/16] md:aspect-[4/3]">
                      <img
                        src={eclipse.src}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-sm font-semibold mt-2 uppercase">
                      Official Keyart
                    </h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-4 bg-stone-200 drop-shadow-xl flex flex-col justify-center items-center">
                    <div className="aspect-[9/16] md:aspect-[4/3]">
                      <img
                        src={wallmoon.src}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-sm font-semibold mt-2 uppercase">
                      Official Keyart
                    </h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-4 bg-stone-200 drop-shadow-xl flex flex-col justify-center items-center">
                    <div className="aspect-[9/16] md:aspect-[4/3]">
                      <img
                        src={eclipse.src}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-sm font-semibold mt-2 uppercase">
                      Official Keyart
                    </h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-4 bg-stone-200 drop-shadow-xl flex flex-col justify-center items-center">
                    <div className="aspect-[9/16] md:aspect-[4/3]">
                      <img
                        src={wallmoon.src}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-sm font-semibold mt-2 uppercase">
                      Official Keyart
                    </h2>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </CarouselSlideWrapper>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
