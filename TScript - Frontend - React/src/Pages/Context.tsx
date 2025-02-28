import React from 'react'
import { Ctx } from '../Contexts'

export function Context() {
  
  const { value, increment, decrement, reset } = Ctx.Counter.useHook()
  

  return (
    <>
      <h1>Counter</h1>
      <h2>Value: {value}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}