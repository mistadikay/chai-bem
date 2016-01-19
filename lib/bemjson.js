import {
    prepareClassName,
    isValidEntity,
    getEntitiesFromBEMJSON
} from './utils';

export function bemjsonMethod(bemNaming, chai, entityHook) {
    const { assert } = chai;
    const { typeOf } = assert;

    return function(bemjson) {
        const entity = entityHook(this._obj);

        // check input
        assert(
            isValidEntity(entity),
            `${entity} is neither a DOM element nor a className`
        );
        typeOf(bemjson, 'object');

        // retrieve and prepare className
        const className = prepareClassName(entity);

        // retrieve entities
        const entities = getEntitiesFromBEMJSON(bemjson);

        // check blocks
        entities.blocks.forEach(blockName => {
            this.assert(
                className.indexOf(blockName) !== -1,
                'expected #{this} to be #{exp} block but got #{act}',
                'expected #{this} to not be #{exp} block but got #{act}',
                blockName,
                entity
            );
        });

        // check elems
        entities.elems.forEach(bemjsonEntity => {
            // check all elements
            this.assert(
                className.some(item => {
                    // ignore if not element
                    if (!bemNaming.isElem(item)) {
                        return false;
                    }

                    const parsedItem = bemNaming.parse(item);

                    return (
                        parsedItem.block === bemjsonEntity.block &&
                        parsedItem.elem === bemjsonEntity.elem
                    );
                }),
                'expected #{this} to be an elem #{exp} but got #{act}',
                'expected #{this} to not be an elem of #{exp} block, but got #{act}',
                bemjsonEntity,
                entity
            );
        });

        // check mods
        entities.mods.forEach(bemjsonEntity => {
            const { block, elem, modName } = bemjsonEntity;
            const modVal = String(bemjsonEntity.modVal);

            this.assert(
                className.some(item => {
                    // ignore if no mods
                    if (!bemNaming.isBlockMod(item) && !bemNaming.isElemMod(item)) {
                        return false;
                    }

                    const parsedItem = bemNaming.parse(item);

                    return (
                        parsedItem.block === block &&
                        parsedItem.elem === elem &&
                        parsedItem.modName === modName &&
                        String(parsedItem.modVal) === modVal
                    );
                }),
                `expected #{this} to have #{exp} modificator`,
                `expected #{this} to not have #{exp} modificator`,
                bemjsonEntity,
                entity
            );
        });
    };
}
