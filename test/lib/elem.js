import { expect } from 'chai';
import { runTests } from '../helpers';

describe('elem', function() {
    runTests(function(DOMElement) {
        describe('property', function() {
            describe('passes', function() {
                describe('positives', function() {
                    it('simple', function() {
                        expect(DOMElement('input__control')).to.be.an.elem;
                    });

                    it('within a mix', function() {
                        expect(DOMElement('input sidebar__input')).to.be.an.elem;
                    });
                });

                describe('negatives', function() {
                    it('simple', function() {
                        expect(DOMElement('input')).to.not.be.an.elem;
                    });
                });
            });

            describe.skip('throws error', function() {
                describe('positives', function() {
                    it('simple', function() {
                        expect(function() {
                            expect(DOMElement('input')).to.be.an.elem;
                        }).to.throw(Error);
                    });

                    it('nonsense', function() {
                        expect(function() {
                            expect(DOMElement('sidebar_input')).to.be.an.elem;
                        }).to.throw(Error);
                    });
                });

                describe('negatives', function() {
                    it('simple', function() {
                        expect(function() {
                            expect(DOMElement('input__icon')).to.not.be.an.elem;
                        }).to.throw(Error);
                    });

                    it('with mod', function() {
                        expect(function() {
                            expect(DOMElement('sidebar__input')).to.not.be.an.elem;
                        }).to.throw(Error);
                    });
                });
            });
        });

        describe('method', function() {
            describe('passes', function() {
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
                });
            });

            describe('throws error', function() {
                describe('positives', function() {
                    it('simple', function() {
                        expect(function() {
                            expect(DOMElement('input__icon')).to.be.an.elem({
                                block: 'input',
                                elem: 'control'
                            });
                        }).to.throw(Error);
                    });

                    it('nonsense', function() {
                        expect(function() {
                            expect(DOMElement('sidebar_input')).to.be.an.elem({
                                block: 'sidebar',
                                elem: 'input'
                            });
                        }).to.throw(Error);
                    });
                });

                describe('negatives', function() {
                    it('simple', function() {
                        expect(function() {
                            expect(DOMElement('input__icon')).to.not.be.an.elem({
                                block: 'input',
                                elem: 'icon'
                            });
                        }).to.throw(Error);
                    });

                    it('with mod', function() {
                        expect(function() {
                            expect(DOMElement('sidebar__input')).to.not.be.an.elem({
                                block: 'sidebar',
                                elem: 'input'
                            });
                        }).to.throw(Error);
                    });
                });
            });
        });
    });
});
