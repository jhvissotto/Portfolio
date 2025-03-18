import { Fragment as MyApp } from 'react'

import { content } from '@/src/backend/content'


export default function Content() {
    return (
        <MyApp>
            <h1>Content</h1>
            <section>
                <img src={content.images(1)} />
                <img src={content.images(2)} />
                <img src={content.images(3)} />
            </section>
        </MyApp>
    )
}