import {
  Controller,
  Post,
  Body,
  Delete,
  HttpCode,
  Patch,
  Param,
  Get,
  UseGuards,
  Req,
  ForbiddenException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserRequstDto } from './userDtos/register-user.dto';
import { TokenResponseDto } from './userDtos/token-response.dto';
import { AuthCredentialsDto } from './userDtos/auth-credentials.dto';
import type { AuthenticatedRequest } from './user.service';
import { User } from './user.entity';
import { CurrentUser } from '../auth/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UpdateUserResponseDto } from './userDtos/update-user.dto';
import { MessageResponseDto } from './userDtos/message-response.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  async registerUser(
    @Body() registerUserDto: RegisterUserRequstDto,
  ): Promise<TokenResponseDto> {
    return this.userService.registerUser(registerUserDto);
  }

  @Post('login')
  async loginUser(
    @Body() loginUserDto: AuthCredentialsDto,
  ): Promise<TokenResponseDto> {
    return this.userService.loginUser(loginUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getAuthenticatedUser(@Req() req): Promise<Omit<User, 'password'>> {
    return this.userService.getAuthenticatedUser(req.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('me')
  async updateOwnUser(
    @CurrentUser() user: any,
    @Body() updateUserDto: Partial<RegisterUserRequstDto>,
  ): Promise<UpdateUserResponseDto> {
    return this.userService.updateUser(user.userId, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('me')
  async deleteOwnAccount(@CurrentUser() user: any): Promise<MessageResponseDto> {
    return this.userService.deleteUserById(user.userId);
  }
}
