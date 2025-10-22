import { IsLatitude, IsLongitude, IsNumber, IsString } from "class-validator";
import { Entity } from "typeorm";

@Entity()
export class CreateAtmDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  address: string;

  @IsNumber()
  @IsLatitude()
  latitude: number;

  @IsNumber()
  @IsLongitude()
  longitude: number;
}
