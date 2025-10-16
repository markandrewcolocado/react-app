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
exports.ApisController = void 0;
const common_1 = require("@nestjs/common");
const apis_service_1 = require("./apis.service");
const create_api_dto_1 = require("./dto/create-api.dto");
const update_api_dto_1 = require("./dto/update-api.dto");
const api_pagination_dto_1 = require("./dto/api-pagination.dto");
let ApisController = class ApisController {
    apisService;
    constructor(apisService) {
        this.apisService = apisService;
    }
    create(createApiDto) {
        return this.apisService.create(createApiDto);
    }
    findAll(apiPaginationDto) {
        return this.apisService.findAll(apiPaginationDto);
    }
    findOne(id) {
        return this.apisService.findOne(+id);
    }
    update(id, updateApiDto) {
        return this.apisService.update(+id, updateApiDto);
    }
    remove(id) {
        return this.apisService.remove(+id);
    }
};
exports.ApisController = ApisController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_api_dto_1.CreateApiDto]),
    __metadata("design:returntype", void 0)
], ApisController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [api_pagination_dto_1.ApiPaginationDto]),
    __metadata("design:returntype", void 0)
], ApisController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApisController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_api_dto_1.UpdateApiDto]),
    __metadata("design:returntype", void 0)
], ApisController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApisController.prototype, "remove", null);
exports.ApisController = ApisController = __decorate([
    (0, common_1.Controller)('v1/apis'),
    __metadata("design:paramtypes", [apis_service_1.ApisService])
], ApisController);
//# sourceMappingURL=apis.controller.js.map