import PropTypes from "prop-types";
export function Button({ children, customClass }) {
  return (
    <div className="">
      <button
        className={`bg-blue-50 bg-opacity-10 text-dark backdrop-blur-md shadow-md py-1 ${customClass}`}
      >
        <span className="px-3 rounded-full ">{children}</span>
      </button>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  customClass: PropTypes.string,
};
