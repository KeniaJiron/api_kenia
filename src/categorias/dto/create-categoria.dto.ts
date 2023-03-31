import { IsEmpty, IsNotEmpty,IsString } from "class-validator";

export class CreateCategoriaDto {
    @IsString()
    @IsNotEmpty()
    name: string;
}
