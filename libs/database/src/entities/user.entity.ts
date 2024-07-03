import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @CreateDateColumn() // add date value auto at the time of creation
  created_at: Date;

  @CreateDateColumn() // add date value auto at the time of creation
  updated_at: Date;
}
