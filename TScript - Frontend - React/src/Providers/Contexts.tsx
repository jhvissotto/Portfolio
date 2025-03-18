import React from 'react'
import { Ctx } from '../Contexts'


export function Contexts({ children }: React.PropsWithChildren) {
    return (
        <Ctx.Counter.Provider>
            {children}
        </Ctx.Counter.Provider>
    )
}