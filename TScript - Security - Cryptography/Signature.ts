import { createSign, createVerify } from 'node:crypto'
import { keypair_generate } from './keypair'


export type KEY_PRIVATE = Parameters<ReturnType<typeof createSign>['sign']>[0]
export type KEY_PUBLIC  = Parameters<ReturnType<typeof createVerify>['verify']>[0]


export class Signature {

    key_public:  KEY_PUBLIC
    key_private: KEY_PRIVATE

    constructor(key_public?:KEY_PUBLIC, key_private?:KEY_PRIVATE) {
        
        if (key_public && key_private) {
            this.key_public  = key_public 
            this.key_private = key_private
        } else {
            const { publicKey, privateKey } = keypair_generate()
            this.key_public  = publicKey 
            this.key_private = privateKey
        }
    }

    _sign(data:string) {
        const signature = createSign('rsa-sha256').update(data).sign(this.key_private, 'hex')
        return { signature }
    }

    _verify(data:string, signature:string) {
        const match = createVerify('rsa-sha256').update(data).verify(this.key_public, signature, 'hex')
        return { match }
    }
}