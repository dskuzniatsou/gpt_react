type Task = {
  id: number
  title: string
  done: boolean
}

type Props = {
  tasks: Task[]
}

export const TaskList = ({ tasks }: Props) => {
  if (tasks.length === 0) {
    return <p className="text-gray-500">Нет задач 🚀</p>
  }

  return (
    <ul className="list-disc pl-6 space-y-1">
      {tasks.map((task) => (
        <li key={task.id} className={task.done ? "line-through text-gray-800" : "text-red-500"}>
          {task.title}
        </li>
      ))}
    </ul>
  )
}
