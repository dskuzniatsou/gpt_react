// src/App.tsx
import { Counter } from "./common/components/Counter/Counter.tsx";
import { Card } from "./common/components/Card/Card.tsx";
import { AuthStatus } from "./common/components/Card/AuthStatus.tsx";
import { TaskList } from "./common/components/Card/TaskList.tsx";
import { TodoList } from "./common/components/TodoLists/Todolist.tsx";


function App() {
  const tasks = [
    { id: 1, title: "Сделать проект", done: false },
    { id: 2, title: "Протестировать хук", done: true },
    { id: 3, title: "Прочитать про React", done: false },
  ]
  // const [todos, setTodos] = useState([
  //   { id: 1, title: "Learn React" },
  //   { id: 2, title: "Practice TypeScript" },
  //   { id: 3, title: "Write clean code" },
  // ])


  return (
    <div className="todo-card">
      {/*<Card title="Задачи">*/}
      {/*  <TaskList tasks={tasks} />*/}
      {/*</Card>*/}

      {/*<Card title="Авторизация">*/}
      {/*  <AuthStatus isLoggedIn={true} username="Дмитрий" />*/}
      {/*</Card>*/}

      {/*<Card title="Счётчик">*/}
      {/*  <Counter initialCount={3} step={2} />*/}
      {/*</Card>*/}
      <Card title={"Todo List"}>
        <TodoList  />
      </Card>


    </div>

  );
}

export default App;
