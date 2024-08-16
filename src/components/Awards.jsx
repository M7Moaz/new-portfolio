import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

export function Awards() {
  const { t, ready, i18n } = useTranslation();
  const lang = i18n.language;

  const metrics = useMemo(() => {
    if (ready) {
      return t("metrics", { returnObjects: true });
    }
    return null;
  }, [ready, lang]);

  if (!metrics) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.5 } }}
      className="will-move"
    >
      <InfiniteMovingCards
        key={lang}
        metrics={metrics}
        direction={lang === "ar" ? "left" : "right"}
        speed="slow"
      />
    </motion.div>
  );
}
