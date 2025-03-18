import { z } from 'zod'

import { TRPC, auth } from '@/src/backend'
import { database } from '@/src'



export const name = 'register'

export const req = z.object({
    email:      z.string(), 
    password:   z.string(), 
})

export type Req = z.infer<typeof req>



export const handler = TRPC.procedure.input(req).mutation(async ({ input }) => {
    
    const { hashed } = auth.bcrypt_hash(input.password)

    const res = await database.users.insert(input.email, hashed)

    return res
})