import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { CatModule } from 'src/cats/cats.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
    controllers: [AuthController],
    imports: [CatModule, PassportModule],
    providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
