import { PropsWithChildren } from 'react'
import { Api } from './Api'


export function Providers({ children }: PropsWithChildren) {
    return (
        <Api>
            {children}
        </Api>
    )
}