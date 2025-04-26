import { createHmac } from 'node:crypto'


type KEY = Parameters<typeof createHmac>[1]


export class Hmac {
    key: KEY

    constructor(key:KEY) {
        this.key = key
    }

    _create(data:string) {
        const hmac = createHmac('sha256', this.key).update(data).digest('hex')
        return { hmac }
    }
}