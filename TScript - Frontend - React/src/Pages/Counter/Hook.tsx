import React from 'react'
import { use } from '../../Hooks'


export function Hook() {
  
    const counter = use.Counter({})

    return (
        <>
            <h1>Counter</h1>
            <h2>Value: {counter.state.value}</h2>

            <h2>Double: {counter.get.double()}</h2>
            <h2>Square: {counter.get.square()}</h2>

            <button onClick={counter.set.increment}>Increment</button>
            <button onClick={counter.set.decrement}>Decrement</button>
        </>
    )
}