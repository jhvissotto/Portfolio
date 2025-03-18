import { Fragment as Layout } from 'react'

import { TRPCNext } from '@/src/integration/TRPCNext'
import { Button } from '@/src/frontend/View/Components'


export function ApiInfiniteLoad() {

    const { data, hasNextPage, fetchNextPage } = TRPCNext.posts.loader.useInfiniteQuery({}, { 
        getNextPageParam: x => x.nextPage 
    })

    function onClick() {
        if (hasNextPage) fetchNextPage()
    }

    return (
        <Layout>
            <h1>Api - Infinite Loader</h1>

            <ul>{data?.pages.flatMap(x => x.items).map((x, k) => (
                <li key={k}>
                    <p>{x.num} - {x.name}</p>
                </li>
            ))}</ul>

            <Button.Loader onClick={onClick} />
        </Layout>
    )
}