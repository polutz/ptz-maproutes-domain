'use strict';

var _Route = require('./Route');

var _Route2 = _interopRequireDefault(_Route);

var _errors = require('./errors');

var _errors2 = _interopRequireDefault(_errors);

var _Position = require('./Position');

var _Position2 = _interopRequireDefault(_Position);

var _ptzAssert = require('ptz-assert');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Route', function () {
    describe('Position', function () {
        it('Should add error when positions are empty', function () {
            var route = new _Route2.default({
                positions: [],
                starTime: new Date(),
                endTime: new Date()
            });
            console.log('--------->', route);
            (0, _ptzAssert.contains)(route.errors, _errors2.default.ERROR_ROUTE_POSITIONS_EMPTY);
        });
        it('Should set positions', function () {
            var routeArgs = {
                positions: [],
                starTime: new Date(),
                endTime: new Date()
            };
            var route = new _Route2.default(routeArgs);
            (0, _ptzAssert.equal)(routeArgs.positions, route.positions);
        });
    });
    describe('StartTime', function () {
        it('Should add error when starTime is null', function () {
            var route = new _Route2.default({
                positions: [],
                starTime: null,
                endTime: new Date()
            });
            (0, _ptzAssert.contains)(route.errors, _errors2.default.ERROR_ROUTE_STARTTIME_REQUIRED);
        });
        it('Should set start time', function () {
            var routeArgs = {
                positions: [],
                starTime: new Date(),
                endTime: new Date()
            };
            var route = new _Route2.default(routeArgs);
            (0, _ptzAssert.equal)(routeArgs.starTime, route.starTime);
        });
    });
    describe('EndTime', function () {
        it('Should add error when end time is null', function () {
            var route = new _Route2.default({
                positions: [],
                starTime: new Date(),
                endTime: null
            });
            (0, _ptzAssert.contains)(route.errors, _errors2.default.ERROR_ROUTE_ENDTIME_REQUIRED);
        });
        it('Should set end time', function () {
            var routeArgs = {
                positions: [],
                starTime: new Date(),
                endTime: new Date()
            };
            var route = new _Route2.default(routeArgs);
            (0, _ptzAssert.equal)(routeArgs.endTime, route.endTime);
        });
        it('Should add error when endtime before startTime', function () {
            var route = new _Route2.default({
                positions: [],
                starTime: new Date('2017-03-01 13:00:00'),
                endTime: new Date('2017-03-01 12:00:00')
            });
            (0, _ptzAssert.contains)(route.errors, _errors2.default.ERROR_ROUTE_ENDTIME_BEFORE_STARTTIME);
        });
    });
    describe('Compare', function () {
        var position = new _Position2.default({
            latitude: -23.520120000000002,
            longitude: -46.84301000000001,
            time: new Date()
        });
        var position2 = new _Position2.default({
            latitude: -23.51882,
            longitude: -46.859100000000005,
            time: new Date()
        });
        var position3 = new _Position2.default({
            latitude: -23.518860000000004,
            longitude: -46.85873,
            time: new Date()
        });
        it('No positions match', function () {
            var route = new _Route2.default({
                positions: [position, position2],
                starTime: new Date(),
                endTime: new Date()
            });
            var otherRoute = new _Route2.default({
                positions: [position3],
                starTime: new Date(),
                endTime: new Date()
            });
            var matchPositions = route.compareRoute(otherRoute);
            (0, _ptzAssert.emptyArray)(matchPositions);
        });
        it('One position match', function () {
            var route = new _Route2.default({
                positions: [position, position2],
                starTime: new Date(),
                endTime: new Date()
            });
            var otherRoute = new _Route2.default({
                positions: [position2, position3],
                starTime: new Date(),
                endTime: new Date()
            });
            var matchPositions = route.compareRoute(otherRoute);
            (0, _ptzAssert.contains)(matchPositions, position2);
        });
    });
});