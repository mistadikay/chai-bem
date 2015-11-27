import { expect } from 'chai';
import { runTests } from '../helpers';

describe('mods', function() {
    runTests(function(DOMElement) {
        describe('method', function() {
            describe('passes', function() {
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
                        expect(DOMElement('menu__item menu__item_size_big menu__item_visible')).to.have.mods({
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
                });
            });

            describe('throws error', function() {
                describe('positives', function() {
                    it('simple', function() {
                        expect(function() {
                            expect(DOMElement('sidebar sidebar_color_white')).to.have.mods({
                                color: 'dark'
                            });
                        }).to.throw(Error);
                    });

                    it('boolean', function() {
                        expect(function() {
                            expect(DOMElement('menu menu_hidden')).to.have.mods({
                                visible: true
                            });
                        }).to.throw(Error);
                    });

                    it('boolean explicit', function() {
                        expect(function() {
                            expect(DOMElement('menu menu_visible_false')).to.have.mods({
                                visible: true
                            });
                        }).to.throw(Error);
                    });

                    it('elem', function() {
                        expect(function() {
                            expect(DOMElement('menu__item menu__item_size_small')).to.have.mods({
                                size: 'big'
                            });
                        }).to.throw(Error);
                    });

                    it('multi mods', function() {
                        expect(function() {
                            expect(DOMElement('menu__item menu__item_size_small')).to.have.mods({
                                size: 'small',
                                visible: true
                            });
                        }).to.throw(Error);
                    });
                });

                describe('negatives', function() {
                    it('simple', function() {
                        expect(function() {
                            expect(DOMElement('sidebar sidebar_color_dark')).to.not.have.mods({
                                color: 'dark'
                            });
                        }).to.throw(Error);
                    });

                    it('boolean', function() {
                        expect(function() {
                            expect(DOMElement('menu menu_visible')).to.not.have.mods({
                                visible: true
                            });
                        }).to.throw(Error);
                    });

                    it('boolean explicit', function() {
                        expect(function() {
                            expect(DOMElement('menu menu_visible_true')).to.not.have.mods({
                                visible: true
                            });
                        }).to.throw(Error);
                    });

                    it('elem', function() {
                        expect(function() {
                            expect(DOMElement('menu__item menu__item_size_big')).to.not.have.mods({
                                size: 'big'
                            });
                        }).to.throw(Error);
                    });

                    it('multi mods', function() {
                        expect(function() {
                            expect(DOMElement('menu__item menu__item_size_small menu__item_visible')).to.not.have.mods({
                                size: 'small',
                                visible: true
                            });
                        }).to.throw(Error);
                    });
                });
            });
        });
    });
});
