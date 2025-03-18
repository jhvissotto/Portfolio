import { z } from 'zod'
import { TRPC } from '@/src/backend/TRPC'


export const name = 'welcome'


export const req = z.object({
    message: z.string(), 
})


export type Req = z.infer<typeof req>


export const handler = TRPC.procedure.input(req).query(({ input }) => ({
    text: input.message
}))