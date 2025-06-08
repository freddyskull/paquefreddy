import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  // swagger setup
  const config = new DocumentBuilder()
    .setTitle('PA QUE FREDDY - API')
    .setDescription('The NestJS API description')
    .setVersion('1.0')
    .addTag('Products')
    .addTag('Users')
    .addTag('Suppliers')
    .addTag('Categories')
    .addTag('Orders')
    .addTag('Records')
    .addTag('Purhases')
    .addTag('Config')
    .build();
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  app.enableCors();
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
