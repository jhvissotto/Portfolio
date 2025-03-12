import { TRPC } from '@/src/backend'

import { welcome, posts } from './components2'


export const router = TRPC.router({
    [welcome.name]: welcome.handler, 
    [posts.name]: TRPC.router({
        [posts.loader.name]: posts.loader.handler, 
    }),
})
