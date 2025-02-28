"use server"

import type { GetServerSideProps } from 'next'
import { createServerSideHelpers } from '@trpc/react-query/server'
import { HydrationBoundary } from "@tanstack/react-query"

import { transformer }  from '@/trpc/utils'
import { trpc }         from '@/trpc/utils/trpc'
import { router }       from '@/pages/api/trpc/[trpc]'



export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const SSH = createServerSideHelpers({ router, ctx, transformer })
  await SSH.wellcome2.prefetch({ message: 'Welcome from Backend' })
  return { props: { trpcState: SSH.dehydrate() } }
}


// export default function Component() {
function Component() {
  const { data } = trpc.wellcome2.useQuery({ message: 'Welcome from Frontend' })
  return (
    <>
      <h1>Api TRPC</h1>
      <h2>{data?.text}</h2>
    </>
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