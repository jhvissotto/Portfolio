import { initTRPC } from '@trpc/server'
import { transformer } from '../utils/transformer'


export const t = initTRPC.create({
  transformer,
})