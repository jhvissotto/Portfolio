import { generateKeyPairSync } from 'node:crypto'


export function keypair_generate() {
    
    return generateKeyPairSync('rsa', {
        modulusLength: 2048, 
        publicKeyEncoding: {
            type:   'spki', 
            format: 'pem',
        },
        privateKeyEncoding: {
            type:   'pkcs8', 
            format: 'pem',
            // cipher:     'aes-256-cbc',
            // passphrase: 'passphrase'
        },
    })
}