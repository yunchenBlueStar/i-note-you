import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { BaseEntity } from '../common/class/base-entity';
import { Course } from './course';
import { NotifyFile } from './notiy-file';

@Entity()
export class CourseNotify extends BaseEntity {
  @Column('varchar', { name: 'title' })
  title: string;

  @Column('varchar', { name: 'content' })
  content: string;

  @Column('uuid', { name: 'course_id' })
  courseId: string;

  @ManyToOne(() => Course, (course: Course) => course.courseNotifys)
  @JoinColumn({ name: 'course_id' })
  course: Course;

  @OneToMany(() => NotifyFile, (notifyFiles) => notifyFiles.courseNotify)
  notifyFiles: NotifyFile[];
}
export class CourseNotifyRepository extends BaseRepository<CourseNotify> {}
