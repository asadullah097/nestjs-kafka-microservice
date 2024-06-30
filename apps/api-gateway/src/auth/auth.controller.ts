import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '@app/database/dto/create.user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('sign-up')
    createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.authService.signUp(createUserDto);
    }
}
