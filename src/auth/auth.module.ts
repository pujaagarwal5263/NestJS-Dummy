import { Module } from '@nestjs/common';
import { CatModule } from 'src/cats/cats.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    controllers: [AuthController],
    imports: [CatModule],
    providers: [AuthService]
})
export class AuthModule {}
