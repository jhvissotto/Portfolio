import * as trpcNext from '@trpc/server/adapters/next'

import { t } from '@/trpc/server/trpc'
import { integration } from '@/integration'



export const router = t.router({
    wellcome2: integration.welcome2.route, 
})


export default trpcNext.createNextApiHandler({
    router,
    createContext: ctx => ctx,
    // createContext: ({ req, res }) => ({ req, res }), 
})
