import {
    prepareClassName,
    isClassName,
    isDOMElement
} from './utils';

export function modsMethod(bemNaming, chai) {
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

        // check mods
        const mods = Object.keys(bemjson);
        const modWord = 'modificator' + (mods.length === 1 ? '' : 's');

        this.assert(
            mods.every(modName => {
                // parsing to string to handle boolean and numeric mod values
                const modVal = String(bemjson[modName]);

                return className.some(item => {
                    // ignore if no mods
                    if (!bemNaming.isBlockMod(item) && !bemNaming.isElemMod(item)) {
                        return false;
                    }

                    const parsedItem = bemNaming.parse(item);

                    return (
                        parsedItem.modName === modName &&
                        String(parsedItem.modVal) === modVal
                    );
                });
            }),
            `expected #{this} to have #{exp} ${modWord}`,
            `expected #{this} to not have #{exp} ${modWord}`,
            bemjson,
            entity
        );
    };
}
