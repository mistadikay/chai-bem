import bemNamingFactory from 'bem-naming';

import {
    prepareClassName,
    paramTypeAssert,
    targetTypeAssert
} from './utils';

const bemNaming = bemNamingFactory({
    // elem: '_',
    // mod: '__'
    // wordPattern: '[a-z0-9]+(?:-[a-z0-9]+)*'
});

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

    Assertion.addMethod('elem', function(bemjson) {
        const className = this._obj;
        const preparedClassName = prepareClassName(className);
        const parsedClassName = bemNaming.parse(className);

        // validate input
        this::paramTypeAssert(bemjson, 'object');
        this::targetTypeAssert(className, 'string');

        this.assert(
            preparedClassName.some(item => bemNaming.isElem(item)),
            'expected #{this} to be an element, got #{act}',
            'expected #{this} to be an element, got #{act}',
            bemjson,
            className
        );

        this.assert(
            preparedClassName.some(item => {
                return bemNaming.parse(item).elem === bemjson.elem;
            }),
            'expected #{this} to be an elem #{exp} but got #{act}',
            'expected #{this} to not be an elem of #{act} block',
            bemjson,
            className
        );
    });
}
