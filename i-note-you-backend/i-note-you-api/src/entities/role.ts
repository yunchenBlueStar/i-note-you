import { Column, Entity, EntityRepository, OneToMany } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { RolePermission } from './role-permission';
import { UserRole } from './user-role';
import { BaseEntity } from '../common/class/base-entity';
@Entity()
export class Role extends BaseEntity {
  @Column('varchar', { name: 'name' })
  name: string;

  @OneToMany(() => UserRole, (userRoles: UserRole) => userRoles.role)
  userRoles: UserRole[];

  @OneToMany(
    () => RolePermission,
    (rolePermissions: RolePermission) => rolePermissions.role,
  )
  rolePermissions: RolePermission[];
}
@EntityRepository(Role)
export class UserRoleRepository extends BaseRepository<Role> {}
