import { Redux } from './Redux'
import { Contexts } from './Contexts'
import { ReactQuery } from './ReactQuery'


export function Providers({ children }: React.PropsWithChildren) {
    return (
        <Redux>
            <Contexts>
                <ReactQuery>
                    {children}
                </ReactQuery>
            </Contexts>
        </Redux>
    )
}