import PropTypes from "prop-types";
const Button = ({ clickHandler, disabled, children, className, style }) => {
  return (
    <button
      onClick={() => {
        clickHandler();
      }}
      disabled={disabled}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  clickHandler: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Button;
