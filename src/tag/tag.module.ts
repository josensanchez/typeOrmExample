import { Module } from '@nestjs/common';
import { TagsService } from './tag.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagEntity } from './tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TagEntity])],
  providers: [TagsService],
  exports: [TagsService],
})
export class TagsModule {}
