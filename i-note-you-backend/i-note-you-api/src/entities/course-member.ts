import { CourseMemberIdentity } from 'src/common/enum/course_member_identity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { BaseEntity } from '../common/class/base-entity';
import { Course } from './course';
import { UnitNote } from './course-unit-note';
import { User } from './user';

@Entity()
export class CourseMember extends BaseEntity {
  @Column('uuid', { name: 'user_id' })
  userId: string;

  @Column('uuid', { name: 'course_id' })
  courseId: string;

  @Column('smallint', { name: 'note_similarity' })
  noteSimilarity: number;

  @Column('smallint', { name: 'attendance_rate' })
  attendanceRate: number;

  @Column('enum', { name: 'identity', enum: CourseMemberIdentity })
  identity: CourseMemberIdentity;

  @ManyToOne(() => User, (user: User) => user.courseMembers)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Course, (course: Course) => course.courseMembers)
  @JoinColumn({ name: 'course_id' })
  course: Course;

  @OneToOne(() => UnitNote, (unitNote) => unitNote.courseMember)
  unitNote: UnitNote;
}

export class CourseMemberRepository extends BaseRepository<CourseMember> {}
