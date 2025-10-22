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
exports.ApisService = void 0;
const common_1 = require("@nestjs/common");
let ApisService = class ApisService {
    constructor() { }
    create(createApiDto) {
        return 'This action adds a new api';
    }
    findAll(apiPaginationDto) {
        const query = this.buildPaginationQuery(apiPaginationDto);
        return 'Return all apis.';
    }
    buildPaginationQuery(apiPaginationDto) {
        const { provider, catalog, limit, offset } = apiPaginationDto;
        if (provider || catalog) {
            if (!provider || !catalog)
                throw new Error('Provider & Catalog should have values.');
        }
        if (offset && !limit)
            throw new Error('Offset and Limit should have values.');
        return {
            where: { provider, catalog },
            skip: offset ?? undefined,
            take: limit ?? undefined,
        };
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
    __metadata("design:paramtypes", [])
], ApisService);
//# sourceMappingURL=apis.service.js.map