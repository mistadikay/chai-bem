import bemNamingFactory from 'bem-naming';

import { blockMethod, blockProperty } from './block';
import { elemMethod, elemProperty } from './elem';
import { modsMethod } from './mods';
import { bemjsonMethod } from './bemjson';

const defaultEntityHook = entity => entity;

export default function(options = {}) {
    // default options:
    // {
    //     elem: '_',
    //     mod: '__',
    //     wordPattern: '[a-z0-9]+(?:-[a-z0-9]+)*'
    // }
    const bemNaming = bemNamingFactory(options);
    const entityHook = options.entityHook || defaultEntityHook;

    return function(chai) {
        const { Assertion } = chai;

        Assertion.addProperty('validBlock', blockProperty(bemNaming, chai, entityHook));
        Assertion.addProperty('validElem', elemProperty(bemNaming, chai, entityHook));
        Assertion.addMethod('block', blockMethod(bemNaming, chai, entityHook));
        Assertion.addMethod('elem', elemMethod(bemNaming, chai, entityHook));
        Assertion.addMethod('mods', modsMethod(bemNaming, chai, entityHook));
        Assertion.addMethod('bem', bemjsonMethod(bemNaming, chai, entityHook));
        Assertion.addMethod('bemjson', bemjsonMethod(bemNaming, chai, entityHook));
    };
}
