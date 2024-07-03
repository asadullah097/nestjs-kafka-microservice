import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { dataSourceOptions } from 'ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions)],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
