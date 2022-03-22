import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle('@replaceme').build();
  const document = SwaggerModule.createDocument(app, config);
  openApiGenerate(document);

  await app.close();
}
bootstrap();

function openApiGenerate(document: OpenAPIObject) {
  fs.writeFileSync('src/api/spec.json', JSON.stringify(document));
  console.log('Generated OpenAPI spec');
}
