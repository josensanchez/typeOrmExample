import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
    JoinTable,
    DeleteDateColumn,
  } from 'typeorm';
  import { TagEntity } from '../tag/tag.entity';
  
  @Entity('posts')
  export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @ManyToMany(/* istanbul ignore next */() => TagEntity, (tag) => tag.posts)
    @JoinTable()
    tags: TagEntity[];

  
    @CreateDateColumn() created_at: Date;
  
    @UpdateDateColumn() updated_at: Date;
  
    @DeleteDateColumn() deleted_at?: Date;
  }
  