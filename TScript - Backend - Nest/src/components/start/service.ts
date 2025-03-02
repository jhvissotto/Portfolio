import { Injectable } from '@nestjs/common'

import type { Req, Res } from './constants'


@Injectable()
export class Serv {
    
    get(req:Req): Res {
        const data = { greetings:'Welcome' }
        return data
    }
}