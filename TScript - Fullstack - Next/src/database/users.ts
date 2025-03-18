import { client } from '@/src/database/client'


export async function find(email:string) {
    return await client.users.findUnique({
        where: { email }
    })
}


export async function insert(email:string, hashed:string) {
    return await client.users.create({
        data: { email, hashed },
    })
}