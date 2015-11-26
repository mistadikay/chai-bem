import bemNamingFactory from 'bem-naming';

import {
    prepareClassName
} from './utils';

export default function(options) {
    // defaults options:
    // {
    //     elem: '_',
    //     mod: '__'
    //     wordPattern: '[a-z0-9]+(?:-[a-z0-9]+)*'
    // }
    const bemNaming = bemNamingFactory(options);

    return function(chai) {
        const { Assertion } = chai;
        const { typeOf, isTrue } = chai.assert;

        Assertion.addMethod('block', function(blockName) {
            const className = this._obj;

            // check input
            typeOf(blockName, 'string');
            typeOf(className, 'string');

            const preparedClassName = prepareClassName(className);

            // actual assertion
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

            // check input
            typeOf(bemjson, 'object');
            typeOf(className, 'string');

            const preparedClassName = prepareClassName(className);

            // check if there is at least one valid element
            isTrue(
                preparedClassName.some(item => bemNaming.isElem(item)),
                `there is no valid element in ${className}`
            );

            // actual assertion
            this.assert(
                preparedClassName.some(item => {
                    const parsedItem = bemNaming.parse(item);

                    return (
                        parsedItem.block === bemjson.block &&
                        parsedItem.elem === bemjson.elem
                    );
                }),
                'expected #{this} to be an elem #{exp} but got #{act}',
                'expected #{this} to not be an elem of #{exp} block, but got #{act}',
                bemjson,
                className
            );
        });
    };
}
