import { renderHook, act } from "@testing-library/react"
import { useCounter } from "../useCounter"

describe("useCounter", () => {
  it("должен инициализироваться с 0", () => {
    const { result } = renderHook(() => useCounter({initialCount: 5}))
    expect(result.current.count).toBe(5)
  })

  it("увеличивает значение на 6 при increment()", () => {
    const { result } = renderHook(() => useCounter({step:6}))
    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(6)
  })

  it("уменьшает значение на 6 при decrement()", () => {
    const { result } = renderHook(() => useCounter({initialCount: 45, step:6}))
    act(() => {
      result.current.decrement()
    })
    expect(result.current.count).toBe(39)
  })

  it("не уходит ниже 0", () => {
    const { result } = renderHook(() => useCounter({initialCount: 2, step:6}))
    act(() => {
      result.current.decrement()
    })
    expect(result.current.count).toBe(0)
  })

  it("сбрасывается в начальное значение", () => {
    const { result } = renderHook(() => useCounter({initialCount:10}))
    act(() => {
      result.current.increment()
      result.current.increment()
      result.current.reset()
    })
    expect(result.current.count).toBe(10)
  })
})
