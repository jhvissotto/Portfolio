import { publicEncrypt, privateDecrypt } from 'node:crypto'
import { keypair_generate } from './keypair'


type KEY_PUBLIC  = Parameters<typeof publicEncrypt>[0]
type KEY_PRIVATE = Parameters<typeof privateDecrypt>[0]


export class Asymmetric {

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
    
    _publicEncrypt(decrypted:string) {
        const encrypted = publicEncrypt(this.key_public, Buffer.from(decrypted)).toString('hex') 
        return { encrypted }
    }
    
    _privateDecrypt(encrypted:string) {
        const decrypted = privateDecrypt(this.key_private, Buffer.from(encrypted,'hex')).toString('utf-8')
        return { decrypted }
    }
}