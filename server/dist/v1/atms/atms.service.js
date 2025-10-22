"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtmsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const uuid_1 = require("uuid");
let AtmsService = class AtmsService {
    api;
    constructor(api) {
        this.api = api;
    }
    async create(createAtmDto, env) {
        const uuid = (0, uuid_1.v4)();
        const request = this.api.post(`http://172.18.2.24:8088/${env}/v1/atms`, { guid: uuid, ...createAtmDto });
        const response = await (0, rxjs_1.lastValueFrom)(request);
        return response.data;
    }
    async findAll(env) {
        const request = this.api.get(`http://172.18.2.24:8088/${env}/v1/atms`);
        const response = await (0, rxjs_1.firstValueFrom)(request);
        return response.data;
    }
    async findOne(env, id) {
        const request = this.api.get(`http://172.18.2.24:8088/${env}/v1/atms/${id}`);
        const response = await (0, rxjs_1.lastValueFrom)(request);
        return response.data;
    }
    async update(env, id, updateAtmDto) {
        const request = this.api.put(`http://172.18.2.24:8088/${env}/v1/atms/${id}`, updateAtmDto);
        const response = await (0, rxjs_1.lastValueFrom)(request);
        console.log(response.data);
        return response.data;
    }
    async remove(env, id) {
        const request = this.api.delete(`http://172.18.2.24:8088/${env}/v1/atms/${id}`);
        const response = await (0, rxjs_1.lastValueFrom)(request);
        return response.data;
    }
};
exports.AtmsService = AtmsService;
exports.AtmsService = AtmsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], AtmsService);
//# sourceMappingURL=atms.service.js.map