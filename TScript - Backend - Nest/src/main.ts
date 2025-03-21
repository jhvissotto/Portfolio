import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

import { AppModule } from './app/app.module'


async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    
    const config = new DocumentBuilder()
        .setTitle('API Title')
        .setDescription('API Description')
        .setVersion('1.0')
        .build()
      
    const document = SwaggerModule.createDocument(app, config)
    
    SwaggerModule.setup('/api', app, document)

    await app.listen(process.env.PORT ?? 3000)
}


bootstrap()