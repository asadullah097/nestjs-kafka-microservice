import { Controller, Get, ValidationPipe } from '@nestjs/common';
import { AuthMicroserviceService } from './auth-microservice.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from '@app/shared/dto/create.user.dto';

@Controller()
export class AuthMicroserviceController {
  constructor(private readonly authMicroserviceService: AuthMicroserviceService) { }

  @EventPattern('create_user')
  async handleCreateUser(@Payload(ValidationPipe) data: CreateUserDto) {
    return this.authMicroserviceService.createUser(data);
  }
}
