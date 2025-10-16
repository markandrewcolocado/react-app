"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMicroserviceDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_microservice_dto_1 = require("./create-microservice.dto");
class UpdateMicroserviceDto extends (0, mapped_types_1.PartialType)(create_microservice_dto_1.CreateMicroserviceDto) {
}
exports.UpdateMicroserviceDto = UpdateMicroserviceDto;
//# sourceMappingURL=update-microservice.dto.js.map