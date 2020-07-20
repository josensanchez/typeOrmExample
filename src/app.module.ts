import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './post/post.module';
import { TagsModule } from './tag/tag.module';
import { PostEntity } from './post/post.entity';
import { TagEntity } from './tag/tag.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: [PostEntity, TagEntity],
      synchronize: true,
      logging: true,
    }), PostsModule, TagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
