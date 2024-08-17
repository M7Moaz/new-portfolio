import PropTypes from "prop-types";
import Container from "./Container";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaAward } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { LiaLanguageSolid } from "react-icons/lia";

import logo from "/logo.png";
export const Navbar = ({ modeSt }) => {
  const { t, ready } = useTranslation();

  const mode = localStorage.getItem("mode") || "light";
  const [modeState, setModeState] = useState(mode);
  const modeHandler = () => {
    if (modeState === "light") {
      modeSt("dark");
      setModeState("dark");
    } else {
      modeSt("light");
      setModeState("light");
    }
  };

  const [links, setLinks] = useState(null);
  useEffect(() => {
    if (ready) {
      const linksData = t("links", { returnObjects: true });
      setLinks(linksData);
    }
  }, [ready, t]);

  if (!links) {
    return null;
  }

  const mobileLinksIcons = [
    { url: "#home", icon: <FaHome /> },
    { url: "#projects", icon: <MdWork /> },
    { url: "#skills", icon: <FaAward /> },
    { url: "#contact", icon: <RiContactsFill /> },
  ];

  const textVariant = (delay) => ({
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.5, ease: "easeOut" },
    },
  });
  const zoomIn = (delay) => ({
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.5, ease: "easeOut" },
    },
  });

  return (
    <section className="fixed z-50 w-full">
      <Container>
        <motion.div
          initial="hidden"
          animate="show"
          variants={textVariant(0.25)}
          className="bg-black backdrop-blur-sm bg-opacity-5 shadow-md text-black font-medium p-3 px-6 rounded-full flex items-center justify-between"
        >
          <motion.img
            initial="hidden"
            animate="show"
            variants={textVariant(0.3)}
            src={logo}
            alt="img"
            className="w-7 rounded-full hidden sm:block"
          />
          <div className="items-center justify-center gap-5 hidden md:flex dark:text-white">
            {links.map((link, idx) => (
              <motion.a
                initial="hidden"
                animate="show"
                variants={zoomIn(0.25 + idx * 0.25)}
                key={idx}
                href={link.url}
                className="text-md hover:text-brand dark:hover:text-primary"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
          {/* For Mobile */}
          <div className="items-center justify-center gap-1.5 sm:gap-3 flex md:hidden dark:text-white dark:opacity-70">
            {mobileLinksIcons.map((link, idx) => (
              <motion.a
                initial="hidden"
                animate="show"
                variants={zoomIn(0.25 + idx * 0.25)}
                key={idx}
                href={link.url}
                className="text-xl hover:text-brand dark:hover:text-primary shadow-md bg-white bg-opacity-10 backdrop-blur-md p-2 rounded-full"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          {/* For Mobile */}
          <div className="flex items-center">
            {<LanguageSwitcher />}

            <motion.div
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                rotate: 360,
                transition: { delay: 1, duration: 0.5 },
              }}
              className="bg-white bg-opacity-5 shadow-md backdrop-blur-md  py-0.5 px-1 rounded-full select-none"
            >
              <button onClick={modeHandler}>
                <motion.span className="block relative">
                  {modeState === "light" ? "🌑" : "💡"}
                </motion.span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block ms-auto me-2">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex items-center justify-between bg-white shadow-sm bg-opacity-50 dark:bg-mid_gray dark:text-light py-1 px-2 rounded-md"
      >
        {/* <span>Menu</span> */}
        <LiaLanguageSolid />
      </button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key={"lang-menu"}
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.1,
                duration: 0.2,
                type: "spring",
                stiffness: 200,
              },
            }}
            exit={{
              scale: 0,
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
            className="absolute text-center mt-2 rounded-md shadow-md -left-1/2 bg-white dark:bg-mid_gray dark:text-light ring-opacity-5"
          >
            <button
              className="w-full py-1 px-2 hover:bg-brand hover:text-light dark:hover:bg-primary"
              style={{ fontFamily: "Cairo" }}
              onClick={() => {
                changeLanguage("ar");
                setIsOpen(false);
              }}
            >
              عربي
            </button>
            <button
              className=" w-full py-1 px-2 hover:bg-brand hover:text-light dark:hover:bg-primary"
              onClick={() => {
                changeLanguage("en");
                setIsOpen(false);
              }}
            >
              English
            </button>
            <button
              className=" w-full py-1 px-2 hover:bg-brand hover:text-light dark:hover:bg-primary"
              onClick={() => {
                changeLanguage("tr");
                setIsOpen(false);
              }}
            >
              Türkçe
            </button>
            <button
              className=" w-full py-1 px-2 hover:bg-brand hover:text-light dark:hover:bg-primary"
              onClick={() => {
                changeLanguage("de");
                setIsOpen(false);
              }}
            >
              Deutsch
            </button>
            <button
              className=" w-full py-1 px-2 hover:bg-brand hover:text-light dark:hover:bg-primary"
              onClick={() => {
                changeLanguage("nl");
                setIsOpen(false);
              }}
            >
              Dutch
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

Navbar.propTypes = {
  modeSt: PropTypes.func.isRequired,
};
