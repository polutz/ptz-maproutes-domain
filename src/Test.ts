import {EntityBase} from 'ptz-core-domain';
import { ITest, ITestArgs } from './ITest';

export default class Test extends EntityBase implements ITest {

    newPropTest: string;

    constructor(args: ITestArgs) {
        super(args);

        // Map your props:
        this.newPropTest = args.newPropTest;
    }

    funcTest(): boolean {
        return true;
    }
}
