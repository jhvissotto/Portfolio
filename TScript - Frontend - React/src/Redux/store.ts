import { configureStore } from '@reduxjs/toolkit'
import { features } from './features'


export const store = configureStore({ 
    reducer: { 
        [features.counter.slice.name]:  features.counter.slice.reducer 
    } 
})


export type Store_State    = ReturnType<typeof store.getState>
export type Store_Dispatch =            typeof store.dispatch