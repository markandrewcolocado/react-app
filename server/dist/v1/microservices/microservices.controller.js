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
exports.MicroservicesController = void 0;
const common_1 = require("@nestjs/common");
const microservices_service_1 = require("./microservices.service");
const create_microservice_dto_1 = require("./dto/create-microservice.dto");
const update_microservice_dto_1 = require("./dto/update-microservice.dto");
let MicroservicesController = class MicroservicesController {
    microservicesService;
    constructor(microservicesService) {
        this.microservicesService = microservicesService;
    }
    create(createMicroserviceDto) {
        return this.microservicesService.create(createMicroserviceDto);
    }
    findAll(env) {
        return this.microservicesService.findAll(env);
    }
    findOne(id) {
        return this.microservicesService.findOne(+id);
    }
    update(id, updateMicroserviceDto) {
        return this.microservicesService.update(+id, updateMicroserviceDto);
    }
    remove(id) {
        return this.microservicesService.remove(+id);
    }
};
exports.MicroservicesController = MicroservicesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_microservice_dto_1.CreateMicroserviceDto]),
    __metadata("design:returntype", void 0)
], MicroservicesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('env')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MicroservicesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MicroservicesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_microservice_dto_1.UpdateMicroserviceDto]),
    __metadata("design:returntype", void 0)
], MicroservicesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MicroservicesController.prototype, "remove", null);
exports.MicroservicesController = MicroservicesController = __decorate([
    (0, common_1.Controller)('v1/microservices'),
    __metadata("design:paramtypes", [microservices_service_1.MicroservicesService])
], MicroservicesController);
//# sourceMappingURL=microservices.controller.js.map