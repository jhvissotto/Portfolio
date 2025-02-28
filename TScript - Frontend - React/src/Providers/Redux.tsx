import React from 'react'
import { Provider } from 'react-redux'

import { store } from '../Redux/store'


export function Redux({ children }: React.PropsWithChildren) {
    return (
        <Provider store={store} >
            {children}
        </Provider>
    )
}