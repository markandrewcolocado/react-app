import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ 
    transform: true,
    transformOptions: { enableImplicitConversion: true } // To implicitly convert number from requests
  }));
  
  const configService = app.get(ConfigService);
  const PORT = configService.get('PORT');
  
  await app.listen(PORT ?? 3000);
}
bootstrap();
