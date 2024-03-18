import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Course } from './course';
import { UnitMaterial } from './course-unit-material';
import { UnitNote } from './course-unit-note';
import { UnitVideo } from './course-unit-video';
import { BaseEntity } from '../common/class/base-entity';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
@Entity()
export class CourseUnit extends BaseEntity {
  @Column('uuid', { name: 'course_id' })
  courseId: string;

  @Column('varchar', { name: 'week' })
  week: string;

  @Column('date', { name: 'teach_date' })
  teachDate: Date;

  @Column('varchar', { name: 'teach_content' })
  teach_content: string;

  @Column('varchar', { name: 'evaluate' })
  evaluate: string;

  @ManyToOne(() => Course, (course) => course.courseUnits)
  @JoinColumn({ name: 'course_id' })
  course: Course;

  @OneToMany(() => UnitVideo, (unitVideos: UnitVideo) => unitVideos.unit)
  unitVideos: UnitVideo[];

  @OneToMany(
    () => UnitMaterial,
    (unitMaterials: UnitMaterial) => unitMaterials.unit,
  )
  unitMaterials: UnitMaterial[];

  @OneToMany(() => UnitNote, (unitNotes: UnitNote) => unitNotes.unit)
  unitNotes: UnitNote[];
}
export class CourseUnitRepository extends BaseRepository<CourseUnit> {}
