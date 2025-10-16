import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Apistatus {
    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column()
    name: string;

    @Column()
    status: string;

    @Column()
    baseUrl: string;

    @Column()
    environment: string;

    @Column()
    notes: string;
}
