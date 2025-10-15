"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_entity_1 = require("../../v1/apis/entities/api.entity");
const config = {
    type: 'mysql',
    host: process.env.MYSQL_HOST || 'localhost',
    port: Number(process.env.MYSQL_PORT) || 3306,
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASS || '123456',
    database: process.env.MYSQL_NAME || 'api_dashboard',
    entities: [api_entity_1.Api]
};
exports.default = config;
//# sourceMappingURL=database.config.js.map