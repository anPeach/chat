import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UsersService) {}

  @Mutation(() => User)
  async create(@Args('createUser') dto: CreateUserDto): Promise<User> {
    return await this.userService.create(dto);
  }

  @Mutation(() => User)
  async update(@Args('updateUser') dto: CreateUserDto): Promise<User> {
    return await this.userService.create(dto);
  }
}
