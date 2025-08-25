import styles from "./TodoList.module.css";
import { useState } from "react";

type Todo = {
  id: number;
  title: string;
};

type Props = {
  items: Todo[];
  onAdd: (text: string) => void;
  onDelete: (id: number) => void;
};

export const TodoList = ({ items, onAdd, onDelete }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const handleAdd = () => {
    if (inputValue.trim() === "") return;
    onAdd(inputValue.trim());
    setInputValue("");
  };
  return (
    <>
      <input
        type={"text"}
        placeholder={"Введите задачу..."}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd} className={styles.button}>
        Add
      </button>
      <ul className={styles.list}>
        {items.map((todo) => (
          <li key={todo.id} className={styles.item}>
            <span>{todo.title}</span>
            <button onClick={() => onDelete(todo.id)} className={styles.button}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
