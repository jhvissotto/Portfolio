import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'

import { Start } from '../components'


@Module({
  imports: [
    Start.Mod, 
  ],
  controllers: [AppController],
  providers:   [AppService],
})

export class AppModule {}