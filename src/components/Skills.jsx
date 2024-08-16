import { useEffect, useState } from "react";
import CircularProgress from "./ui/Circle";
import Title from "./ui/Title";
import { Button } from "./ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const data = [
  { id: "1", name: "HTML & CSS", value: 100 },
  { id: "2", name: "JavaScript", value: 99 },
  { id: "3", name: "Bootstrap & Tailwind", value: 100 },
  { id: "4", name: "React & Next.js", value: 99 },
  { id: "5", name: "Redux Toolkit", value: 95 },
  { id: "6", name: "Motion Framer & Aceternity UI", value: 90 },
  { id: "7", name: "Node.js & Express & mongoDB", value: 30 },
];

const Skills = () => {
  const { t, ready } = useTranslation();
  const [lvl, setLvl] = useState(null);
  const [active, setActive] = useState(data[0]);

  useEffect(() => {
    if (ready) {
      const data = t("skill_lvl", { returnObjects: true });
      setLvl(data);
    }
  }, [t]);

  if (!lvl) return null;

  return (
    <div id="skills" dir="ltr">
      <Title>{t("skills")}</Title>
      <div className="flex flex-col justify-between bg-blue-50 bg-opacity-5 backdrop-blur-md shadow-md rounded-2xl p-3 md:flex-row md:items-center">
        <div className="flex gap-2 flex-wrap md:max-w-xl">
          {data.map((skill, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: 0.1 + index * 0.1,
                },
              }}
              key={index}
              className={`rounded-full overflow-hidden shadow-md ${
                active.name === skill.name ? "bg-brand dark:bg-primary" : ""
              }`}
              onClick={() => {
                setActive(skill);
              }}
            >
              <Button
                customClass={`${
                  active.name === skill.name ? "text-white" : ""
                }`}
              >
                {skill.name}
              </Button>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 md:mt-0 text-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={active.lvl}
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
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
              whileInView={{
                scale: 1,
                transition: {
                  delay: 0.1,
                  duration: 0.2,
                  type: "spring",
                  stiffness: 200,
                },
              }}
              className="text-dark dark:text-light block"
            >
              {lvl[active.id - 1]}
            </motion.span>
          </AnimatePresence>
          <CircularProgress progress={active.value} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
