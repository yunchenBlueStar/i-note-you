import { Column, Entity, OneToMany } from 'typeorm';
import { CourseMember } from './course-member';
import { CourseNotify } from './course-notify';
import { CourseUnit } from './course-unit';
import { BaseEntity } from '../common/class/base-entity';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';

@Entity()
export class Course extends BaseEntity {
  @Column('varchar', { name: 'name' })
  name: string;

  @Column('varchar', { name: 'session' })
  session: string;

  @Column('varchar', { name: 'description' })
  description: string;

  @Column('varchar', { name: 'image' })
  image: string;

  @Column('smallint', { name: 'people_count' })
  peopleCount: number;

  @Column('varchar', { name: 'invite_code' })
  inviteCode: string;

  @OneToMany(
    () => CourseMember,
    (courseMembers: CourseMember) => courseMembers.course,
  )
  courseMembers: CourseMember[];

  @OneToMany(
    () => CourseNotify,
    (courseNotifys: CourseNotify) => courseNotifys.course,
  )
  courseNotifys: CourseNotify[];

  @OneToMany(() => CourseUnit, (courseUnits: CourseUnit) => courseUnits.course)
  courseUnits: CourseUnit[];
}
export class CourseRepository extends BaseRepository<Course> {}
