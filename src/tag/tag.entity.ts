import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from 'typeorm';
import { PostEntity } from '../post/post.entity';

@Entity('tags')
export class TagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(/* istanbul ignore next */() => PostEntity, (post) => post.tags)
  posts: PostEntity[];

  @CreateDateColumn() created_at: Date;

  @UpdateDateColumn() updated_at: Date;
}
