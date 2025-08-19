type Props = {
  title: string
  children: React.ReactNode
}

export const Card = ({ title, children }: Props) => {
  return (
    <div className="border rounded-xl p-4 shadow-md bg-white mb-4">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  )
}
