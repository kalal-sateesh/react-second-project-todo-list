import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Inpu";
import List from "../List/List";

const LS_TODO_KEY = "todo";

const Todo = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const btnClickHandler = () => {
    /*     const items = [...list];
    items.push(item);
    setList(items); */
    if (item.trim().length) {
      setList([
        ...list,
        { item, editingItem: item, isDone: false, isEditing: false },
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
  };

  const deletebtnHandler = (index) => {
    const items = [...list];
    items.splice(index, 1);
    setList(items);
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
      <Input
        changeHandler={(data) => setItem(data)}
        value={item}
        enterKeyHandler={btnClickHandler}
      />
      <Button clickHandler={btnClickHandler} disabled={!item.trim().length}>
        Add To List
      </Button>
      <Button clickHandler={() => setList([])} disabled={!list.length}>
        Clear List
      </Button>
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
