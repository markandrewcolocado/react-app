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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApisService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const api_entity_1 = require("./entities/api.entity");
let ApisService = class ApisService {
    apisRepository;
    constructor(apisRepository) {
        this.apisRepository = apisRepository;
    }
    create(createApiDto) {
        return 'This action adds a new api';
    }
    findAll() {
        return this.apisRepository.find({
            where: {
                provider: 'ubp',
                catalog: 'uat'
            },
            skip: 0,
            take: 2
        });
    }
    findOne(id) {
        return `This action returns a #${id} api`;
    }
    update(id, updateApiDto) {
        return `This action updates a #${id} api`;
    }
    remove(id) {
        return `This action removes a #${id} api`;
    }
};
exports.ApisService = ApisService;
exports.ApisService = ApisService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(api_entity_1.Api)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ApisService);
//# sourceMappingURL=apis.service.js.map