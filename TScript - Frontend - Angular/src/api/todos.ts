export type Req = {}
export type Res = {
    userId:     number
    id:         number
    title:      string
    completed:  boolean
}

export const endpoint = '/todos'