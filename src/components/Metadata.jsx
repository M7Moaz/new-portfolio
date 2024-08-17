import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Metadata = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("meta_title");
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", t("meta_description"));
    document
      .querySelector('meta[name="keywords"]')
      .setAttribute("content", t("meta_keywords"));
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute("content", t("meta_ogTitle"));
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute("content", t("meta_ogDescription"));
    document
      .querySelector('meta[property="og:url"]')
      .setAttribute("content", t("meta_ogUrl"));
  }, [t]);

  return null;
};

export default Metadata;
