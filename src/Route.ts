import { EntityBase } from 'ptz-core-domain';
import { errors } from './index';
import { IPosition } from './IPosition';
import { IRoute, IRouteArgs } from './IRoute';

export default class Route extends EntityBase implements IRoute {
    positions: IPosition[];
    starTime: Date;
    endTime: Date;

    constructor(args: IRouteArgs) {
        super(args);
        this.positions = args.positions;
        this.starTime = args.starTime;
        this.endTime = args.endTime;
        this.validate();

    }
    validate() {
        this.validatePositions();
        this.validateTime();
    }

    validatePositions() {
        if (!this.positions || this.positions.length == 0)
            this.addError(errors.ERROR_ROUTE_POSITIONS_EMPTY);
    }

    validateTime() {
        if (!this.starTime)
            this.addError(errors.ERROR_ROUTE_STARTTIME_REQUIRED);

        if (!this.endTime)
            this.addError(errors.ERROR_ROUTE_ENDTIME_REQUIRED);

        if (this.endTime <= this.starTime)
            this.addError(errors.ERROR_ROUTE_ENDTIME_BEFORE_STARTTIME);
    }

    compareRoute(otherRoute: IRoute): IPosition[] {
        var matchPositions = [];
        otherRoute.positions.map((pos) => {
            this.positions.map((thisPos) => {
                if (pos.latitude === thisPos.latitude && pos.longitude === thisPos.longitude)
                    matchPositions.push(pos);
            })
        })
        return matchPositions;
    }
};