import type { PropsWithChildren } from 'react'
import { Fragment as Body } from 'react'


export function Main({ children }: PropsWithChildren) {
    return (
        <Body>
            {/* <header></header> */}
            <main>{children}</main>
            {/* <footer></footer> */}
        </Body>
    )
}