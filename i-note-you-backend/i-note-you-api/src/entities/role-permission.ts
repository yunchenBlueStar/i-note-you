import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../common/class/base-entity';
import { Role } from './role';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { Permission } from './permission';

@Entity()
export class RolePermission extends BaseEntity {
  @Column('uuid', { name: 'role_id' })
  roleId: string;
  @ManyToOne(() => Role, (role: Role) => role.rolePermissions)
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @Column('uuid', { name: 'permission_id' })
  permissionId: string;
  @ManyToOne(
    () => Permission,
    (permission: Permission) => permission.rolePermissions,
  )
  @JoinColumn({ name: 'permission_id' })
  permission: Permission;
}

export class RolePermissionRepository extends BaseRepository<RolePermission> {}
