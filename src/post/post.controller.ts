import { Controller, Get } from '@nestjs/common';
import { PostsService } from './post.service';
import { PostEntity } from './post.entity';

@Controller('posts')
export class PostsController {

  constructor(
    private postsService: PostsService,
  ) { }

  @Get('')
  async createAndUpdatePost(): Promise<PostEntity> {
    return await this.postsService.createAndUpdatePost();
  }
}
