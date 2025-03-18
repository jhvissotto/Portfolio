import { client, functions } from '@/src/database'


export async function loader(page:number, limit:number) {
    return await client.posts.findMany({
        ...functions.pagination(page, limit)
    })
}

