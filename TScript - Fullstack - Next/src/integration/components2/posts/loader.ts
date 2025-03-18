import { z } from 'zod'

import { pagination } from '@/src/integration/functions'
import { TRPC } from '@/src/backend'
import { posts } from '@/src/database'


export const name = 'loader'


export const req = z.object({
    cursor: z.number().default(0), 
    limit:  z.number().default(3), 
})


export type Req = z.infer<typeof req>


export const handler = TRPC.procedure.input(req).query(async ({ input }) => {
    
    const items = await posts.loader(input.cursor, input.limit)

    return { items, ...pagination(items.length, input.cursor, input.limit) }
})


