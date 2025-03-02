import { Module } from '@nestjs/common'
import { Ctrl } from './controller'
import { Serv } from './service'


@Module({
  imports: [],
  controllers: [Ctrl],
  providers: [Serv],
})

export class Mod {}