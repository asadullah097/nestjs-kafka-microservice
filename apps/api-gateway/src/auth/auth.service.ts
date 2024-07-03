import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_KAFKA_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  signUp(createUserDto: any) {
    console.log(createUserDto, 'kafka listing');

    this.authClient.emit('create_user', JSON.stringify(createUserDto));
    return 'User created successfully';
  }
}
