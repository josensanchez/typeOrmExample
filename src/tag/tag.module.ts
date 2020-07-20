import { Module } from '@nestjs/common';
import { TagsService } from './tag.service';

@Module({
  providers: [TagsService]
})
export class TagsModule {}
