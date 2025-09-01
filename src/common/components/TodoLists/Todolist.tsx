import styles from "./TodoList.module.css";
import { useState } from "react";
import { Button } from "../Buttons/Button.tsx";

type Todo = {
  id: number;
  title: string;
};


export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState("")
  const [error, setError] = useState<string | null>(null)

  const addTodoHandler = () => {
    if (newTodo.trim() === "")  {
      setError("Введите задачу")
      return
    }
    if (newTodo.trim().length > 50) {
    setError("Максимальная длина — 50 символов")
    return}
    setTodos((prev) => [{ id: Date.now(), title: newTodo }, ...prev])
    setNewTodo("")
    setError(null)
  }
  const deleteTodoHandler = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <input className={styles.input}
        type={"text"}
        placeholder={"Введите задачу..."}
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button onClick={addTodoHandler} variant={'primary'} size={"small"}>Add</Button>


      {error && <p className="error">{error}</p>}

      <ul className={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} className={styles.item}>
            <span>{todo.title}</span>
            <Button variant={"danger"} size={'small'} onClick={()=>deleteTodoHandler(todo.id)}>DELETE</Button>

          </li>
        ))}
      </ul>
    </>
  );
};
