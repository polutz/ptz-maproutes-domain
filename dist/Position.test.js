'use strict';

var _errors = require('./errors');

var _errors2 = _interopRequireDefault(_errors);

var _Position = require('./Position');

var _Position2 = _interopRequireDefault(_Position);

var _ptzAssert = require('ptz-assert');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Position', function () {
    describe('Latitude', function () {
        it('Should add error when latitude are empty', function () {
            var position = new _Position2.default({
                latitude: null,
                longitude: -46.84301000000001,
                time: new Date()
            });
            (0, _ptzAssert.contains)(position.errors, _errors2.default.ERROR_POSITION_LATITUDE_NULLORUNDEFINED);
        });
        it('Should add error when latitude are NaN', function () {
            var position = new _Position2.default({
                latitude: '215.546',
                longitude: -46.84301000000001,
                time: new Date()
            });
            (0, _ptzAssert.contains)(position.errors, _errors2.default.ERROR_POSITION_LATITUDE_NOTANUMBER);
        });
    });
    describe('Longitude', function () {
        it('Should add error when longitude are empty', function () {
            var position = new _Position2.default({
                latitude: -46.84301000000001,
                longitude: null,
                time: new Date()
            });
            (0, _ptzAssert.contains)(position.errors, _errors2.default.ERROR_POSITION_LONGITUDE_NULLORUNDEFINED);
        });
        it('Should add error when longitude are NaN', function () {
            var position = new _Position2.default({
                latitude: -46.84301000000001,
                longitude: '215.546',
                time: new Date()
            });
            (0, _ptzAssert.contains)(position.errors, _errors2.default.ERROR_POSITION_LONGITUDE_NOTANUMBER);
        });
    });
    describe('Time', function () {
        it('Should add error when time are empty', function () {
            var position = new _Position2.default({
                latitude: -46.84301000000001,
                longitude: -46.84301000000001,
                time: null
            });
            (0, _ptzAssert.contains)(position.errors, _errors2.default.ERROR_POSITION_TIME_REQUIRED);
        });
        it('Should add error when time is in the past', function () {
            var pastTime = new Date('1968-11-16T00:00:00');
            var position = new _Position2.default({
                latitude: -46.84301000000001,
                longitude: -46.84301000000001,
                time: pastTime
            });
            (0, _ptzAssert.contains)(position.errors, _errors2.default.ERROR_POSITION_TIMEISINTHEPAST);
        });
    });
    describe('Validate', function () {
        it('Should return true when errors is empty', function () {
            var position = new _Position2.default({
                latitude: -46.84301000000001,
                longitude: -46.84301000000001,
                time: new Date()
            });
            position.errors = [];
            (0, _ptzAssert.equal)(position.validate(), true);
        });
        it('Should return false when errors is not empty', function () {
            var position = new _Position2.default({
                latitude: -46.84301000000001,
                longitude: -46.84301000000001,
                time: new Date()
            });
            position.errors = ['SOME_ERROR'];
            (0, _ptzAssert.equal)(position.validate(), false);
        });
    });
});