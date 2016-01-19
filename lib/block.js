import {
    prepareClassName,
    isValidEntity
} from './utils';

export function blockProperty(bemNaming, chai, entityHook) {
    const { assert } = chai;

    return function() {
        const entity = entityHook(this._obj);

        // check input
        assert(
            isValidEntity(entity),
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

export function blockMethod(bemNaming, chai, entityHook) {
    const { assert } = chai;
    const { typeOf } = assert;

    return function(blockName) {
        const entity = entityHook(this._obj);

        // check input
        assert(
            isValidEntity(entity),
            `${entity} is neither a DOM element nor a className`
        );
        typeOf(blockName, 'string');

        // retrieve and prepare className
        const className = prepareClassName(entity);

        // check if there is at least one valid block
        assert(
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
