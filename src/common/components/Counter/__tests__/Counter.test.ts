import { render, screen, fireEvent } from "@testing-library/react"
import { Counter } from "../Counter"

describe("Counter component", () => {
  it("рендерится с initialCount", () => {
    // @ts-ignore
    render( <Counter initialCount={5} step={1}/> )
    expect(screen.getByText(/Counter: 5/)).toBeInTheDocument()
  })

  it("увеличивает значение при клике на +", () => {
    render(<Counter initialCount={0} step={2} />)
    const button = screen.getByText("+")
    fireEvent.click(button)
    expect(screen.getByText(/Counter: 2/)).toBeInTheDocument()
  })

  it("уменьшает значение при клике на -", () => {
    render(<Counter initialCount={5} step={2} />)
    const button = screen.getByText("-")
    fireEvent.click(button)
    expect(screen.getByText(/Counter: 3/)).toBeInTheDocument()
  })

  it("не уходит ниже 0", () => {
    render(<Counter initialCount={0} step={5} />)
    const button = screen.getByText("-")
    fireEvent.click(button)
    expect(screen.getByText(/Counter: 0/)).toBeInTheDocument()
  })

  it("сбрасывается при клике на Reset", () => {
    render(<Counter initialCount={10} step={2} />)
    const plusButton = screen.getByText("+")
    const resetButton = screen.getByText("Reset")

    fireEvent.click(plusButton)
    fireEvent.click(plusButton)
    fireEvent.click(resetButton)

    expect(screen.getByText(/Counter: 10/)).toBeInTheDocument()
  })
})
