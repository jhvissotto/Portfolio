'use server'

import type { GetServerSideProps } from 'next'
import { createServerSideHelpers } from '@trpc/react-query/server'
import { HydrationBoundary } from '@tanstack/react-query'
import { Fragment as Body } from 'react'
import transformer from 'superjson'

import { TRPCNext } from '@/src/integration/TRPCNext'
import { router }   from '@/src/integration/router'



export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const SSH = createServerSideHelpers({ router, ctx, transformer })
    await SSH.welcome.prefetch({ message: 'Welcome from Backend' })
    return { props: { trpcState: SSH.dehydrate() } }
}


// export default function Component() {
function Component() {
    const { data } = TRPCNext.welcome.useQuery({ message: 'Welcome from Frontend' })
    return (
        <Body>
            <h1>Api TRPC</h1>
            <h2>{data?.text}</h2>
        </Body>
    )
}


export default function ApiSSR({ trpcState }: { trpcState: any }) {
    // const dehydratedState = dehydrate(trpcState)
    return (
        <HydrationBoundary state={trpcState}>
            <Component />
        </HydrationBoundary>
    )
}