import Container from "./Container";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import { motion } from "framer-motion";
import Title from "./ui/Title";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PopupState from "./PopupState";
import { useTranslation } from "react-i18next";

const fstAnimate = (delay) => ({
  initial: { opacity: 0, y: 20 },
  inView: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.4,
      type: "spring",
      stiffness: 200,
    },
  },
});

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="overflow-hidden" id="contact">
      <Container>
        <Title>{t("lets_talk")}</Title>
        <div className="grid sm:grid-cols-2 -mt-5 items-start gap-16 p-4 mx-auto ">
          <div>
            <motion.p
              variants={fstAnimate(0)}
              initial="initial"
              whileInView="inView"
              className="text-sm text-gray-500 dark:text-gray-400"
            >
              {t("contact_desc")}
            </motion.p>
            <motion.div
              variants={fstAnimate(0.2)}
              initial="initial"
              whileInView="inView"
              className="mt-12"
            >
              <h2 className="text-dark dark:text-light text-base font-bold">
                {t("email")}
              </h2>
              <ul className="mt-4">
                <li className="flex items-center ">
                  <div className="bg-light dark:bg-mid_gray h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <FaMailBulk className="text-brand dark:text-primary" />
                  </div>
                  <a href="mailto:contact@moazx.com" className="text-sm ms-4">
                    <small className="block text-dark dark:text-light">
                      {t("mail")}
                    </small>
                    <strong className="underline text-[#007bff]">
                      contact@moazx.com
                    </strong>
                  </a>
                </li>
              </ul>
            </motion.div>
            <motion.div
              variants={fstAnimate(0.3)}
              initial="initial"
              whileInView="inView"
              className="mt-12"
            >
              <h2 className="text-dark dark:text-light text-base font-bold">
                {t("socials")}
              </h2>
              <ul className="flex mt-4 gap-3">
                <motion.li
                  variants={fstAnimate(0.5)}
                  initial="initial"
                  whileInView="inView"
                  className="bg-light dark:bg-mid_gray h-10 w-10 rounded-full flex items-center justify-center shrink-0"
                >
                  <a
                    href={"https://www.linkedin.com/in/moaz-aljasem/"}
                    target="_blank"
                  >
                    <FaLinkedin className="text-brand dark:text-primary" />
                  </a>
                </motion.li>
                <motion.li
                  variants={fstAnimate(0.6)}
                  initial="initial"
                  whileInView="inView"
                  className="bg-light dark:bg-mid_gray h-10 w-10 rounded-full flex items-center justify-center shrink-0"
                >
                  <a href={"https://www.instagram.com/m7_moaz"} target="_blank">
                    <FaInstagram className="text-brand dark:text-primary" />
                  </a>
                </motion.li>
                <motion.li
                  variants={fstAnimate(0.7)}
                  initial="initial"
                  whileInView="inView"
                  className="bg-light dark:bg-mid_gray h-10 w-10 rounded-full flex items-center justify-center shrink-0"
                >
                  <a href={"https://github.com/m7Moaz"} target="_blank">
                    <FaGithub className="text-brand dark:text-primary" />
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          </div>
          <ContactForm />
        </div>
      </Container>
    </div>
  );
};

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(null);
  const [name, setName] = useState("");
  const form = useRef();

  const { t } = useTranslation();
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_1whglfm", "template_x9nkvvr", form.current, {
        publicKey: "QWmMgVLCph1ewfCan",
      })
      .then(
        () => {
          setState({
            type: "success",
            message: t("success_mail"),
            name: name,
          });
          e.target.reset();
          setLoading(false);
        },
        (error) => {
          setState({
            type: "error",
            message: `${t("faild_mail")} ${error.text}`,
          });
          setLoading(false);
        }
      );
  };

  return (
    <div>
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        variants={fstAnimate(0.2)}
        initial="initial"
        whileInView="inView"
        className="ms-auto space-y-4"
      >
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder={t("contact_name")}
          name="user_name"
          className="w-full rounded-md py-3 px-4 bg-transparent shadow-md text-brand dark:text-primary text-sm outline-none focus:outline-brand focus:dark:outline-primary"
          required
        />
        <input
          placeholder={t("contact_email")}
          type="email"
          name="user_email"
          className="w-full rounded-md py-3 px-4 bg-transparent shadow-md text-brand dark:text-primary text-sm outline-none focus:outline-brand focus:dark:outline-primary"
          required
        />
        <input
          type="text"
          placeholder={t("contact_subject")}
          name="subject"
          className="w-full rounded-md py-3 px-4 bg-transparent shadow-md text-brand dark:text-primary text-sm outline-none focus:outline-brand focus:dark:outline-primary"
          required
        />
        <textarea
          placeholder={t("contact_message")}
          name="message"
          rows="6"
          className="w-full rounded-md max-h-[350px] px-4 py-2 bg-transparent shadow-md text-brand dark:text-primary text-sm outline-none focus:outline-brand focus:dark:outline-primary"
          required
        ></textarea>

        <motion.button
          initial={{ scale: 1 }}
          whileTap={{
            scale: loading ? 1 : 1.05,
          }}
          whileHover={{
            scale: loading ? 1 : 0.9,
          }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 300,
          }}
          type="submit"
          disabled={loading}
          className={`${
            loading ? "bg-gray-500 dark:bg-gray-600" : ""
          } text-light bg-brand dark:bg-primary tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6`}
        >
          {loading ? (
            <span className="flex justify-center">
              {" "}
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="me-2 animate-spin"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
              </svg>{" "}
              {t("contact_sending")}
            </span>
          ) : (
            t("contact_send")
          )}
        </motion.button>
      </motion.form>
      {state && <PopupState state={state} setState={setState} />}
    </div>
  );
};

export default Contact;
