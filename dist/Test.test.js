'use strict';

var _ptzAssert = require('ptz-assert');

var _Test = require('./Test');

var _Test2 = _interopRequireDefault(_Test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Test', function () {
    describe('newPropTest', function () {
        it('set', function () {
            var args = { newPropTest: 'teste-value' };
            var test = new _Test2.default(args);
            test.isValid();
            (0, _ptzAssert.equal)(args.newPropTest, test.newPropTest);
        });
    });
    describe('funcTest', function () {
        it('returns true', function () {
            var test = new _Test2.default({});
            var result = test.funcTest();
            (0, _ptzAssert.ok)(result);
        });
    });
});