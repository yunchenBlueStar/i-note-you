import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { CourseMember } from './course-member';
import { CourseUnit } from './course-unit';
import { BaseEntity } from '../common/class/base-entity';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';

@Entity()
export class UnitNote extends BaseEntity {
  @Column('uuid', { name: 'unit_id' })
  courseUnitId: string;

  @Column('varchar', { name: 'content' })
  content: string;

  @OneToOne(() => CourseMember, (courseMember) => courseMember.unitNote)
  @JoinColumn({ name: 'course_member_id' })
  courseMember: CourseMember;

  @ManyToOne(() => CourseUnit, (unit: CourseUnit) => unit.unitNotes)
  @JoinColumn({ name: 'unit_id' })
  unit: CourseUnit;
}
export class UnitNoteRepository extends BaseRepository<UnitNote> {}
