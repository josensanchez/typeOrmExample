import { Injectable } from '@nestjs/common';
import { TagsService } from 'src/tag/tag.service';
import { PostEntity } from './post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsService {

  constructor(private tagsService: TagsService, @InjectRepository(PostEntity) private postRepository: Repository<PostEntity>) { }

  async createAndUpdatePost(): Promise<PostEntity> {
    const name = 'post'
    // create a tag
    const tag = await this.tagsService.create('tag');

    const tags = [tag];
    //create a post 
    const post = this.postRepository.create({ name, tags });

    // save post
    await this.postRepository.save(post);

    console.log('Succesfully create post: ', post);

    // update id 1 with the same data

    this.postRepository.update(1, { name, tags });

    return await post;

  }
}
