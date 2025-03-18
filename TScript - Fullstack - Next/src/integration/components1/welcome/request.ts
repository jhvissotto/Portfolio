import type { Req, Res } from './protocol'
import { client } from '@/src/backend/api'


export async function request(req:Req) {
    return await client('/welcome').then<Res>(x => x.json())
}
