import { randomBytes, scryptSync, timingSafeEqual } from 'crypto'


export function _randomBytes() {
    const salt = randomBytes(16).toString('hex')
    return { salt }
}

export function _crypt(pword:string) {
    const { salt } = _randomBytes()
    const hash = scryptSync(pword, salt, 64).toString('hex');
    return { salt, hash }
}

export function _timingEqual(pword:string, salt:string, hash:string) {
    const A = scryptSync(pword, salt, 64)
    const B = Buffer.from(hash, 'hex')
    const match = timingSafeEqual(A, B)
    return { match }
}