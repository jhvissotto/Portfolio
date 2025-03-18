import React from 'react'

export function State() {
  
  const [value, setValue] = React.useState(0)
  
  function increment() {
    setValue(x => x + 1)
  }
  
  function decrement() {
    setValue(x => x - 1)
  }

  function reset() {
    setValue(0)
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