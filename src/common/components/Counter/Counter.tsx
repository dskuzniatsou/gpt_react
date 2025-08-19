
import {useCounter} from "./useCounter.ts";

type CounterProps ={
  initialCount?: number,
  step?: number,
}


export const Counter = ({initialCount, step}: CounterProps) => {
    //  Переменные
    const {count, increment, decrement,reset} = useCounter({initialCount, step});

// Render

    return (
        <div className="counter">
            <h1>Counter: {count}</h1>
            <button onClick={increment }>+</button>
            <button onClick={decrement }>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

