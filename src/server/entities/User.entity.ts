import { Entity, Column, PrimaryColumn, Table } from "typeorm";

@Entity()
export class User {

  @PrimaryColumn()
  id: number;

  @Column({
    length: 20
  })
  firstname: string;

  @Column({
    length: 20
  })
  lastname: string;

  @Column({
    length: 30
  })
  email: string;
}