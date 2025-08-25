import { render, screen } from "@testing-library/react"
import { AuthStatus } from "../AuthStatus"

describe("AuthStatus component", () => {
  test("показывает приветствие, если пользователь авторизован", () => {
    render(<AuthStatus isLoggedIn={true} username="Дмитрий" />)
    expect(screen.getByText(/Привет, Дмитрий/)).toBeInTheDocument()
  })

  test("показывает сообщение о неавторизованности, если пользователь не вошёл", () => {
    render(<AuthStatus isLoggedIn={false} />)
    expect(screen.getByText(/Вы не авторизованы/)).toBeInTheDocument()
  })
})
//
// let username: string
//   let isLoggedIn: boolean
// test("показывает приветствие, если пользователь авторизован", () => {
//   render(<AuthStatus isLoggedIn={true} username="Дмитрий" />)
//   expect(screen.getByText(/Привет, Дмитрий/)).toBeInTheDocument()
//   }
//   )
// test("показывает сообщение о неавторизованности, если пользователь не вошёл", () => {
//   render(<AuthStatus isLoggedIn={false} />)
//   expect(screen.getByText(/Вы не авторизованы/)).toBeInTheDocument()
// })

