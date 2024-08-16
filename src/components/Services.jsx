import { FaCode, FaMobileAlt, FaCodeBranch, FaGlobe } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { IoApps } from "react-icons/io5";
import { IoIosSpeedometer } from "react-icons/io";
import { FaUniversalAccess } from "react-icons/fa6";
import Title from "./ui/Title";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const icons = [
  {
    icon: <FaCode className="mx-auto" />,
  },
  {
    icon: <FaMobileAlt className="mx-auto" />,
  },
  {
    icon: <MdDesignServices className="mx-auto" />,
  },
  {
    icon: <IoApps className="mx-auto" />,
  },
  {
    icon: <IoIosSpeedometer className="mx-auto" />,
  },
  {
    icon: <FaGlobe className="mx-auto" />,
  },
  {
    icon: <FaCodeBranch className="mx-auto" />,
  },
  {
    icon: <FaUniversalAccess className="mx-auto" />,
  },
];

const Services = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Title>{t("services")}</Title>
      <div className="flex flex-wrap gap-4 justify-center">
        {BackgroundGradientDemo()}
      </div>
    </div>
  );
};

export function BackgroundGradientDemo() {
  const { t, ready } = useTranslation();

  const [cards, setCards] = useState(null);
  useEffect(() => {
    if (ready) {
      const data = t("services_cards", { returnObjects: true });
      setCards(data);
    }
  }, [t]);

  if (!cards) return null;

  return cards.map((el, idx) => (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          delay: idx * 0.05,
          duration: 0.5,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
        },
      }}
      viewport={{ once: true }}
      key={idx}
      className="max-w-[350px] text-center"
    >
      <div className="will-move rounded-[22px] shadow-md p-4 sm:p-10 w-full h-full bg-gradient-to-br from-blue-50 to-red-100 dark:from-slate-600 dark:to-gray-600">
        <span className="text-8xl text-brand dark:text-primary">
          {icons[idx].icon}
        </span>
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {el.title}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          {el.description}
        </p>
      </div>
    </motion.div>
  ));
}

export default Services;
