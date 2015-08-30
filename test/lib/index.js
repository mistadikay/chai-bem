import chai, { expect } from 'chai';
import chaiBEM from '~/lib';

chai.use(chaiBEM);

describe('index', function() {
    it('exists', function() {
        expect(chaiBEM).to.exist;
    });

    describe('block', function() {
        describe('passes', function() {
            describe('positives', function() {
                it('simple', function() {
                    expect('input').to.be.a.block('input');
                });

                it('with mod', function() {
                    expect('input_focused input').to.be.a.block('input');
                });
            });

            describe('negatives', function() {
                it('simple', function() {
                    expect('button').to.not.be.a.block('input');
                });

                it('with mod', function() {
                    expect('button_focused button').to.not.be.a.block('input');
                });
            });
        });

        describe('throws error', function() {
            describe('positives', function() {
                it('simple', function() {
                    const assert = function() {
                        expect('input_focused').to.be.a.block('input');
                    };

                    expect(assert).to.throw(Error);
                });

                it('nonsense', function() {
                    const assert = function() {
                        expect('l;ks9d').to.be.a.block('input');
                    };

                    expect(assert).to.throw(Error);
                });
            });

            describe('negatives', function() {
                it('simple', function() {
                    const assert = function() {
                        expect('input').to.not.be.a.block('input');
                    };

                    expect(assert).to.throw(Error);
                });

                it('with mod', function() {
                    const assert = function() {
                        expect('button_focused button').to.not.be.a.block('button');
                    };

                    expect(assert).to.throw(Error);
                });
            });
        });
    });

    describe('elem', function() {
        describe('passes', function() {
            describe('positives', function() {
                it('simple', function() {
                    expect('input__control').to.be.an.elem({
                        block: 'input',
                        elem: 'control'
                    });
                });

                it('within a mix', function() {
                    expect('input sidebar__input').to.be.an.elem({
                        block: 'sidebar',
                        elem: 'input'
                    });
                });
            });

            describe('negatives', function() {
                it('simple', function() {
                    expect('input__control').to.not.be.an.elem({
                        block: 'input',
                        elem: 'icon'
                    });
                });

                it('within a mix', function() {
                    expect('input sidebar__input').to.not.be.an.elem({
                        block: 'content',
                        elem: 'input'
                    });
                });
            });
        });

        describe('throws error', function() {
            describe('positives', function() {
                it('simple', function() {
                    const assert = function() {
                        expect('input__icon').to.be.an.elem({
                            block: 'input',
                            elem: 'control'
                        });
                    };

                    expect(assert).to.throw(Error);
                });

                it('nonsense', function() {
                    const assert = function() {
                        expect('sidebar_input asdfkj9').to.be.an.elem({
                            block: 'sidebar',
                            elem: 'input'
                        });
                    };

                    expect(assert).to.throw(Error);
                });
            });

            describe('negatives', function() {
                it('simple', function() {
                    const assert = function() {
                        expect('input__icon').to.not.be.an.elem({
                            block: 'input',
                            elem: 'icon'
                        });
                    };

                    expect(assert).to.throw(Error);
                });

                it('with mod', function() {
                    const assert = function() {
                        expect('sidebar__input sidebar').to.not.be.an.elem({
                            block: 'sidebar',
                            elem: 'input'
                        });
                    };

                    expect(assert).to.throw(Error);
                });
            });
        });
    });
});
