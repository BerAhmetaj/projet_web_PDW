import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import {BaseEntity} from "../../baseentity";
import {Credential} from "@security/model";
import {Publication} from "../../publication/entity/publication.entity";
import {Commentaire} from "../../commentaire/entity/commentaire.entity";


@Entity()
export class Like extends BaseEntity{
    @PrimaryGeneratedColumn()
    id_like: number;

    @ManyToOne(() => Credential, {eager: false})
    @JoinColumn({referencedColumnName: 'credential_id', name: 'credential_id'})
    credential_id: string;

    @ManyToOne(() => Publication, {eager: false})
    @JoinColumn({referencedColumnName: 'id_publication', name: 'id_publication'})
    id_publication: string;

    @ManyToOne(() => Commentaire, {eager: false})
    @JoinColumn({referencedColumnName: 'id_commentaire', name: 'id_commentaire'})
    id_commentaire: string;

    @Column()
    date_du_like: string;
}
