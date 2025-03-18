import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { config } from './config'


export function bcrypt_hash(password:string) {
    const hashed = bcrypt.hashSync(password, bcrypt.genSaltSync())
    return { hashed }
}


export function bcrypt_check(password:string, hashed:string) {
    const isMatch = bcrypt.compareSync(password, hashed)
    return { isMatch }
}


export function jwt_hash(payload:any) {
    const token = jwt.sign(payload, config.JWT_SECRET)
    return { token }
}


export function jwt_check(token:string) {
    const payload = jwt.verify(token, config.JWT_SECRET)
    return { payload }
}