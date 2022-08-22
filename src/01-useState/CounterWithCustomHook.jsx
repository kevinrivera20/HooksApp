import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const { counter, increment, reset, decrement } = useCounter();


  return (
    <>
        <h1>Counter with Hook: { counter }</h1>
        <hr/>
        <button onClick={() => increment(20)} className="btn btn-success">+2</button>
        <button onClick={reset} className="btn btn-danger">Reset</button>
        <button onClick={() => decrement(20)} className="btn btn-primary">-2</button> 
    </>
  )
}
