import { Body, Injectable } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';

@Injectable()
export class AuthService {
    constructor(private catsService: CatsService){}

   async validateCat(@Body() loginDto: any){
    const cat= await this.catsService.getByName(loginDto.name);
        if(cat){
          if(cat.passcode == loginDto.passcode){
            return cat;
          }
          return "passwords mismatch"
        }
        return 'unauthenticated';
   }
}
