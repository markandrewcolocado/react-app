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
let AtmsService = class AtmsService {
    api;
    constructor(api) {
        this.api = api;
    }
    create(createAtmDto) {
        return 'This action adds a new atm';
    }
    async findAll() {
        const response = this.api.get('http://172.18.2.24:8088/uat/v1/atms');
        const test = await (0, rxjs_1.firstValueFrom)(response);
        console.log(test.data);
        return test;
    }
    findOne(id) {
        return `This action returns a #${id} atm`;
    }
    update(id, updateAtmDto) {
        return `This action updates a #${id} atm`;
    }
    remove(id) {
        return `This action removes a #${id} atm`;
    }
};
exports.AtmsService = AtmsService;
exports.AtmsService = AtmsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], AtmsService);
//# sourceMappingURL=atms.service.js.map