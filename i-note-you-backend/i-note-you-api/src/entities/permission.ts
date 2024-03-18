import { Entity, Column, OneToMany, EntityRepository } from 'typeorm';
import { RolePermission } from './role-permission';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { BaseEntity } from '../common/class/base-entity';
@Entity()
export class Permission extends BaseEntity {
  @Column('varchar', { name: 'name' })
  name: string;

  @OneToMany(
    () => RolePermission,
    (rolePermissions: RolePermission) => rolePermissions.permission,
  )
  rolePermissions: RolePermission[];
}
@EntityRepository(Permission)
export class PermissionRepository extends BaseRepository<Permission> {}
