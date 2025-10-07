"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePortalDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_portal_dto_1 = require("./create-portal.dto");
class UpdatePortalDto extends (0, mapped_types_1.PartialType)(create_portal_dto_1.CreatePortalDto) {
}
exports.UpdatePortalDto = UpdatePortalDto;
//# sourceMappingURL=update-portal.dto.js.map