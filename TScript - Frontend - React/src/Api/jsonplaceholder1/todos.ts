import { client } from './client'

export type Req = {}

export type Res = {
    userId:     number,
    id:         number,
    title:      string,
    completed:  boolean, 
}

export function request({}: Req) {
    return client('/todos').then<Res[]>(x => x.json())
}