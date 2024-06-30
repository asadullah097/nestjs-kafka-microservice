import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: "localhost",
    port: 5433,
    username: "prismaUser",
    password: "prismaPassword",
    database: "kafka-db",
    entities: ['libs/database/src/entities/**/*.ts'],
    migrations: ['libs/database/src/migrations/**/*.ts'],
    synchronize: false,
};

const dataSource = new DataSource(dataSourceOptions);

export { dataSourceOptions };
export default dataSource;
