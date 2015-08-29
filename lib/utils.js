export function prepareClassName(className) {
    return className.trim().split(/\s+/);
}

export function paramTypeAssert(blockName, type) {
    this.assert(
        typeof blockName === type,
        'expected #{this} to be tested against #{exp}, got #{act} instead',
        'expected #{this} to be tested against #{exp}, got #{act} instead',
        type,
        blockName
    );
}

export function targetTypeAssert(blockName, type) {
    this.assert(
        typeof blockName === type,
        'expected #{this} to be #{exp}, got #{act} instead',
        'expected #{this} to be #{exp}, got #{act} instead',
        type,
        blockName
    );
}
