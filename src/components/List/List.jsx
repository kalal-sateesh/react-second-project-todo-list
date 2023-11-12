import PropTypes from "prop-types";
import styles from "./List.module.css";
import Button from "../Button/Button";
import Input from "../Input/Inpu";
import ModalChange from "../ModalChange/ModalChange";
import { useState } from "react";

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
  const [show, setShow] = useState(false);

  const listItem = items.map((ele, index) => {
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleConfirm = () => {
      deletebtnHandler(index);
      setShow(false);
    };

    return (
      <li
        key={index}
        className={ele.isDone ? `p-2 ${styles.listItem}` : "p-2"}
        style={{
          display: `${ele.isSearch ? "none" : "block"}`,
          border: "1px solid black",
          borderRadius: "5px",
          marginTop: "10px",
        }}
      >
        {!ele.isEditing && ele.item}
        {ele.isEditing && (
          <>
            <Input
              value={ele.editingItem}
              changeHandler={(data) => changeInputEditHandler(index, data)}
              className={styles.input}
            ></Input>
            <Button
              clickHandler={() => saveBtnHandler(index)}
              disabled={!ele.editingItem.trim().length}
              className={
                ele.editingItem.trim().length
                  ? `ms-5 ${styles.buttonEnabled}`
                  : `ms-5 ${styles.button}`
              }
            >
              Save
            </Button>
            <Button
              clickHandler={() => cancelBtnHandler(index)}
              className={`ms-5 ${styles.buttonEnabled}`}
            >
              Cancel
            </Button>
          </>
        )}
        {!ele.isEditing && (
          <Button
            clickHandler={() => {
              editBtnHandler(index);
            }}
            disabled={ele.isDone}
            className={
              !ele.isDone
                ? `ms-5 ${styles.buttonEnabled}`
                : `ms-5 ${styles.button}`
            }
          >
            Edit
          </Button>
        )}
        <Button
          clickHandler={() => swapItemHandler(index, index - 1)}
          disabled={index === 0}
          className={
            !(index === 0)
              ? `ms-5 ${styles.buttonEnabled}`
              : `ms-5 ${styles.button}`
          }
        >
          UP
        </Button>
        <Button
          clickHandler={() => swapItemHandler(index, index + 1)}
          disabled={index === items.length - 1}
          className={
            !(index === items.length - 1)
              ? `ms-5 ${styles.buttonEnabled}`
              : `ms-5 ${styles.button}`
          }
        >
          Down
        </Button>
        {!ele.isDone && (
          <Button
            clickHandler={() => donebtnHandler(index)}
            disabled={ele.isEditing}
            className={
              !ele.isEditing
                ? `ms-5 ${styles.buttonEnabled}`
                : `ms-5 ${styles.button}`
            }
          >
            Done
          </Button>
        )}
        {ele.isDone && (
          <>
            <Button
              clickHandler={handleShow}
              className={
                !ele.isEditing
                  ? `ms-5 ${styles.buttonEnabled}`
                  : `ms-5 ${styles.button}`
              }
            >
              Delete
            </Button>
            <ModalChange
              show={show}
              handleClose={handleClose}
              handleConfirm={handleConfirm}
              modalHead="Delete Task"
              modalBody="You Wanna Delete This Task ?"
            ></ModalChange>
          </>
        )}
      </li>
    );
  });

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
