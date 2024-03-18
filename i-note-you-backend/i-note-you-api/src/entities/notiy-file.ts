import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CourseNotify } from './course-notify';
import { BaseEntity } from '../common/class/base-entity';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
@Entity()
export class NotifyFile extends BaseEntity {
  @Column('varchar', { name: 'file' })
  file: string;

  @ManyToOne(
    () => CourseNotify,
    (courseNotify: CourseNotify) => courseNotify.notifyFiles,
  )
  @JoinColumn({ name: 'notify_id' })
  courseNotify: CourseNotify;
}
export class NoteFileRepository extends BaseRepository<NotifyFile> {}
