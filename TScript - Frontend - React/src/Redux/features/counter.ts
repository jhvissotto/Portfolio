import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment:  (localState) => { localState.value += 1 },
        decrement:  (localState) => { localState.value -= 1 },
        reset:      (localState) => { localState.value  = 0 },
    },
})

export const counter = { slice }