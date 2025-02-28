import { config } from './config'

export function client(endpoint:string) {
    return fetch(config.baseUrl + endpoint)
}

