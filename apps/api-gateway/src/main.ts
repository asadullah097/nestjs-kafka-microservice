import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { User } from '@app/database/entities/user.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(User, "started");

  await app.listen(3000);
}
bootstrap();
