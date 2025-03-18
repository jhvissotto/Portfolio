import { client } from './client'

export type Req = {
    todoId: number, 
}

export type Res = {
    userId:     number,
    id:         number,
    title:      string,
    completed:  boolean, 
}

export function request({ todoId }: Req) {
    return client(`/todos/{todoId}`).then<Res[]>(x => x.json())
}