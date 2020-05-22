import { IsEmail, IsString, Length, IsOptional } from 'class-validator';

export class CreateUserDTO {
  @IsEmail()
  public email: string;

  @Length(0, 20)
  public firstName: string;

  @Length(0, 20)
  public lastName: string;

  @IsString()
  public password: string;
}

export class LoginUserDTO {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}
