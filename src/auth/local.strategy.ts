import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(name: string, passcode: string): Promise<any> {
    const loginDto={name:name, passcode:passcode};
    const cat = await this.authService.validateCat(loginDto);
    console.log(cat, "cat");
    
    if (!cat) {
      throw new UnauthorizedException();
    }
    return cat;
  }
}