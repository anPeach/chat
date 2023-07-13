import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { UserRoles } from 'src/intermediate-tables/user-roles.model';
import { Role } from 'src/roles/roles.model';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@ObjectType()
@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @Field(() => ID)
  @ApiProperty({ example: '1', description: 'Unique identifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Field()
  @ApiProperty({ example: 'user@gmail.com', description: 'Email address' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @Field()
  @ApiProperty({ example: '1234_abcd', description: 'Password' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
