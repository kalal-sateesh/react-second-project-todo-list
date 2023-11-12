import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../Button/Button";
import Input from "../Input/Inpu";
import List from "../List/List";
import styles from "./Todo.module.css";
import ModalChange from "../ModalChange/ModalChange";
import ModalDone from "../Modal/ModalDone";

const LS_TODO_KEY = "todo";

const Todo = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [isDone, setIsDone] = useState(false);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [showDone, setShowDone] = useState(false);

  const handleDoneShow = () => setShowDone(true);
  const handleDoneClose = () => setShowDone(false);

  const handleConfirm = () => {
    setList([]);
    setShow(false);
    setIsDone(false);
  };

  const searchHandler = (data) => {
    const items = [...list];
    let lowerCaseData = data.toLowerCase();
    let searchedData;
    if (lowerCaseData) {
      searchedData = items.map((ele) => {
        if (ele.item.toLowerCase().includes(lowerCaseData)) {
          ele.isSearch = false;
        }
        if (!ele.item.toLowerCase().includes(lowerCaseData)) {
          ele.isSearch = true;
        }
        return ele;
      });
    }
    if (data === "") {
      searchedData = items.map((ele) => {
        ele.isSearch = false;
        return ele;
      });
    }
    setList(searchedData);
  };

  const removeDoneItemsHandleConfirm = () => {
    const items = [...list];
    const removeItem = items.filter((item) => {
      return item.isDone !== true;
    });
    setList(removeItem);
    setIsDone(false);
    setShowDone(false);
  };

  const btnClickHandler = () => {
    /*     const items = [...list];
    items.push(item);
    setList(items); */
    if (item.trim().length) {
      setList([
        ...list,
        {
          item,
          editingItem: item,
          isDone: false,
          isEditing: false,
          isSearch: false,
        },
      ]);
      setItem("");
    }
  };

  const swapItemHandler = (initIndex, finalIndex) => {
    const items = [...list];
    const temp = items[initIndex];
    items[initIndex] = items[finalIndex];
    items[finalIndex] = temp;
    setList(items);
  };

  const donebtnHandler = (index) => {
    const items = [...list];
    items[index].isDone = true;
    setList(items);
    setIsDone(true);
  };

  const deletebtnHandler = (index) => {
    const items = [...list];
    items.splice(index, 1);
    setList(items);
    setIsDone(false);
  };

  const editBtnHandler = (index) => {
    const items = [...list];
    items[index].isEditing = true;
    setList(items);
  };

  const cancelBtnHandler = (index) => {
    const items = [...list];
    items[index].isEditing = false;
    items[index].editingItem = items[index].item;
    setList(items);
  };

  const changeInputEditHandler = (index, data) => {
    const items = [...list];
    items[index].editingItem = data;
    setList(items);
  };

  const saveBtnHandler = (index) => {
    const items = [...list];
    items[index].isEditing = false;
    items[index].item = items[index].editingItem;
    setList(items);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(LS_TODO_KEY));
    if (items) {
      setList(items);
    } else {
      setList([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_TODO_KEY, JSON.stringify(list));
  }, [list]);

  return (
    <>
      <div className="mt-5 mb-5">
        <Input
          changeHandler={(data) => setItem(data)}
          value={item}
          enterKeyHandler={btnClickHandler}
          className={styles.input}
        />
        <Button
          clickHandler={btnClickHandler}
          disabled={!item.trim().length}
          className={
            item.trim().length ? `${styles.buttonEnabled}` : `${styles.button}`
          }
        >
          Add To List
        </Button>
        <Button
          clickHandler={handleShow}
          disabled={!list.length}
          className={
            list.length ? `${styles.buttonEnabled}` : `${styles.button}`
          }
        >
          Clear List
        </Button>
        <Button
          className={isDone ? `${styles.buttonEnabled}` : `${styles.button}`}
          disabled={!isDone}
          clickHandler={handleDoneShow}
        >
          Remove Done Item
        </Button>
        <ModalDone
          showDone={showDone}
          handleDoneClose={handleDoneClose}
          handleDoneConfirm={removeDoneItemsHandleConfirm}
          modalDoneHead="Clear All Done Items"
          modalDoneBody="Are you sure Delete all Done tasks ?"
        ></ModalDone>
        <ModalChange
          show={show}
          handleClose={handleClose}
          handleConfirm={handleConfirm}
          modalHead="Clear All"
          modalBody="Are you sure Delete all tasks ?"
        ></ModalChange>
      </div>
      <div className="mt-3">
        <Input
          className={styles.search}
          placeholder="Search here..."
          changeHandler={(data) => {
            searchHandler(data.trim());
          }}
        ></Input>
      </div>
      <div className="mt-3">
        <List
          items={list}
          swapItemHandler={swapItemHandler}
          donebtnHandler={donebtnHandler}
          deletebtnHandler={deletebtnHandler}
          editBtnHandler={editBtnHandler}
          cancelBtnHandler={cancelBtnHandler}
          changeInputEditHandler={changeInputEditHandler}
          saveBtnHandler={saveBtnHandler}
        />
      </div>
    </>
  );
};
export default Todo;
