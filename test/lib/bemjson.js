import { expect } from 'chai';
import { runTests } from '../helpers';

describe('bemjson', function() {
    runTests(function(DOMElement) {
        describe('positives', function() {
            it('block', function() {
                expect(DOMElement(
                    'input'
                )).to.be.bem({
                    block: 'input'
                });
            });

            it('elem', function() {
                expect(DOMElement(
                    'input__control'
                )).to.be.bem({
                    block: 'input',
                    elem: 'control'
                });
            });

            it('block single mod', function() {
                expect(DOMElement(
                    'input input_focused'
                )).to.be.bem({
                    block: 'input',
                    mods: {
                        focused: true
                    }
                });
            });

            it('block multi mods', function() {
                expect(DOMElement(
                    'input input_focused input_color_black'
                )).to.be.bem({
                    block: 'input',
                    mods: {
                        focused: true,
                        color: 'black'
                    }
                });
            });

            it('elem single mod', function() {
                expect(DOMElement(
                    'input__control input__control_focused'
                )).to.be.bem({
                    block: 'input',
                    elem: 'control',
                    mods: {
                        focused: true
                    }
                });
            });

            it('elem multi mods', function() {
                expect(DOMElement(
                    'input__control input__control_focused input__control_color_red'
                )).to.be.bem({
                    block: 'input',
                    elem: 'control',
                    mods: {
                        focused: true,
                        color: 'red'
                    }
                });
            });

            it('mix', function() {
                expect(DOMElement(
                    'input stuff__yo'
                )).to.be.bem({
                    block: 'input',
                    mix: {
                        block: 'stuff',
                        elem: 'yo'
                    }
                });
            });

            it('mix with mods', function() {
                expect(DOMElement(
                    'input stuff__yo stuff__yo_focused'
                )).to.be.bem({
                    block: 'input',
                    mix: {
                        block: 'stuff',
                        elem: 'yo',
                        mods: {
                            focused: true
                        }
                    }
                });
            });

            it('multi mix', function() {
                expect(DOMElement(
                    'input random stuff__yo'
                )).to.be.bem({
                    block: 'input',
                    mix: [
                        {
                            block: 'random'
                        },
                        {
                            block: 'stuff',
                            elem: 'yo'
                        }
                    ]
                });
            });
        });

        describe('negatives', function() {
            it('block', function() {
                expect(DOMElement(
                    'input__control'
                )).to.not.be.bem({
                    block: 'input'
                });
            });

            it('elem', function() {
                expect(DOMElement(
                    'input'
                )).to.not.be.bem({
                    block: 'input',
                    elem: 'control'
                });
            });

            it('block single mod', function() {
                expect(DOMElement(
                    'input input_hovered'
                )).to.not.be.bem({
                    block: 'input',
                    mods: {
                        focused: true
                    }
                });
            });

            it('block multi mods', function() {
                expect(DOMElement(
                    'input input_hovered input_color_black'
                )).to.not.be.bem({
                    block: 'input',
                    mods: {
                        focused: true,
                        color: 'black'
                    }
                });
            });

            it('elem single mod', function() {
                expect(DOMElement(
                    'input__control input__control_hovered'
                )).to.not.be.bem({
                    block: 'input',
                    elem: 'control',
                    mods: {
                        focused: true
                    }
                });
            });

            it('elem multi mods', function() {
                expect(DOMElement(
                    'input__control input__control_focused input__control_color_white'
                )).to.not.be.bem({
                    block: 'input',
                    elem: 'control',
                    mods: {
                        focused: true,
                        color: 'red'
                    }
                });
            });

            it('mix', function() {
                expect(DOMElement(
                    'input stuff__no'
                )).to.not.be.bem({
                    block: 'input',
                    mix: {
                        block: 'stuff',
                        elem: 'yo'
                    }
                });
            });

            it('mix with mods', function() {
                expect(DOMElement(
                    'input stuff__yo stuff__yo_hovered'
                )).to.not.be.bem({
                    block: 'input',
                    mix: {
                        block: 'stuff',
                        elem: 'yo',
                        mods: {
                            focused: true
                        }
                    }
                });
            });

            it('multi mix', function() {
                expect(DOMElement(
                    'input random stuff__no'
                )).to.not.be.bem({
                    block: 'input',
                    mix: [
                        {
                            block: 'random'
                        },
                        {
                            block: 'stuff',
                            elem: 'yo'
                        }
                    ]
                });
            });
        });

        describe('errors', function() {
            it('bemjson', function() {
                expect(function() {
                    expect(DOMElement(
                        'input'
                    )).to.be.bem('wat');
                }).to.throw(Error);
            });

            it('block', function() {
                expect(function() {
                    expect(DOMElement(
                        'input'
                    )).to.be.bem({
                        block: null
                    });
                }).to.throw(Error);
            });

            it('elem', function() {
                expect(function() {
                    expect(DOMElement(
                        'input'
                    )).to.be.bem({
                        block: 'input',
                        elem: null
                    });
                }).to.throw(Error);
            });

            it('mods', function() {
                expect(function() {
                    expect(DOMElement(
                        'input'
                    )).to.be.bem({
                        block: 'input',
                        mods: null
                    });
                }).to.throw(Error);
            });

            it('mix', function() {
                expect(function() {
                    expect(DOMElement(
                        'input'
                    )).to.be.bem({
                        block: 'input',
                        mix: null
                    });
                }).to.throw(Error);
            });

            it('block in mix', function() {
                expect(function() {
                    expect(DOMElement(
                        'input'
                    )).to.be.bem({
                        block: 'input',
                        mix: {}
                    });
                }).to.throw(Error);
            });
        });
    });
});
