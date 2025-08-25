// src/App.tsx
import { Counter } from "./common/components/Counter/Counter.tsx";
import { Card } from "./common/components/Card/Card.tsx";
import { AuthStatus } from "./common/components/Card/AuthStatus.tsx";
import { TaskList } from "./common/components/Card/TaskList.tsx";
import { useState } from "react";
import { TodoList } from "./common/components/TodoLists/Todolist.tsx";

type Todo = {
  id: number
  title: string
}
function App() {
  const tasks = [
    { id: 1, title: "Сделать проект", done: false },
    { id: 2, title: "Протестировать хук", done: true },
    { id: 3, title: "Прочитать про React", done: false },
  ]
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React" },
    { id: 2, title: "Practice TypeScript" },
    { id: 3, title: "Write clean code" },
  ])
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title: text,
    }
    setTodos((prev) => [...prev, newTodo])
  }
  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <div className="p-6 space-y-4">
      <Card title="Задачи">
        <TaskList tasks={tasks} />
      </Card>

      <Card title="Авторизация">
        <AuthStatus isLoggedIn={true} username="Дмитрий" />
      </Card>

      <Card title="Счётчик">
        <Counter initialCount={3} step={2} />
      </Card>
      <Card title={"Todo List"}>
        <TodoList items={todos} onDelete={deleteTodo} onAdd={addTodo} />
      </Card>


    </div>

  );
}

export default App;
