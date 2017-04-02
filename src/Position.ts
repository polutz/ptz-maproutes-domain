import { IPosition, IPositionArgs } from './IPosition';
import { errors } from './index';
import { EntityBase } from 'ptz-core-domain';
import { emptyArray } from 'ptz-assert';

export default class Position extends EntityBase implements IPosition {
    latitude: number;
    longitude: number;
    time: Date;

    constructor(args: IPositionArgs) {

        super(args);

        this.latitude = args.latitude;
        this.longitude = args.longitude;
        this.time = args.time;
        this.validate();
    }

    validate() {
        this.validateLatitude();
        this.validateLongitude();
        this.validateTime();

        if (this.errors && this.errors.length === 0)
            return true
        return false
    }

    validateLatitude() {
        if (!this.latitude || typeof (this.latitude) !== typeof (0))
            this.addError(errors.ERROR_POSITION_LATITUDE_NOTANUMBER);

        if (!this.latitude || this.latitude === null)
            this.addError(errors.ERROR_POSITION_LATITUDE_NULLORUNDEFINED);
    }

    validateLongitude() {
        if (!this.longitude || typeof (this.longitude) !== typeof (0))
            this.addError(errors.ERROR_POSITION_LONGITUDE_NOTANUMBER);

        if (!this.longitude || this.longitude === null)
            this.addError(errors.ERROR_POSITION_LONGITUDE_NULLORUNDEFINED);
    }

    validateTime() {
        if (!this.time)
            this.addError(errors.ERROR_POSITION_TIME_REQUIRED);

        if (this.time && this.time < new Date())
            this.addError(errors.ERROR_POSITION_TIMEISINTHEPAST);
    }
}