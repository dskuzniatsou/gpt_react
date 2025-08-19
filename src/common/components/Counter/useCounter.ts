import { useState } from "react"

type UseCounterProps = {
    initialCount?: number,
    step?: number
}

export const useCounter = ({initialCount = 0, step = 1}: UseCounterProps) => {
    const [count, setCount] = useState(initialCount)

    const increment = () => setCount(prev => prev + step)
    const decrement = () => setCount(prev =>Math.max(0, prev-step))
    const reset = () => setCount(initialCount)
    return { count, increment, decrement,reset }
}