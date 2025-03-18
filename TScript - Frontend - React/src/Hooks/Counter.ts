import { useState } from 'react'


export function Counter({ value = 0 }) {
    
    const [state, setState] = useState({ value })

    const get = {
        double: () => state.value * 2, 
        square: () => state.value ^ 2, 
    }

    const set = {
        increment: () => setState(S => ({ value: S.value +1 })),
        decrement: () => setState(S => ({ value: S.value -1 })),
    }

    return { state, get, set }
}