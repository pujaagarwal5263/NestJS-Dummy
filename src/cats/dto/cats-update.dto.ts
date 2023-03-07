import { IsBoolean, IsNumber, IsString } from "class-validator";

export class UpdateCatsDto{
    // @IsNumber()
    // catID: number;

    @IsString()
    name: string;

    @IsBoolean()
    isActive: Boolean;
}