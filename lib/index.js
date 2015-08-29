import {
    prepareClassName,
    paramTypeAssert,
    targetTypeAssert
} from './utils';

export default function(chai, utils) {
    const { Assertion } = chai;

    Assertion.addMethod('block', function(blockName) {
        const className = this._obj;
        const preparedClassName = prepareClassName(className);

        // validate input
        this::paramTypeAssert(blockName, 'string');
        this::targetTypeAssert(className, 'string');

        this.assert(
            preparedClassName.indexOf(blockName) !== -1,
            'expected #{this} to be #{exp} block but got #{act}',
            'expected #{this} to not be #{exp} block but got #{act}',
            blockName,
            className
        );
    });
}
