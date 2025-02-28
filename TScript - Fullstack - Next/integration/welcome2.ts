import { z } from 'zod'
import { t } from '@/trpc/server/trpc'


export const req = z.object({
    message: z.string(), 
})

export const route = t.procedure.input(req).query(({ input }) => ({
    text: input.message
}))