import { Redux } from './Redux'
import { Contexts } from './Contexts'

export function Providers({ children }: React.PropsWithChildren) {
    return (
        <Redux>
            <Contexts>
                {children}
            </Contexts>
        </Redux>
    )
}