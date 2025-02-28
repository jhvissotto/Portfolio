import { createTRPCNext } from '@trpc/next'
import { ssrPrepass } from '@trpc/next/ssrPrepass'
import { httpBatchLink, splitLink, unstable_httpSubscriptionLink } from '@trpc/client'

import { transformer } from './transformer'
import { router } from '@/pages/api/trpc/[trpc]'



function getBaseUrl() {
  // ======== Browser ======== //
  if (typeof window !== 'undefined') {
    return ''
  }

  // ======== Server ======== //
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  // ======== Localhost ======== //
  return `http://localhost:${process.env.PORT ?? 3000}`
}



export const trpc = createTRPCNext<typeof router>({
  config() {
    const url = getBaseUrl() + '/api/trpc'
    return {
      links: [splitLink({
        condition: (op) => op.type === 'subscription',
        true: unstable_httpSubscriptionLink({ url, transformer }),
        false: httpBatchLink({ url, transformer }),
      })],
    }
  },
  ssr: true,
  ssrPrepass,
  transformer,
})