"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAtmDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_atm_dto_1 = require("./create-atm.dto");
class UpdateAtmDto extends (0, mapped_types_1.PartialType)(create_atm_dto_1.CreateAtmDto) {
}
exports.UpdateAtmDto = UpdateAtmDto;
//# sourceMappingURL=update-atm.dto.js.map