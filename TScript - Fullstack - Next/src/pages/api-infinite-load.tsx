import { Fragment as MyApp } from 'react'

import { Layouts, Pages } from '@/src/frontend/View'


export default function ApiInfiniteLoad() {
    return (
        <MyApp>
            <Layouts.Standard>
                <Pages.ApiInfiniteLoad />
            </Layouts.Standard>
        </MyApp>
    )
}