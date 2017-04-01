import { IEntityBase, IEntityBaseArgs } from 'ptz-core-domain';
import { IPosition, IPositionArgs } from './IPosition'

export interface IRoute extends IEntityBase {
    positions: IPosition[];
    starTime: Date;
    endTime: Date;
    compareRoute(otherRoute: IRoute): IPosition[];

}

export interface IRouteArgs extends IEntityBaseArgs {
    positions: IPosition[];
    starTime: Date;
    endTime: Date;
}