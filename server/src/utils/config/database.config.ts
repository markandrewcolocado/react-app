import { Api } from 'src/v1/apis/entities/api.entity';
import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
    type: 'mysql',
    host: process.env.MYSQL_HOST || 'localhost',
    port: Number(process.env.MYSQL_PORT) || 3306,
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASS || '123456',
    database: process.env.MYSQL_NAME || 'api_dashboard',
    entities: [Api]
};

export default config;

// import { Api } from "src/v1/apis/entities/api.entity"

// export default () => ({
//     type: 'mysql',
//         host: process.env.MYSQL_HOST || 'localhost',
//         port: Number(process.env.MYSQL_PORT) || 3306,
//         username: process.env.MYSQL_USER || 'root',
//         password: process.env.MYSQL_PASS || '123456',
//         database: process.env.MYSQL_NAME,
//         entities: [Api],
// })

// import { TypeOrmModuleOptions } from "@nestjs/typeorm";
// import { Api } from "src/v1/apis/entities/api.entity";

// export const getDatabaseConfig = (): Record<string, TypeOrmModuleOptions> => ({
//     moduleConnection: {
//         type: 'mysql',
//         host: process.env.MYSQL_HOST || 'localhost',
//         port: Number(process.env.MYSQL_PORT) || 3306,
//         username: process.env.MYSQL_USER || 'root',
//         password: process.env.MYSQL_PASS || '123456',
//         database: process.env.MYSQL_NAME,
//         entities: [Api],
//     }
// })
