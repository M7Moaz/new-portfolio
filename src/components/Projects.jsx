import Title from "./ui/Title";
import { FaHeart } from "react-icons/fa";
import { BiArrowToRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Projects = () => {
  const { t, ready } = useTranslation();
  const [cards, setCards] = useState(null);

  useEffect(() => {
    if (ready) {
      const data = t("projects_cards", { returnObjects: true });
      setCards(data);
    }
  }, [t]);

  if (!cards) return null;

  return (
    <section id="projects">
      <Title>{t("projects")}</Title>
      <div className="flex flex-wrap justify-center gap-2">
        {cards.map((el, idx) => (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                delay: idx * 0.1,
                duration: 0.3,
                type: "spring",
                stiffness: 200,
              },
            }}
            whileHover={{
              scale: 0.95,
            }}
            key={idx}
            className="bg-blue-50 bg-opacity-5 p-6 mb-6 shadow group hover:shadow-2xl rounded-2xl cursor-pointer"
          >
            <div className="relative mb-4 rounded-2xl">
              <img
                className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                src={el.img}
                alt={el.name}
              />
              <div className="absolute bottom-3 left-3 inline-flex items-center rounded-xl bg-white p-2 shadow-md">
                <FaHeart className="text-red-600" />
              </div>

              <a
                className="flex justify-center items-center gap-2 bg-brand dark:bg-primary bg-opacity-80 dark:bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                href={el.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("visit_site")}
                <BiArrowToRight className="-mb-1" />
              </a>
            </div>
            <div className="flex justify-between items-center w-full pb-4 mb-auto">
              <div className="flex items-center">
                <div className="me-3">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={el.techImg}
                    alt=""
                  />
                </div>
                <div className="flex flex-1">
                  <div className="">
                    <p className="text-sm text-start font-semibold text-dark dark:text-light">
                      {el.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      {el.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="font-medium text-xl text-center text-brand dark:text-primary">
              <a
                href={el.url}
                target="_blank"
                className="block relative transition-colors duration-200"
              >
                {el.desc}
              </a>
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
