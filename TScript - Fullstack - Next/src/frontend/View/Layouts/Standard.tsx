import type { PropsWithChildren } from 'react'
import { Fragment as MyApp } from 'react'


export function Standard({ children }: PropsWithChildren) {
    return (
        <MyApp>
            {/* <header></header> */}
            <main>{children}</main>
            {/* <footer></footer> */}
        </MyApp>
    )
}