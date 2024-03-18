import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Role } from './role';
import { User } from './user';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { BaseEntity } from '../common/class/base-entity';
@Entity()
export class UserRole extends BaseEntity {
  @ManyToOne(() => User, (user: User) => user.userRoles)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column('uuid', { name: 'role_id' })
  roleId: string;

  @ManyToOne(() => Role, (role: Role) => role.id)
  @JoinColumn({ name: 'role_id' })
  role: Role;
}

export class UserRoleRepository extends BaseRepository<UserRole> {}
