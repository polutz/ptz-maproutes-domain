import { IPosition, IPositionArgs } from './IPosition';
import { EntityBase } from 'ptz-core-domain';

export default class Position extends EntityBase implements IPosition {
    latitude: number;
    longitude: number;
    time: Date;

    constructor(args: IPositionArgs) {

        super(args);

        this.latitude = args.latitude;
        this.longitude = args.longitude;
        this.time = args.time;
    }
    isValid() {
        return null;
    }
}