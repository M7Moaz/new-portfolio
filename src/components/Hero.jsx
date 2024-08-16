import Container from "./Container";
import heroImg from "../assets/heroImg2.png";
import { FlipWords } from "../components/ui/flip-words";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const textAnimate = (delay) => ({
  hidden: { scale: 0 },
  show: { scale: 1, transition: { delay: delay, duration: 0.3 } },
});

export function FlipWordsRun() {
  const { t, i18n } = useTranslation();
  const words = ["Javascript", "React.js", "Next.js"];

  return (
    <div className="md:text-start">
      <motion.h1
        variants={textAnimate(0.3)}
        initial="hidden"
        animate="show"
        className="will-move text-3xl font-medium"
      >
        {t("hi_i_am_moaz")}
      </motion.h1>
      <motion.h2
        variants={textAnimate(0.4)}
        initial="hidden"
        animate="show"
        className="text-xl md:text-2xl mt-2"
      >
        {i18n.language === "ar" ? t("developer") : t("creative")}
        <span className="mt-2 will-move text-brand dark:text-primary" dir="ltr">
          <FlipWords words={words} />
        </span>{" "}
        {i18n.language === "ar" ? t("creative") : t("developer")}
      </motion.h2>
    </div>
  );
}
const Hero = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <div className="text-center md:text-start mt-24 text-dark dark:text-light flex justify-between md:items-center flex-col md:flex-row">
        <div>
          {FlipWordsRun()}
          <motion.p
            variants={textAnimate(0.5)}
            initial="hidden"
            animate="show"
            className="mt-2 will-move"
          >
            {t("heroDesc")}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
              },
            }}
            whileTap={{
              scale: 0.9,
              transition: {
                delay: 0,
                type: "spring",
                stiffness: 400,
                duration: 0.5,
              },
            }}
            whileHover={{
              scale: 1.1,
            }}
            className="bg-blue-50 ring-1 ring-brand dark:ring-primary mt-4 bg-opacity-5 shadow-md backdrop-blur-lg p-2 px-6 rounded-full transition-colors hover:bg-brand hover:text-white dark:hover:bg-primary"
          >
            {t("resume")}
          </motion.button>
        </div>
        <div className="mt-10 md:mt-0 flex justify-center">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1, duration: 1 },
            }}
            src={heroImg}
            alt="react"
            className="max-w-xs sm:max-w-sm"
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
