import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CatsService } from 'src/cats/cats.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private AuthService: AuthService){}
    
    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Body() loginDto: any){
       return await this.AuthService.validateCat(loginDto);
    }
}
