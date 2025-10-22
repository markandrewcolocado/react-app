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
exports.AtmsController = void 0;
const common_1 = require("@nestjs/common");
const atms_service_1 = require("./atms.service");
const create_atm_dto_1 = require("./dto/create-atm.dto");
const update_atm_dto_1 = require("./dto/update-atm.dto");
let AtmsController = class AtmsController {
    atmsService;
    constructor(atmsService) {
        this.atmsService = atmsService;
    }
    create(env, createAtmDto) {
        return this.atmsService.create(createAtmDto, env);
    }
    findAll(env) {
        return this.atmsService.findAll(env);
    }
    findOne(env, id) {
        return this.atmsService.findOne(env, +id);
    }
    update(env, id, updateAtmDto) {
        return this.atmsService.update(env, +id, updateAtmDto);
    }
    remove(env, id) {
        return this.atmsService.remove(env, +id);
    }
};
exports.AtmsController = AtmsController;
__decorate([
    (0, common_1.Post)('/:env'),
    __param(0, (0, common_1.Param)('env')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_atm_dto_1.CreateAtmDto]),
    __metadata("design:returntype", void 0)
], AtmsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/:env'),
    __param(0, (0, common_1.Param)('env')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AtmsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:env/:id'),
    __param(0, (0, common_1.Param)('env')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AtmsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('/:env/:id'),
    __param(0, (0, common_1.Param)('env')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_atm_dto_1.UpdateAtmDto]),
    __metadata("design:returntype", void 0)
], AtmsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:env/:id'),
    __param(0, (0, common_1.Param)('env')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AtmsController.prototype, "remove", null);
exports.AtmsController = AtmsController = __decorate([
    (0, common_1.Controller)('v1/atms'),
    __metadata("design:paramtypes", [atms_service_1.AtmsService])
], AtmsController);
//# sourceMappingURL=atms.controller.js.map