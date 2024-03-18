import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CourseUnit } from './course-unit';
import { BaseEntity } from '../common/class/base-entity';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';

@Entity()
export class UnitMaterial extends BaseEntity {
  @Column('uuid', { name: 'unit_id' })
  unitId: string;

  @Column('varchar', { name: 'name' })
  name: string;

  @Column('varchar', { name: 'content' })
  content: string;

  @ManyToOne(() => CourseUnit, (unit: CourseUnit) => unit.unitMaterials)
  @JoinColumn({ name: 'unit_id' })
  unit: CourseUnit;
}
export class UnitMaterialRepository extends BaseRepository<UnitMaterial> {}
