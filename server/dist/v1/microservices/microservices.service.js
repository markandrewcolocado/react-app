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
exports.MicroservicesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const apistatus_entity_1 = require("./entities/apistatus.entity");
const typeorm_2 = require("typeorm");
let MicroservicesService = class MicroservicesService {
    apiStatusRepository;
    constructor(apiStatusRepository) {
        this.apiStatusRepository = apiStatusRepository;
    }
    create(createMicroserviceDto) {
        return 'This action adds a new microservice';
    }
    findAll(env) {
        if (!env)
            throw new Error('Environment is required.');
        return this.apiStatusRepository.find({
            where: {
                environment: env
            }
        });
    }
    findOne(id) {
        return `This action returns a #${id} microservice`;
    }
    update(id, updateMicroserviceDto) {
        return `This action updates a #${id} microservice`;
    }
    remove(id) {
        return `This action removes a #${id} microservice`;
    }
};
exports.MicroservicesService = MicroservicesService;
exports.MicroservicesService = MicroservicesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(apistatus_entity_1.Apistatus)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MicroservicesService);
//# sourceMappingURL=microservices.service.js.map