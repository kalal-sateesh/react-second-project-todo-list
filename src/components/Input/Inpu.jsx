import PropTypes from "prop-types";
const Input = ({ changeHandler, value, enterKeyHandler }) => {
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
    ></input>
  );
};

Input.propTypes = {
  changeHandler: PropTypes.func,
  value: PropTypes.string,
  enterKeyHandler: PropTypes.func,
};

export default Input;
