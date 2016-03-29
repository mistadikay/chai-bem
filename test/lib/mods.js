import { expect } from 'chai';
import { runTests } from '../helpers';

describe('mods', function() {
    runTests(function(DOMElement) {
        describe('method', function() {
            describe('positives', function() {
                it('simple', function() {
                    expect(DOMElement('sidebar sidebar_color_dark')).to.have.mods({
                        color: 'dark'
                    });
                });

                it('boolean', function() {
                    expect(DOMElement('menu menu_visible')).to.have.mods({
                        visible: true
                    });
                });

                it('boolean explicit', function() {
                    expect(DOMElement('menu menu_visible_true')).to.have.mods({
                        visible: true
                    });
                });

                it('elem', function() {
                    expect(DOMElement('menu__item menu__item_size_big')).to.have.mods({
                        size: 'big'
                    });
                });

                it('multi mods', function() {
                    expect(DOMElement('menu__it menu__it_size_big menu__it_visible')).to.have.mods({
                        size: 'big',
                        visible: true
                    });
                });
            });

            describe('negatives', function() {
                it('simple', function() {
                    expect(DOMElement('sidebar sidebar_color_white')).to.not.have.mods({
                        color: 'dark'
                    });
                });

                it('boolean', function() {
                    expect(DOMElement('menu menu_hidden')).to.not.have.mods({
                        visible: true
                    });
                });

                it('boolean explicit', function() {
                    expect(DOMElement('menu menu_visible_false')).to.not.have.mods({
                        visible: true
                    });
                });

                it('elem', function() {
                    expect(DOMElement('menu__item menu__item_size_small')).to.not.have.mods({
                        size: 'big'
                    });
                });

                it('multi mods', function() {
                    expect(DOMElement('menu__item menu__item_visible')).to.not.have.mods({
                        size: 'big',
                        visible: true
                    });
                });

                it('no className', function() {
                    expect(DOMElement('')).to.not.have.mods({
                        size: 'big',
                        visible: true
                    });
                });
            });
        });
    });
});
