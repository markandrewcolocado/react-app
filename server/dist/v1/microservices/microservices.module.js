"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicroservicesModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_service_1 = require("./microservices.service");
const microservices_controller_1 = require("./microservices.controller");
const typeorm_1 = require("@nestjs/typeorm");
const apistatus_entity_1 = require("./entities/apistatus.entity");
let MicroservicesModule = class MicroservicesModule {
};
exports.MicroservicesModule = MicroservicesModule;
exports.MicroservicesModule = MicroservicesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([apistatus_entity_1.Apistatus])],
        controllers: [microservices_controller_1.MicroservicesController],
        providers: [microservices_service_1.MicroservicesService],
    })
], MicroservicesModule);
//# sourceMappingURL=microservices.module.js.map