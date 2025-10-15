import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Api {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  provider: string;

  @Column()
  catalog: string;

  @Column()
  apicId: string;

  @Column()
  productId: string;

  @Column()
  title: string;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  product: string;

  @Column()
  basePath: string;

  @Column()
  updatedAt: string;

  @Column()
  updatedBy: string;

  @Column()
  createdAt: string;

  @Column()
  createdBy: string;

  @Column()
  endpoints: string;

  @Column()
  definitions: string;

  @Column()
  totalEndpoints: number;

  @Column()
  dateLogged: string;
}
