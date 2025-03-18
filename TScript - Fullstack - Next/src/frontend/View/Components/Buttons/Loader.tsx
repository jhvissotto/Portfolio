import { HTMLProps } from 'react'


export function Loader({ children=<p>Load More</p>, onClick }: HTMLProps<HTMLElement>) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}