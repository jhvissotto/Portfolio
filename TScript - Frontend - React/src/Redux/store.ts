import { configureStore } from '@reduxjs/toolkit'
import { features } from './features'
import { client } from '../Api/jsonplaceholder2'


export const store = configureStore({ 
    reducer: { 
        [client.reducerPath]:           client.reducer,  
        [features.counter.slice.name]:  features.counter.slice.reducer, 
    }, 
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(client.middleware)
    ),
})


export type Store_State    = ReturnType<typeof store.getState>
export type Store_Dispatch =            typeof store.dispatch