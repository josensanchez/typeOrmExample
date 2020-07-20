import { Module } from '@nestjs/common';
import { PostsController } from './post.controller';
import { PostsService } from './post.service';
import { TagsModule } from 'src/tag/tag.module';
import { PostEntity } from './post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity]), TagsModule],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule { }
