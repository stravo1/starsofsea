import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import serai from "../uploads/2024/02/img-serai-idle.png";
import garl from "../uploads/2024/02/img-garl-idle.png";
import zale from "../uploads/2024/02/img-zale-idle.png";
import valere from "../uploads/2024/02/img-valere-idle.png";

import cornerOrn from "../assets/dist/images/svg/svgexport-24.svg";

const data: any = {
  valere: {
    name: "Valere",
    desc: "Born on the Winter Solstice, Valere shows curiosity and balance. Gifted with Lunar Magic, she can absorb Eclipse Orbs in her moonstaff to dish out massive damage.",
    sketchSrc:
      "https://seaofstarsgame.co/wp-content/uploads/2020/03/img-valere-sketch.png",
    images: [
      "https://seaofstarsgame.co/wp-content/uploads/2020/03/moongirl-attack-1x-1.gif",
      "https://seaofstarsgame.co/wp-content/uploads/2020/03/moongirl-combat-idle-1x-1.gif",
      "https://seaofstarsgame.co/wp-content/uploads/2020/03/moongirl-running-1x-1.gif",
    ],
  },
  zale: {
    name: "Zale",
    desc: "Born on the Summer Solstice, Zale is optimistic and bold. He wields a sunblade, through which he can absorb Eclipse Orbs whenever his attacks need an extra kick.",
    sketchSrc:
      "https://seaofstarsgame.co/wp-content/uploads/2020/03/img-zale-sketch.png",
    images: [
      "https://seaofstarsgame.co/wp-content/uploads/2020/03/sunboy-attack-1x-1.gif",
      "https://seaofstarsgame.co/wp-content/uploads/2020/03/sunboy-combat-idle-1x.gif",
      "https://seaofstarsgame.co/wp-content/uploads/2020/03/sunboy-running-1x.gif",
    ],
  },
  garl: {
    name: "Garl",
    desc: "Garl was born a regular kid devoid of any special powers. Along with his training as a cook, his innately strong constitution makes him a capable defensive fighter, giving him the tools to support his two best friends in their Solstice Warrior duties.",
    sketchSrc:
      "https://seaofstarsgame.co/wp-content/uploads/2020/04/img-garl-sketch@2x.png",
    images: [
      "https://seaofstarsgame.co/wp-content/uploads/2020/04/garl-running-1x.gif",
      "https://seaofstarsgame.co/wp-content/uploads/2020/04/garl-combat-idle.gif",
      "https://seaofstarsgame.co/wp-content/uploads/2020/04/garl-idle-breaker-1x.gif",
    ],
  },
  serai: {
    name: "Serai",
    desc: "Serai is a mysterious figure who appears in the town of Demacia. She is a master of the arcane arts and uses her powers to manipulate the elements to her advantage. She is a formidable foe and a valuable ally.",
    sketchSrc:
      "https://seaofstarsgame.co/wp-content/uploads/2024/02/img-serai-sketch@2x.png",
    images: [
      "https://seaofstarsgame.co/wp-content/uploads/2024/02/serai-combat-idle.gif",
      "https://seaofstarsgame.co/wp-content/uploads/2024/02/serai-running.gif",
      "https://seaofstarsgame.co/wp-content/uploads/2024/02/serai-attack.gif",
    ],
  },
};

const CharacterSelection = () => {
  const [activeCharacter, setActiveCharacter] = useState<string>("valere");
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      key={activeCharacter}
      className="w-full flex flex-col my-24"
    >
      <div className="w-screen h-[160px] overflow-x-scroll overflow-y-visible flex justify-center">
        <div className="characters flex w-full md:w-fit items-end">
          <button
            className={
              "shrink-0 character-button" +
              (activeCharacter === "valere" ? " active-character-button" : "")
            }
            onClick={() => setActiveCharacter("valere")}
          >
            <img
              src={valere.src}
              alt=""
              className="w-full h-full object-contain absolute top-[-1.5rem]"
            />
          </button>
          <button
            className={
              "shrink-0 character-button" +
              (activeCharacter === "zale" ? " active-character-button" : "")
            }
            onClick={() => setActiveCharacter("zale")}
          >
            <img
              src={zale.src}
              alt=""
              className="w-full h-full object-contain absolute top-[-1.5rem]"
            />
          </button>
          <button
            className={
              "shrink-0 character-button" +
              (activeCharacter === "garl" ? " active-character-button" : "")
            }
            onClick={() => setActiveCharacter("garl")}
          >
            <img
              src={garl.src}
              alt=""
              className="w-full h-full object-contain absolute top-[-1rem]"
            />
          </button>
          <button
            className={
              "shrink-0 character-button" +
              (activeCharacter === "serai" ? " active-character-button" : "")
            }
            onClick={() => setActiveCharacter("serai")}
          >
            <img
              src={serai.src}
              alt=""
              className="w-full h-full object-contain absolute top-[-1rem]"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:m-10 mt-0 bg-stone-100 p-4 shadow-md drop-shadow-md rounded-md">
        <div className="content flex md:basis-2/3 p-4 box-border">
          <img
            className="w-52 object-contain hidden md:flex"
            src={data[activeCharacter].sketchSrc}
            alt=""
          />
          <div className="flex flex-col text-center md:text-left">
            <h2 className="font-bold text-5xl font-garamond my-4">
              {data[activeCharacter].name}
            </h2>
            <span>{data[activeCharacter].desc}</span>
          </div>
        </div>
        <Swiper
          navigation={{
            nextEl: "#next",
            prevEl: "#prev",
          }}
          pagination={true}
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          className="mySwiper aspect-square relative md:basis-1/3 border-2 border-stone-200 w-full"
        >
          <img src={cornerOrn.src} alt="" className="absolute top-2 left-2" />
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
          />
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
          {data[activeCharacter].images.map((image: string, index: number) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full flex justify-center items-center">
                <div className="aspect-square w-52 h-52">
                  <img
                    src={image}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default CharacterSelection;
