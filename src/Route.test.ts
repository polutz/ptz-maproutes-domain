import Route from './Route';
import errors from './errors';
import Position from './Position';
import { contains, equal, emptyArray } from 'ptz-assert';

describe('Route', () => {
    describe('Position', () => {
        it('Should add error when positions are empty', () => {
            var route = new Route({
                positions: [],
                starTime: new Date(),
                endTime: new Date()
            });
            contains(route.errors, errors.ERROR_ROUTE_POSITIONS_EMPTY);
        });
        it('Should set positions', () => {
            var routeArgs = {
                positions: [],
                starTime: new Date(),
                endTime: new Date()
            };
            var route = new Route(routeArgs);

            equal(routeArgs.positions, route.positions);
        });
    });

    describe('StartTime', () => {
        it('Should add error when starTime is null', () => {
            var route = new Route({
                positions: [],
                starTime: null,
                endTime: new Date()
            });

            contains(route.errors, errors.ERROR_ROUTE_STARTTIME_REQUIRED);
        });

        it('Should set start time', () => {
            var routeArgs = {
                positions: [],
                starTime: new Date(),
                endTime: new Date()
            };
            var route = new Route(routeArgs);

            equal(routeArgs.starTime, route.starTime);
        });
    });

    describe('EndTime', () => {
        it('Should add error when end time is null', () => {
            var route = new Route({
                positions: [],
                starTime: new Date(),
                endTime: null
            });

            contains(route.errors, errors.ERROR_ROUTE_ENDTIME_REQUIRED);
        });
        it('Should set end time', () => {

            var routeArgs = {
                positions: [],
                starTime: new Date(),
                endTime: new Date()
            };
            var route = new Route(routeArgs);

            equal(routeArgs.endTime, route.endTime);
        });

        it('Should add error when endtime before startTime', () => {
            var route = new Route({
                positions: [],
                starTime: new Date('2017-03-01 13:00:00'),
                endTime: new Date('2017-03-01 12:00:00')
            });

            contains(route.errors, errors.ERROR_ROUTE_ENDTIME_BEFORE_STARTTIME);
        })
    });

    describe('Compare', () => {
        var position = new Position({
            latitude: -23.520120000000002,
            longitude: -46.84301000000001,
            time: new Date()
        });
        var position2 = new Position({
            latitude: -23.51882,
            longitude: -46.859100000000005,
            time: new Date()
        });
        var position3 = new Position({
            latitude: -23.518860000000004,
            longitude: -46.85873,
            time: new Date()
        });

        it('No positions match', () => {
            var route = new Route({
                positions: [position, position2],
                starTime: new Date(),
                endTime: new Date()
            });
            var otherRoute = new Route({
                positions: [position3],
                starTime: new Date(),
                endTime: new Date()
            });
            var matchPositions = route.compareRoute(otherRoute);
            emptyArray(matchPositions);
        });

        it('One position match', () => {
            var route = new Route({
                positions: [position, position2],
                starTime: new Date(),
                endTime: new Date()
            });
            var otherRoute = new Route({
                positions: [position2, position3],
                starTime: new Date(),
                endTime: new Date()
            });
            var matchPositions = route.compareRoute(otherRoute);
            contains(matchPositions, position2);
        });
    });
});
// (-23.518860000000004, -46.85873),(-23.51882, -46.859100000000005),(-23.518790000000003, -46.85962000000001),(-23.51883, -46.859660000000005),(-23.518880000000003, -46.85969),(-23.51892, -46.8597