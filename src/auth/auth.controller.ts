import { Body, Controller, Post } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private AuthService: AuthService){}

    @Post('/login')
    async login(@Body() loginDto: any){
       return await this.AuthService.validateCat(loginDto);
    }
}
