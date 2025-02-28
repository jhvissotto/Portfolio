import type { Req, Res } from './constants'
import { client } from '@/integration/api'


export async function request(req:Req) {
    return await client('/welcome').then<Res>(x => x.json())
}
