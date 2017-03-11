export default class Position implements IPosition {
    latitude: number;
    longitude: number;
    time: Date;

    constructor(args: IPositionArgs) { }
    isValid() {
        return null;
    }
}