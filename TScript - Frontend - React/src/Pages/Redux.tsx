import React from 'react'

import { features } from '../Redux/features'
import { use } from '../Hooks'


export function Redux() {
  
  const dispatch  = use.Redux.Dispatch()
  const { value } = use.Redux.Selector(globalState => globalState.counter);

  
  function increment() {
    dispatch(features.counter.slice.actions.increment())
  }
  
  function decrement() {
    dispatch(features.counter.slice.actions.decrement())
  }
  
  function reset() {
    dispatch(features.counter.slice.actions.reset())
  }

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