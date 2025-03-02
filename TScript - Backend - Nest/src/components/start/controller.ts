import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { cofigs } from './constants'
import { Serv } from './service'


@ApiTags(cofigs.name)
@Controller(cofigs.route)
export class Ctrl {
    constructor(private readonly service: Serv) {}

    @Get()
    get() {
        return this.service.get({})
    }
}