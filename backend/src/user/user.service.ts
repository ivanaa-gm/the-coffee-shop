import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from './user.entity';
import { RegisterUserRequstDto } from './userDtos/register-user.dto';
import { TokenResponseDto } from './userDtos/token-response.dto';
import { AuthCredentialsDto } from './userDtos/auth-credentials.dto';
import { Request } from 'express';
import { UpdateUserResponseDto } from './userDtos/update-user.dto';
import { MessageResponseDto } from './userDtos/message-response.dto';

export interface AuthenticatedRequest extends Request {
  user: { userId: number; email: string };
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async registerUser(
    registerUserDto: RegisterUserRequstDto,
  ): Promise<TokenResponseDto> {
    const { email, password, firstName, lastName, addressCity, address } =
      registerUserDto;

    const existingUser = await this.userRepository.findOne({
      where: { email },
    });
    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = this.userRepository.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      addressCity,
      address,
      loyaltyPoints: 0,
      registeredOn: new Date(),
    });

    const savedUser = await this.userRepository.save(newUser);

    const payload = { sub: savedUser.id, email: savedUser.email };
    const accessToken = this.jwtService.sign(payload, {
      secret: 'supersecret',
    });

    return {
      message: 'User successfully registered.',
      access_token: accessToken,
    };
  }

  async loginUser(loginUserDto: AuthCredentialsDto): Promise<TokenResponseDto> {
    const { email, password } = loginUserDto;

    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('Invalid email - not found.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password.');
    }

    const payload = { sub: user.id, email: user.email };
    const accessToken = this.jwtService.sign(payload, {
      secret: 'supersecret',
    });

    return {
      message: 'User successfully logged in.',
      access_token: accessToken,
    };
  }

  async getAuthenticatedUser(userId: number): Promise<Omit<User, 'password'>> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    console.log(user);
    if (!user) throw new NotFoundException('User not found');
    const { password, ...rest } = user;
    return rest;
  }

  async updateUser(
    id: number,
    updateUserDto: Partial<RegisterUserRequstDto>,
  ): Promise<UpdateUserResponseDto> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (updateUserDto.email) user.email = updateUserDto.email;
    if (updateUserDto.firstName) user.firstName = updateUserDto.firstName;
    if (updateUserDto.lastName) user.lastName = updateUserDto.lastName;
    if (updateUserDto.addressCity) user.addressCity = updateUserDto.addressCity;
    if (updateUserDto.address) user.address = updateUserDto.address;

    if (updateUserDto.password) {
      user.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    const updatedUser = await this.userRepository.save(user);

    const { password, ...safeUser } = updatedUser;
    return {
      message: 'User updated successfully.',
      user: safeUser,
    };
  }

  async deleteUserById(userId: number): Promise<MessageResponseDto> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.userRepository.remove(user);

    return {
      message: "User deleted successfully."
    }
  }
}
