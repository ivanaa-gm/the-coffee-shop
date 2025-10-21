import { User } from '../user.entity';

export class UpdateUserResponseDto {
  message: string;
  user: Omit<User, 'password'>;
}
