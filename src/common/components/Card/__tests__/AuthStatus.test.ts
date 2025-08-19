import { render, screen } from "@testing-library/react"
import { AuthStatus } from "../AuthStatus"

describe("AuthStatus component", () => {
  it("показывает приветствие, если пользователь авторизован", () => {
    render(<AuthStatus isLoggedIn={true} username="Дмитрий" />)
    expect(screen.getByText(/Привет, Дмитрий/)).toBeInTheDocument()
  })

  it("показывает сообщение о неавторизованности, если пользователь не вошёл", () => {
    render(<AuthStatus isLoggedIn={false} />)
    expect(screen.getByText(/Вы не авторизованы/)).toBeInTheDocument()
  })
})

