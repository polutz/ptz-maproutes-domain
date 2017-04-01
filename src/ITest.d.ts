import { IEntityBase, IEntityBaseArgs } from 'ptz-core-domain';

export interface ITest extends IEntityBase {
    newPropTest?: string;
    funcTest(): boolean;
}

export interface ITestArgs extends IEntityBaseArgs {
    newPropTest?: string;
}
