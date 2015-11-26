export function prepareClassName(element) {
    return (element.className || element).trim().split(/\s+/);
}

export function isClassName(element) {
    return typeof element === 'string';
}

export function isDOMElement(element) {
    return typeof element === 'object' && 'nodeType' in element && element.nodeType === 1;
}
