import { z } from 'zod'

import { TRPC, auth } from '@/src/backend'
import { database } from '@/src'



export const name = 'check'

export const req = z.object({
    email:      z.string(), 
    password:   z.string(), 
})

export type Req = z.infer<typeof req>



export const handler = TRPC.procedure.input(req).query(async ({ input }) => {
    
    const query = await database.users.find(input.email)

    const { isMatch } = auth.bcrypt_check(input.password, query?.hashed || '')

    return { isMatch }
})