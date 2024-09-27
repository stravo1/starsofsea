import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/img-logo-sos-anim-2x.png";
import sabotage from "../assets/dist/images/svg/sabotage-flag.svg";
import sepBlue from "../assets/dist/images/img-sep-blue-xs-2x.png";
import { useMediaQuery } from "react-responsive";

const StickyNavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isVisibleSm, setIsVisibleSm] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prevScrollPosRef = useRef(window.scrollY);

  const mobile = useMediaQuery({ query: "(max-width: 800px)" });
  const tab = useMediaQuery({ query: "(min-width: 900px)" });

  const isScrollingDown = (
    previousScrollPosition: number,
    scrollPosition: number,
  ) => {
    let goingDown = false;

    if (scrollPosition > previousScrollPosition) {
      goingDown = true;
    }

    return goingDown;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (
        currentScrollPos > 150 &&
        isScrollingDown(prevScrollPosRef.current, currentScrollPos)
      ) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      if (currentScrollPos > 150) {
        setIsVisibleSm(false);
      } else {
        setIsVisibleSm(true);
      }
      prevScrollPosRef.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {tab && (
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ top: -200 }}
              animate={{ top: 0 }}
              exit={{ top: -200 }}
              className="sticky-nav-bar fixed px-10 mt-4 w-full box-border z-50"
            >
              <nav className="relative drop-shadow-2xl shadow-2xl bg-[#092136] text-sky-100 p-3 py-1 ring-1 ring-offset-black ring-[#0D62A9] ring-offset-2 rounded-lg">
                <ul className="flex">
                  <li className="uppercase border border-[#0D62A9] border-t-0 border-l-0 border-b-0 w-fit px-6 text-sm font-semibold tracking-wider flex justify-center items-center">
                    <img src={logo.src} className="h-12" />
                  </li>
                  {[
                    "DLC",
                    "Fan Art",
                    "FAQ",
                    "Press Key",
                    "Audio",
                    "Streamer Kit",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="uppercase border border-[#0D62A9] cursor-pointer bg-transparent text-blue-200 hover:text-blue-950 hover:bg-gradient-to-t hover:from-blue-400 hover:to-teal-400 transition-all border-t-0 border-b-0 py-3 w-fit px-6 text-sm font-semibold tracking-wider flex justify-center items-center"
                    >
                      <a href={`#${item.toLowerCase()}`}>{item}</a>
                    </li>
                  ))}
                </ul>
                <div className="flex absolute top-0 right-0 justify-end items-center">
                  <img src={sabotage.src} className="h-40" />
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      )}
      {mobile && (
        <>
          <div className="w-full z-[99] fixed top-0 left-2 flex justify-between">
            <button
              onClick={() => setIsMobileMenuOpen((arg) => !arg)}
              className="m-4 z-[99] h-fit flex justify-center items-center p-4 bg-[#052336] ring ring-offset-1 ring-offset-[#0D62A9] ring-[#052336] rounded-md shadow-md drop-shadow-md"
            >
              {isMobileMenuOpen ? (
                <span className="material-symbols-outlined text-[#558cba]">
                  close
                </span>
              ) : (
                <span className="material-symbols-outlined text-[#558cba]">
                  menu
                </span>
              )}
            </button>
            <AnimatePresence>
              {isVisibleSm && (
                <motion.div
                  initial={{ top: -200 }}
                  animate={{ top: 0 }}
                  exit={{ top: -200 }}
                  className="flex absolute top-0 right-0 justify-end items-center mr-2"
                >
                  <img src={sabotage.src} className="h-32" />
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 100 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col fixed top-0 left-0 w-full h-full bg-[#052336] z-[98] p-4 mobile-menu"
                  id="mobile-menu"
                >
                  <nav className="w-full h-full flex justify-center items-center">
                    <div className="w-full flex flex-col justify-center items-center">
                      <img src={logo.src} className="h-32" />
                      <img src={sepBlue.src} className="h-6 my-4" />
                      {[
                        "DLC",
                        "Fan Art",
                        "FAQ",
                        "Press Key",
                        "Audio",
                        "Streamer Kit",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="uppercase cursor-pointer bg-transparent text-blue-200 py-3 w-fit px-6 text-3xl font-garamond font-semibold tracking-wider flex justify-center items-center"
                        >
                          <a href={`#${item.toLowerCase()}`}>{item}</a>
                        </li>
                      ))}
                      <img src={sepBlue.src} className="h-6 my-4" />
                      </div>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </>
  );
};

export default StickyNavBar;
