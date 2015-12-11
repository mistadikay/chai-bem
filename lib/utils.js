import isPlainObject from 'lodash.isplainobject';

function createEntitiesAggregator(entities) {
    return function(bemjson) {
        if (isPlainObject(bemjson)) {
            if ('block' in bemjson) {
                if (typeof bemjson.block !== 'string') {
                    throw Error(`block in ${bemjson} should be a string`);
                }

                const basicEntity = {
                    block: bemjson.block
                };

                if ('elem' in bemjson) {
                    if (typeof bemjson.elem !== 'string') {
                        throw Error(`elem in ${bemjson} should be a string`);
                    }

                    basicEntity.elem = bemjson.elem;

                    entities.elems.push({
                        block: bemjson.block,
                        elem: bemjson.elem
                    });
                } else {
                    entities.blocks.push(bemjson.block);
                }

                // mods
                if ('mods' in bemjson) {
                    if (!isPlainObject(bemjson.mods)) {
                        throw Error(`mods in ${bemjson} should be a plain object`);
                    }

                    Object.keys(bemjson.mods).forEach(modName => {
                        entities.mods.push({
                            ...basicEntity,
                            modName,
                            modVal: bemjson.mods[modName]
                        });
                    });
                }
            } else {
                throw Error(`there are no valid BEM entities in ${bemjson}`);
            }
        } else {
            throw Error(`expected ${bemjson} to be a plain BEMJSON object`);
        }
    };
}

export function prepareClassName(element) {
    const className = isClassName(element) ? element : element.className;

    return className.trim().split(/\s+/);
}

export function isClassName(element) {
    return typeof element === 'string';
}

export function isDOMElement(element) {
    return typeof element === 'object' && element !== null && 'nodeType' in element && element.nodeType === 1;
}

export function getEntitiesFromBEMJSON(bemjson) {
    const entities = {
        blocks: [],
        elems: [],
        mods: []
    };
    const fillEntitiesFrom = createEntitiesAggregator(entities);

    fillEntitiesFrom(bemjson);

    if ('mix' in bemjson) {
        if (Array.isArray(bemjson.mix)) {
            bemjson.mix.forEach(fillEntitiesFrom);
        } else {
            fillEntitiesFrom(bemjson.mix);
        }
    }

    return entities;
}
