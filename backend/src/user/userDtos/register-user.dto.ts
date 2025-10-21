import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterUserRequstDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  addressCity: string;

  @IsString()
  @IsNotEmpty()
  address: string;
}
