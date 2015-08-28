import { prepareClassName } from './utils';

export default function(chai, utils) {
    const { Assertion } = chai;

    Assertion.addMethod('block', function(blockName) {
        const obj = prepareClassName(this._obj);

        this.assert(
            obj.indexOf(blockName) !== -1,
            'expected #{this} to be a block #{exp} but got #{act}',
            'expected #{this} to not be a #{act} block',
            blockName,
            obj
        );
    });
}
