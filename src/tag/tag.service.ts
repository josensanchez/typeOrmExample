import { Injectable } from '@nestjs/common';
import { TagEntity } from './tag.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TagsService {
  constructor(@InjectRepository(TagEntity) private tagsRepository: Repository<TagEntity>) { }

  async create(name: string): Promise<TagEntity> {
    const tag = this.tagsRepository.create({ name });
    await this.tagsRepository.save(tag);
    return tag;
  }
}
