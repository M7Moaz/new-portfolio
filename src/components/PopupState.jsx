import Proptype from "prop-types";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { useTranslation } from "react-i18next";

const PopupState = ({ state, setState }) => {
  const { t } = useTranslation();
  return (
    <div className="">
      <div className="fixed w-full h-full bg-black top-0 left-0 bg-opacity-70"></div>
      <div
        id="successModal"
        className="overflow-y-auto overflow-x-hidden fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50 justify-center flex w-full h-modal"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <button
              onClick={() => {
                setState(null);
              }}
              type="button"
              className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="successModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            {state.type === "error" ? (
              <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                <IoMdCloseCircle className="w-8 h-8 text-red-500 dark:text-red-400" />
                <span className="sr-only">Error</span>
              </div>
            ) : (
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                <FaCheckCircle className="w-8 h-8 text-green-500 dark:text-green-400" />
                <span className="sr-only">Success</span>
              </div>
            )}
            <div className="mb-4 px-4 text-md font-semibold text-gray-900 dark:text-white">
              <p>
                {state.name && t("dear")}
                <span className="text-brand dark:text-primary">
                  {state.name}
                </span>
              </p>
              {state.message}
            </div>
            <button
              onClick={() => {
                setState(null);
              }}
              data-modal-toggle="successModal"
              type="button"
              className={`py-2 px-3 ${
                state.type === "error" ? "bg-red-800" : "bg-green-500"
              }  text-white text-sm font-medium text-center rounded-lg`}
            >
              {t("close")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

PopupState.propTypes = {
  state: Proptype.object.isRequired,
  setState: Proptype.func.isRequired,
};

export default PopupState;
