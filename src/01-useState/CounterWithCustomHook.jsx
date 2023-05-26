import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const {counter, increment, decrement, rest} = useCounter();

  return (
    <>
    <h1>Counter with hook: {counter}</h1>
    <hr />

    <button onClick={increment} className="btn btn-primary">+1</button>
    <button onClick={rest} className="btn btn-info">Rest</button>
    <button onClick={decrement} className="btn btn-danger">-1</button>
    </>
  )
}
