import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CourseUnit } from './course-unit';
import { BaseEntity } from '../common/class/base-entity';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
@Entity()
export class UnitVideo extends BaseEntity {
  @Column('uuid', { name: 'unit_id' })
  courseUnitId: string;

  @Column('varchar', { name: 'title' })
  title: string;

  @Column('varchar', { name: 'url' })
  url: string;

  @ManyToOne(() => CourseUnit, (unit: CourseUnit) => unit.unitVideos)
  @JoinColumn({ name: 'unit_id' })
  unit: CourseUnit;
}
export class UnitVideoRepository extends BaseRepository<UnitVideo> {}
