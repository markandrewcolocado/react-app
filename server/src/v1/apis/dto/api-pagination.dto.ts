import { IsInt, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class ApiPaginationDto {
    @IsString()
    @IsOptional()
    provider: string;

    @IsString()
    @IsOptional()
    catalog: string;

    @IsInt()
    @IsPositive()
    @IsOptional()
    offset: number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    limit: number;
}