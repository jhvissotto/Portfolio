import { PropsWithChildren } from 'react'
import { ReactQuery } from './ReactQuery'


export function Providers({ children }: PropsWithChildren) {
    return (
        <ReactQuery>
            {children}
        </ReactQuery>
    )
}