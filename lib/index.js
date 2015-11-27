import bemNamingFactory from 'bem-naming';

import {
    prepareClassName,
    isClassName,
    isDOMElement
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
            const entity = this._obj;

            // check input
            isTrue(
                isClassName(entity) || isDOMElement(entity),
                `${entity} is neither a DOM element nor a className`
            );
            typeOf(blockName, 'string');

            // retrieve and prepare className
            const className = prepareClassName(entity);

            // check block
            this.assert(
                className.indexOf(blockName) !== -1,
                'expected #{this} to be #{exp} block but got #{act}',
                'expected #{this} to not be #{exp} block but got #{act}',
                blockName,
                entity
            );
        });

        Assertion.addProperty('validBlock', function() {
            const entity = this._obj;

            // check input
            isTrue(
                isClassName(entity) || isDOMElement(entity),
                `${entity} is neither a DOM element nor a className`
            );

            // retrieve and prepare className
            const className = prepareClassName(entity);

            // check block
            this.assert(
                className.some(item => bemNaming.isBlock(item)),
                'expected #{this} to be a block but got #{act}',
                'expected #{this} to not be a block but got #{act}',
                entity,
                entity
            );
        });

        Assertion.addMethod('elem', function(bemjson) {
            const entity = this._obj;

            // check input
            isTrue(
                isClassName(entity) || isDOMElement(entity),
                `${entity} is neither a DOM element nor a className`
            );
            typeOf(bemjson, 'object');

            // retrieve and prepare className
            const preparedClassName = prepareClassName(entity);

            // check if there is at least one valid element
            isTrue(
                preparedClassName.some(item => bemNaming.isElem(item)),
                `there is no valid element in ${entity}`
            );

            // check element
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
                entity
            );
        });

        Assertion.addProperty('validElem', function() {
            const entity = this._obj;

            // check input
            isTrue(
                isClassName(entity) || isDOMElement(entity),
                `${entity} is neither a DOM element nor a className`
            );

            // retrieve and prepare className
            const className = prepareClassName(entity);

            // check block
            this.assert(
                className.some(item => bemNaming.isElem(item)),
                'expected #{this} to be an element but got #{act}',
                'expected #{this} to not be an element but got #{act}',
                entity,
                entity
            );
        });
    };
}
