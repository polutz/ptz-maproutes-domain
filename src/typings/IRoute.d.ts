interface IRoute extends IEntityBase {
    positions: IPosition[];
    starTime: Date;
    endTime: Date;
    compareRoute(otherRoute: IRoute): IPosition[];
    
}

interface IRouteArgs extends IEntityBaseArgs {
    positions: IPosition[];
    starTime: Date;
    endTime: Date;
}