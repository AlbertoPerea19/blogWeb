import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Entry {

   @PrimaryGeneratedColumn("uuid")
   id: string;

   @Column()
   title: string;

   @Column()
   author: string;

   @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
   created_at: Date;

   @Column({length: 1000})
   content: string;
}
