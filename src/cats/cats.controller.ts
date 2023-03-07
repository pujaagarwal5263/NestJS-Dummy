import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Req } from '@nestjs/common';
import { CatsService } from './cats.service';
import { UpdateCatsDto } from './dto/cats-update.dto';
import { Cat } from './entity/cats.entity';

@Controller('/cats')
export class CatsController {
  constructor(private catsService: CatsService){}

    @Get('')
    getCats(): Promise<Cat[]> {
      return this.catsService.getCats();
    }

    @Get('/me')
    getMe():Object{
        return this.catsService.getMe();
    }

    @Get(':catID')
    getCat(@Param('catID', ParseIntPipe) catID: number){
        return this.catsService.getCat(catID);
    }
    
    @Post()
    store(@Req() req: Request){
      return this.catsService.store(req.body);
    }

    @Patch()
    storeData(@Body() catsDto: UpdateCatsDto){
      return this.catsService.storeData(catsDto);
    }
}
