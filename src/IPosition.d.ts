import { IEntityBase, IEntityBaseArgs } from 'ptz-core-domain';

export interface IPosition extends IEntityBase {
    latitude: number;
    longitude: number;
    time: Date;
    validate(): boolean;
}

export interface IPositionArgs extends IEntityBaseArgs {
    latitude: number;
    longitude: number;
    time: Date;
}