import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  const date = new Date().getFullYear();
  return (
    <div className="">
      <h2 className="text-dark dark:text-light">
        {t("footer_copyright")} © {date} {t("made_by")}{" "}
        <span className="text-brand dark:text-primary font-bold">
          {t("moaz")}
        </span>
      </h2>
    </div>
  );
};

export default Footer;
