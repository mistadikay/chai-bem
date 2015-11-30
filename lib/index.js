import bemNamingFactory from 'bem-naming';

import { blockMethod, blockProperty } from './block';
import { elemMethod, elemProperty } from './elem';
import { modsMethod } from './mods';

export default function(options) {
    // default options:
    // {
    //     elem: '_',
    //     mod: '__'
    //     wordPattern: '[a-z0-9]+(?:-[a-z0-9]+)*'
    // }
    const bemNaming = bemNamingFactory(options);

    return function(chai) {
        const { Assertion } = chai;

        Assertion.addProperty('validBlock', blockProperty(bemNaming, chai));
        Assertion.addProperty('validElem', elemProperty(bemNaming, chai));
        Assertion.addMethod('block', blockMethod(bemNaming, chai));
        Assertion.addMethod('elem', elemMethod(bemNaming, chai));
        Assertion.addMethod('mods', modsMethod(bemNaming, chai));
        Assertion.addMethod('bem', bemjsonMethod(bemNaming, chai));
    };
}
