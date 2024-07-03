
import { UserEntity } from '@app/database/entities/user.entity';
import * as dotenv from 'dotenv';
dotenv.config();
import { DataSource, DataSourceOptions } from 'typeorm';

const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'prismaUser',
    password: 'prismaPassword',
    database: 'kafka-db',
    entities: ["dist/**/*.entity{.ts,.js}"],
    migrations: [],
    synchronize: false,
    logging: true
};

export const dataSource = new DataSource(dataSourceOptions);

export { dataSourceOptions };

