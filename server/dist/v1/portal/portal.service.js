"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortalService = void 0;
const common_1 = require("@nestjs/common");
let PortalService = class PortalService {
    create(createPortalDto) {
        return 'This action adds a new portal';
    }
    findAll() {
        return `This action returns all portal`;
    }
    findOne(id) {
        return `This action returns a #${id} portal`;
    }
    update(id, updatePortalDto) {
        return `This action updates a #${id} portal`;
    }
    remove(id) {
        return `This action removes a #${id} portal`;
    }
};
exports.PortalService = PortalService;
exports.PortalService = PortalService = __decorate([
    (0, common_1.Injectable)()
], PortalService);
//# sourceMappingURL=portal.service.js.map