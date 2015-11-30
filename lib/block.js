import {
    prepareClassName,
    isClassName,
    isDOMElement
} from './utils';

export function blockProperty(bemNaming, chai) {
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
            className.some(item => bemNaming.isBlock(item)),
            'expected #{this} to be a block but got #{act}',
            'expected #{this} to not be a block but got #{act}',
            entity,
            entity
        );
    };
}

export function blockMethod(bemNaming, chai) {
    const { typeOf, isTrue } = chai.assert;

    return function(blockName) {
        const entity = this._obj;

        // check input
        isTrue(
            isClassName(entity) || isDOMElement(entity),
            `${entity} is neither a DOM element nor a className`
        );
        typeOf(blockName, 'string');

        // retrieve and prepare className
        const className = prepareClassName(entity);

        // check if there is at least one valid block
        isTrue(
            className.some(item => bemNaming.isBlock(item)),
            `there is no valid block in ${entity}`
        );

        // check block
        this.assert(
            className.indexOf(blockName) !== -1,
            'expected #{this} to be #{exp} block but got #{act}',
            'expected #{this} to not be #{exp} block but got #{act}',
            blockName,
            entity
        );
    };
}
