import PropTypes from "prop-types";
const Input = ({
  changeHandler,
  value,
  enterKeyHandler,
  className,
  placeholder,
}) => {
  return (
    <input
      type="text"
      onChange={(e) => {
        changeHandler(e.target.value);
      }}
      value={value}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          enterKeyHandler();
        }
      }}
      className={className}
      placeholder={placeholder}
    ></input>
  );
};

Input.propTypes = {
  changeHandler: PropTypes.func,
  value: PropTypes.string,
  enterKeyHandler: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
