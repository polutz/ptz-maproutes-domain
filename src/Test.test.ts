import { equal, ok } from 'ptz-assert';
import Test from './Test';

// This are some tests examples
describe('Test', () => {

    describe('newPropTest', () => {
        it('set', () => {
            // 1) Arrange
            var args = { newPropTest: 'teste-value' };
            var test = new Test(args);

            // 2) Act
            test.isValid();

            // 3) Assert
            equal(args.newPropTest, test.newPropTest);
        });
    });

    describe('funcTest', () => {
        it('returns true', () => {
            // 1) Arrange
            var test = new Test({});

            // 2) Act
            var result = test.funcTest();

            // 3) Assert
            ok(result);
        });
    });
});
