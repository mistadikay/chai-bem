function getClassNameFromString(className) {
    return className;
}

function getClassNameFromDOMElement(className, tagName = 'div') {
    const element = document.createElement(tagName);

    element.className = className;

    return element;
}

export function runTests(tests) {
    describe('className', function() {
        tests(getClassNameFromString);
    });

    describe('DOMelement', function() {
        tests(getClassNameFromDOMElement);
    });
}
