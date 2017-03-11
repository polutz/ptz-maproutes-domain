interface IPosition {
    latitude: number;
    longitude: number;
    time: Date;
    isValid():boolean;
}

interface IPositionArgs {
    latitude: number;
    longitude: number;
    time: Date;
}