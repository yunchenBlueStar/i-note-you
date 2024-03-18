import { Column, Entity, OneToMany } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { CourseMember } from './course-member';
import { UserRole } from './user-role';
import { BaseEntity } from '../common/class/base-entity';
@Entity()
export class User extends BaseEntity {
  @Column('varchar', { name: 'name' })
  name: string;

  @Column('varchar', { name: 'email' })
  email: string;

  @Column('varchar', { name: 'password' })
  password: string;

  @Column('varchar', { name: 'phone' })
  phone: string;

  @Column('varchar', { name: 'image' })
  image: string;

  @Column('varchar', { name: 'background_image', nullable: true })
  backgroundImage: string;

  @OneToMany(() => UserRole, (userRoles: UserRole) => userRoles.user)
  userRoles: UserRole[];

  @OneToMany(
    () => CourseMember,
    (courseMembers: CourseMember) => courseMembers.user,
  )
  courseMembers: CourseMember[];
}

export class UserRepository extends BaseRepository<User> {}
