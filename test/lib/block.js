import { expect } from 'chai';
import { runTests } from '../helpers';

describe('block', function() {
    runTests(function(DOMElement) {
        describe('property', function() {
            describe('positives', function() {
                it('simple', function() {
                    expect(DOMElement('input')).to.be.a.validBlock;
                });

                it('with mod', function() {
                    expect(DOMElement('input_focused input')).to.be.a.validBlock;
                });
            });

            describe('negatives', function() {
                it('element', function() {
                    expect(DOMElement('button__icon_type_search')).to.not.be.a.validBlock;
                });

                it('with mod', function() {
                    expect(DOMElement('button_big')).to.not.be.a.validBlock;
                });
            });
        });

        describe('method', function() {
            describe('positives', function() {
                it('simple', function() {
                    expect(DOMElement('input')).to.be.a.block('input');
                });

                it('with mod', function() {
                    expect(DOMElement('input_focused input')).to.be.a.block('input');
                });
            });

            describe('negatives', function() {
                it('simple', function() {
                    expect(DOMElement('button')).to.not.be.a.block('input');
                });

                it('with mod', function() {
                    expect(DOMElement('button_focused button')).to.not.be.a.block('input');
                });
            });
        });
    });
});
