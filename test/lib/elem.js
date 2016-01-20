import { expect } from 'chai';
import { runTests } from '../helpers';

describe('elem', function() {
    runTests(function(DOMElement) {
        describe('property', function() {
            describe('positives', function() {
                it('simple', function() {
                    expect(DOMElement('input__control')).to.be.a.validElem;
                });

                it('within a mix', function() {
                    expect(DOMElement('input sidebar__input')).to.be.a.validElem;
                });
            });

            describe('negatives', function() {
                it('simple', function() {
                    expect(DOMElement('input')).to.not.be.a.validElem;
                });

                it('no className', function() {
                    expect(DOMElement('')).to.not.be.a.validElem;
                });
            });
        });

        describe('method', function() {
            describe('positives', function() {
                it('simple', function() {
                    expect(DOMElement('input__control')).to.be.an.elem({
                        block: 'input',
                        elem: 'control'
                    });
                });

                it('within a mix', function() {
                    expect(DOMElement('input sidebar__input')).to.be.an.elem({
                        block: 'sidebar',
                        elem: 'input'
                    });
                });
            });

            describe('negatives', function() {
                it('simple', function() {
                    expect(DOMElement('input__control')).to.not.be.an.elem({
                        block: 'input',
                        elem: 'icon'
                    });
                });

                it('within a mix', function() {
                    expect(DOMElement('input sidebar__input')).to.not.be.an.elem({
                        block: 'content',
                        elem: 'input'
                    });
                });

                it('no className', function() {
                    expect(DOMElement('')).to.not.be.an.elem({
                        block: 'content',
                        elem: 'input'
                    });
                });
            });
        });
    });
});
