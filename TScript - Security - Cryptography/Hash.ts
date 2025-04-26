import { createHash } from 'node:crypto'


export class Hash {

    _create(data:string) {
        const hashed = createHash('sha256').update(data).digest('hex')
        return { hashed }
    }
}