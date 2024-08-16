import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div className="container px-4 mx-auto max-w-xl sm:max-w-2xl md:max-w-5xl lg:max-w-7xl ">
      {children}
    </div>
  );
};

export default Container;
Container.propTypes = {
  children: PropTypes.node.isRequired,
};
