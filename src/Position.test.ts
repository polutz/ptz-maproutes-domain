import errors from './errors';
import Position from './Position';
import { contains, equal, emptyArray } from 'ptz-assert';

describe('Position', () => {
    describe('Latitude', () => {
        it('Should add error when latitude are empty', () => {
            var position = new Position({
                latitude: null,
                longitude: -46.84301000000001,
                time: new Date()
            });
            contains(position.errors, errors.ERROR_POSITION_LATITUDE_NULLORUNDEFINED);
        });
        it('Should add error when latitude are NaN', () => {
            var position = new Position({
                latitude: '215.546',
                longitude: -46.84301000000001,
                time: new Date()
            });
            contains(position.errors, errors.ERROR_POSITION_LATITUDE_NOTANUMBER);
        });
    });
    describe('Longitude', () => {
        it('Should add error when longitude are empty', () => {
            var position = new Position({
                latitude: -46.84301000000001,
                longitude: null,
                time: new Date()
            });
            contains(position.errors, errors.ERROR_POSITION_LONGITUDE_NULLORUNDEFINED);
        });
        it('Should add error when longitude are NaN', () => {
            var position = new Position({
                latitude: -46.84301000000001,
                longitude: '215.546',
                time: new Date()
            });
            contains(position.errors, errors.ERROR_POSITION_LONGITUDE_NOTANUMBER);
        });
    });
    describe('Time', () => {
        it('Should add error when time are empty', () => {
            var position = new Position({
                latitude: -46.84301000000001,
                longitude: -46.84301000000001,
                time: null
            });
            contains(position.errors, errors.ERROR_POSITION_TIME_REQUIRED);
        });
        it('Should add error when time is in the past', () => {
            var pastTime: Date = new Date('1968-11-16T00:00:00');
            var position = new Position({
                latitude: -46.84301000000001,
                longitude: -46.84301000000001,
                time: pastTime
            });
            contains(position.errors, errors.ERROR_POSITION_TIMEISINTHEPAST);
        });
    });
    describe('Validate', () => {
        it('Should return true when errors is empty', () => {
            var position = new Position({
                latitude: -46.84301000000001,
                longitude: -46.84301000000001,
                time: new Date()
            });
            position.errors = [];
            equal(position.validate(), true)
        });
        it('Should return false when errors is not empty', () => {
            var position = new Position({
                latitude: -46.84301000000001,
                longitude: -46.84301000000001,
                time: new Date()
            });
            position.errors = ['SOME_ERROR'];
            equal(position.validate(), false)
        });
    });
});