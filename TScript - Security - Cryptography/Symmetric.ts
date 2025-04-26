import { randomBytes, createCipheriv, createDecipheriv } from 'node:crypto'


export class Symmetric {
    key
    iv

    constructor(key=randomBytes(32), iv=randomBytes(16)) {
        this.key = key
        this.iv  = iv
    }
    
    _cipher(data:string) {
        const cipher = createCipheriv('aes256', this.key, this.iv)
        const encrypted = cipher.update(data, 'utf8', 'hex') + cipher.final('hex')
        return { encrypted }
    }
    
    _decipher(encrypted:string) {
        const decipher = createDecipheriv('aes256', this.key, this.iv)
        const decrypted = decipher.update(encrypted, 'hex', 'utf-8') + decipher.final('utf8')
        return { decrypted }
    }
}