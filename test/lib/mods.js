import { expect } from 'chai';
import { runTests } from '../helpers';

describe.skip('mods', function() {
    runTests(function(DOMElement) {
        describe('property', function() {
            describe('passes', function() {
                describe('positives', function() {
                    it('simple', function() {
                        expect(DOMElement('sidebar sidebar_color_dark')).to.have.mod;
                    });

                    it('boolean', function() {
                        expect(DOMElement('menu menu_visible')).to.have.mod;
                    });

                    it('boolean explicit', function() {
                        expect(DOMElement('menu menu_visible_true')).to.have.mod;
                    });

                    it('elem', function() {
                        expect(DOMElement('menu__item menu__item_size_big')).to.have.mod;
                    });
                });

                describe('negatives', function() {
                    it('simple', function() {
                        expect(DOMElement('sidebar')).to.not.have.mod;
                    });

                    it('within a mix', function() {
                        expect(DOMElement('menu sidebar__menu')).to.not.have.mod;
                    });

                    it('elem', function() {
                        expect(DOMElement('menu__item')).to.not.have.mod;
                    });
                });
            });

            describe('throws error', function() {
                describe('positives', function() {
                    it('simple', function() {
                        expect(function() {
                            expect(DOMElement('sidebar')).to.have.mod;
                        }).to.throw(Error);
                    });

                    it('within a mix', function() {
                        expect(function() {
                            expect(DOMElement('menu sidebar__menu')).to.have.mod;
                        }).to.throw(Error);
                    });

                    it('elem', function() {
                        expect(function() {
                            expect(DOMElement('menu__item')).to.have.mod;
                        }).to.throw(Error);
                    });
                });

                describe('negatives', function() {
                    it('simple', function() {
                        expect(function() {
                            expect(DOMElement('sidebar sidebar_color_dark')).to.not.have.mod;
                        }).to.throw(Error);
                    });

                    it('boolean', function() {
                        expect(function() {
                            expect(DOMElement('menu menu_visible')).to.not.have.mod;
                        }).to.throw(Error);
                    });

                    it('boolean explicit', function() {
                        expect(function() {
                            expect(DOMElement('menu menu_visible_true')).to.not.have.mod;
                        }).to.throw(Error);
                    });

                    it('elem', function() {
                        expect(function() {
                            expect(DOMElement('menu__item menu__item_size_big')).to.not.have.mod;
                        }).to.throw(Error);
                    });
                });
            });
        });

        describe('method', function() {
            describe('passes', function() {
                describe('positives', function() {
                    it('simple', function() {
                        expect(DOMElement('sidebar sidebar_color_dark')).to.have.mod({
                            color: 'dark'
                        });
                    });

                    it('boolean', function() {
                        expect(DOMElement('menu menu_visible')).to.have.mod({
                            visible: true
                        });
                    });

                    it('boolean explicit', function() {
                        expect(DOMElement('menu menu_visible_true')).to.have.mod({
                            visible: true
                        });
                    });

                    it('elem', function() {
                        expect(DOMElement('menu__item menu__item_size_big')).to.have.mod({
                            size: 'big'
                        });
                    });
                });

                describe('negatives', function() {
                    it('simple', function() {
                        expect(DOMElement('sidebar sidebar_color_white')).to.not.have.mod({
                            color: 'dark'
                        });
                    });

                    it('boolean', function() {
                        expect(DOMElement('menu menu_hidden')).to.not.have.mod({
                            visible: true
                        });
                    });

                    it('boolean explicit', function() {
                        expect(DOMElement('menu menu_visible_false')).to.not.have.mod({
                            visible: true
                        });
                    });

                    it('elem', function() {
                        expect(DOMElement('menu__item menu__item_size_small')).to.not.have.mod({
                            size: 'big'
                        });
                    });
                });
            });

            describe('throws error', function() {
                describe('positives', function() {
                    it('simple', function() {
                        expect(function() {
                            expect(DOMElement('sidebar sidebar_color_white')).to.have.mod({
                                color: 'dark'
                            });
                        }).to.throw(Error);
                    });

                    it('boolean', function() {
                        expect(function() {
                            expect(DOMElement('menu menu_hidden')).to.have.mod({
                                visible: true
                            });
                        }).to.throw(Error);
                    });

                    it('boolean explicit', function() {
                        expect(function() {
                            expect(DOMElement('menu menu_visible_false')).to.have.mod({
                                visible: true
                            });
                        }).to.throw(Error);
                    });

                    it('elem', function() {
                        expect(function() {
                            expect(DOMElement('menu__item menu__item_size_small')).to.have.mod({
                                size: 'big'
                            });
                        }).to.throw(Error);
                    });
                });

                describe('negatives', function() {
                    it('simple', function() {
                        expect(function() {
                            expect(DOMElement('sidebar sidebar_color_dark')).to.not.have.mod({
                                color: 'dark'
                            });
                        }).to.throw(Error);
                    });

                    it('boolean', function() {
                        expect(function() {
                            expect(DOMElement('menu menu_visible')).to.not.have.mod({
                                visible: true
                            });
                        }).to.throw(Error);
                    });

                    it('boolean explicit', function() {
                        expect(function() {
                            expect(DOMElement('menu menu_visible_true')).to.not.have.mod({
                                visible: true
                            });
                        }).to.throw(Error);
                    });

                    it('elem', function() {
                        expect(function() {
                            expect(DOMElement('menu__item menu__item_size_big')).to.not.have.mod({
                                size: 'big'
                            });
                        }).to.throw(Error);
                    });
                });
            });
        });
    });
});
