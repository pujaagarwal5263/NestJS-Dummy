import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateCatsDto } from './dto/cats-update.dto';
import { Cat } from './entity/cats.entity';

@Injectable()
export class CatsService {
    constructor(
        @InjectRepository(Cat)
        private catRepository: Repository<Cat>,
      ) {}
    
    getCats(): Promise<Cat[]> {
        return this.catRepository.find();
    }

    getMe():Object{
        return {name: "Ruth"}
    }

    getCat(catID: number){
        return this.catRepository.findOne({where: {id: catID}});
    }

    store(data: Object){
        return this.catRepository.save(data);
    }

    storeData(catsDto: UpdateCatsDto){
       return  catsDto;
    }
}
