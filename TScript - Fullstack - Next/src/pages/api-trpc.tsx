import { Fragment as MyApp } from 'react'
import { TRPCNext } from '@/src/integration/TRPCNext'


export default function ApiTRPC() {

    const { data } = TRPCNext.welcome.useQuery({ message: 'Welcome' })

    return (
        <MyApp>
            <h1>Api TRPC</h1>
            <h2>{data?.text}</h2>
        </MyApp>
    )
}
