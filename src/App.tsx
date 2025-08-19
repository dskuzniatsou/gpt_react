// src/App.tsx
import { Counter } from "./common/components/Counter/Counter.tsx";
import { Card } from "./common/components/Card/Card.tsx";
import { AuthStatus } from "./common/components/Card/AuthStatus.tsx";
import { TaskList } from "./common/components/Card/TaskList.tsx";

function App() {
  const tasks = [
    { id: 1, title: "Сделать проект", done: false },
    { id: 2, title: "Протестировать хук", done: true },
    { id: 3, title: "Прочитать про React", done: false },
  ]
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
    </div>

  );
}

export default App;
