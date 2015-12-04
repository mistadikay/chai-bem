import {
    prepareClassName,
    isClassName,
    isDOMElement
} from './utils';

export function elemProperty(bemNaming, chai) {
    const { isTrue } = chai.assert;

    return function() {
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
    };
}

export function elemMethod(bemNaming, chai) {
    const { typeOf, isTrue } = chai.assert;

    return function(bemjson) {
        const entity = this._obj;

        // check input
        isTrue(
            isClassName(entity) || isDOMElement(entity),
            `${entity} is neither a DOM element nor a className`
        );
        typeOf(bemjson, 'object');

        // retrieve and prepare className
        const className = prepareClassName(entity);

        // check element
        this.assert(
            className.some(item => {
                // ignore if not element
                if (!bemNaming.isElem(item)) {
                    return false;
                }

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
    };
}