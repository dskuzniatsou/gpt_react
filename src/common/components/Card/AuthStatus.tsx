type Props = {
  isLoggedIn: boolean
  username?: string
}

export const AuthStatus = ({ isLoggedIn, username }: Props) => {
  return (
    <div>
      {isLoggedIn ? (
        <p className="text-green-600">Привет, {username} 👋</p>
      ) : (
        <p className="text-red-600">Вы не авторизованы</p>
      )}
    </div>
  )
}
