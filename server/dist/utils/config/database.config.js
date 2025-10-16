"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
exports.default = () => ({
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_NAME,
    entities: [path.resolve(__dirname, '../..') + '/**/*.entity{.ts,.js}']
});
//# sourceMappingURL=database.config.js.map