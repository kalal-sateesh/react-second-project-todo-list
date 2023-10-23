import PropTypes from "prop-types";
import styles from "./List.module.css";
import Button from "../Button/Button";
import Input from "../Input/Inpu";

const List = ({
  items,
  swapItemHandler,
  donebtnHandler,
  deletebtnHandler,
  editBtnHandler,
  cancelBtnHandler,
  changeInputEditHandler,
  saveBtnHandler,
}) => {
  const listItem = items.map((ele, index) => (
    <li key={index} className={ele.isDone ? `p-2 ${styles.listItem}` : "p-2"}>
      {!ele.isEditing && ele.item}
      {ele.isEditing && (
        <>
          <Input
            value={ele.editingItem}
            changeHandler={(data) => changeInputEditHandler(index, data)}
          ></Input>
          <Button
            className="ms-2"
            clickHandler={() => saveBtnHandler(index)}
            disabled={!ele.editingItem.trim().length}
          >
            Save
          </Button>
          <Button className="ms-2" clickHandler={() => cancelBtnHandler(index)}>
            Cancel
          </Button>
        </>
      )}
      {!ele.isEditing && (
        <Button
          className="ms-2"
          clickHandler={() => {
            editBtnHandler(index);
          }}
        >
          Edit
        </Button>
      )}
      <Button
        className="ms-2 me-2"
        clickHandler={() => swapItemHandler(index, index - 1)}
        disabled={index === 0}
      >
        UP
      </Button>
      <Button
        style={{ backgroundColor: "yellow" }}
        clickHandler={() => swapItemHandler(index, index + 1)}
        disabled={index === items.length - 1}
      >
        Down
      </Button>
      {!ele.isDone && (
        <Button
          className="ms-2 me-2"
          clickHandler={() => donebtnHandler(index)}
          disabled={ele.isEditing}
        >
          Done
        </Button>
      )}
      {ele.isDone && (
        <Button
          className="me-2 ms-2"
          clickHandler={() => deletebtnHandler(index)}
        >
          Delete
        </Button>
      )}
    </li>
  ));

  return <ul className={styles.list}>{listItem}</ul>;
};

List.propTypes = {
  items: PropTypes.array,
  swapItemHandler: PropTypes.func,
  donebtnHandler: PropTypes.func,
  deletebtnHandler: PropTypes.func,
  editBtnHandler: PropTypes.func,
  cancelBtnHandler: PropTypes.func,
  changeInputEditHandler: PropTypes.func,
  saveBtnHandler: PropTypes.func,
};
export default List;
