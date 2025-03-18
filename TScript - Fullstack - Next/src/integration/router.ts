import { TRPC } from '@/src/backend'

import { welcome, users, posts } from './components2'


export const router = TRPC.router({

    [welcome.name]: welcome.handler, 
    
    [users.name]: TRPC.router({
        [users.check.name]:     users.check.handler, 
        [users.register.name]:  users.register.handler, 
    }),
    
    [posts.name]: TRPC.router({
        [posts.loader.name]:    posts.loader.handler, 
    }),
})
