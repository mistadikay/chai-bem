import {
    prepareClassName,
    isValidEntity,
    getEntitiesFromBEMJSON
} from './utils';

function validateBEMJSON(bemjson, entity, bemNaming) {
    // retrieve and prepare className
    const className = prepareClassName(entity);

    // retrieve entities
    const entities = getEntitiesFromBEMJSON(bemjson);

    const isValidBlocks = entities.blocks.every(blockName => {
        return className.some(item => {
            // ignore if not block
            if (!bemNaming.isBlock(item)) {
                return false;
            }

            const parsedItem = bemNaming.parse(item);

            return parsedItem.block === blockName;
        });
    });

    if (!isValidBlocks) {
        return false;
    }

    const isValidElems = entities.elems.every(bemjsonEntity => {
        return className.some(item => {
            // ignore if not element
            if (!bemNaming.isElem(item)) {
                return false;
            }

            const parsedItem = bemNaming.parse(item);

            return (
                parsedItem.block === bemjsonEntity.block &&
                parsedItem.elem === bemjsonEntity.elem
            );
        });
    });

    if (!isValidElems) {
        return false;
    }

    const isValidMods = entities.mods.every(bemjsonEntity => {
        const { block, elem, modName } = bemjsonEntity;
        const modVal = String(bemjsonEntity.modVal);

        return className.some(item => {
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
        });
    });

    return isValidMods;
}

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

        this.assert(
            validateBEMJSON(bemjson, entity, bemNaming),
            `expected #{this} to be #{exp} bemjson`,
            `expected #{this} to not be #{exp} bemjson`,
            bemjson,
            entity
        );
    };
}
