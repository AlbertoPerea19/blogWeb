import { Injectable } from '@nestjs/common';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
import { Entry } from './entities/entry.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EntryService {
  constructor(
    @InjectRepository(Entry)
    private entryRepository: Repository<Entry>,
  ) {}

  create(createEntryDto: CreateEntryDto) {
    return this.entryRepository.save(createEntryDto);
  }

  findAll(): Promise<Entry[]> {
    return this.entryRepository.find();
  }

  findOne(id: string): Promise<Entry> {
    return this.entryRepository.findOne({where: {id}});
  }

  update(id: string, updateEntryDto: UpdateEntryDto) {
    return this.entryRepository.update({id}, updateEntryDto);
  }

  async remove(id: string): Promise<void> {
    await this.entryRepository.delete(id);
  }
}
