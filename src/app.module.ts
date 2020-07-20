import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './post/post.module';
import { TagsModule } from './tag/tag.module';

@Module({
  imports: [PostsModule, TagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
