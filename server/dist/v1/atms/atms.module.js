"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtmsModule = void 0;
const common_1 = require("@nestjs/common");
const atms_service_1 = require("./atms.service");
const atms_controller_1 = require("./atms.controller");
const axios_1 = require("@nestjs/axios");
let AtmsModule = class AtmsModule {
};
exports.AtmsModule = AtmsModule;
exports.AtmsModule = AtmsModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        controllers: [atms_controller_1.AtmsController],
        providers: [atms_service_1.AtmsService],
    })
], AtmsModule);
//# sourceMappingURL=atms.module.js.map