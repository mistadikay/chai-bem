import chai, { expect } from 'chai';
import chaiBEM from '~/lib';

chai.use(chaiBEM);

describe('index', function() {
    it('exists', function() {
        expect(chaiBEM).to.exist;
    });

    describe('block', function() {
        describe.skip('property', function() {
            describe('passes', function() {
                describe('positives', function() {
                    it('simple', function() {
                        expect('input').to.be.a.block;
                    });

                    it('with mod', function() {
                        expect('input_focused input').to.be.a.block;
                    });
                });

                describe('negatives', function() {
                    it('element', function() {
                        expect('button__icon_type_search').to.not.be.a.block;
                    });

                    it('with mod', function() {
                        expect('button_big').to.not.be.a.block;
                    });
                });
            });

            describe('throws error', function() {
                describe('positives', function() {
                    it('simple', function() {
                        const assert = function() {
                            expect('input_focused').to.be.a.block;
                        };

                        expect(assert).to.throw(Error);
                    });

                    it('nonsense', function() {
                        const assert = function() {
                            expect('l;ks9d').to.be.a.block;
                        };

                        expect(assert).to.throw(Error);
                    });
                });

                describe('negatives', function() {
                    it('simple', function() {
                        const assert = function() {
                            expect('input').to.not.be.a.block;
                        };

                        expect(assert).to.throw(Error);
                    });

                    it('with mod', function() {
                        const assert = function() {
                            expect('button_focused button').to.not.be.a.block;
                        };

                        expect(assert).to.throw(Error);
                    });
                });
            });
        });

        describe('method', function() {
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
    });

    describe('elem', function() {
        describe.skip('property', function() {
            describe('passes', function() {
                describe('positives', function() {
                    it('simple', function() {
                        expect('input__control').to.be.an.elem;
                    });

                    it('within a mix', function() {
                        expect('input sidebar__input').to.be.an.elem;
                    });
                });

                describe('negatives', function() {
                    it('simple', function() {
                        expect('input').to.not.be.an.elem;
                    });
                });
            });

            describe('throws error', function() {
                describe('positives', function() {
                    it('simple', function() {
                        const assert = function() {
                            expect('input').to.be.an.elem;
                        };

                        expect(assert).to.throw(Error);
                    });

                    it('nonsense', function() {
                        const assert = function() {
                            expect('sidebar_input').to.be.an.elem;
                        };

                        expect(assert).to.throw(Error);
                    });
                });

                describe('negatives', function() {
                    it('simple', function() {
                        const assert = function() {
                            expect('input__icon').to.not.be.an.elem;
                        };

                        expect(assert).to.throw(Error);
                    });

                    it('with mod', function() {
                        const assert = function() {
                            expect('sidebar__input').to.not.be.an.elem;
                        };

                        expect(assert).to.throw(Error);
                    });
                });
            });
        });

        describe('method', function() {
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
                            expect('sidebar_input').to.be.an.elem({
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
                            expect('sidebar__input').to.not.be.an.elem({
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

    describe.skip('mods', function() {
        describe('property', function() {
            describe('passes', function() {
                describe('positives', function() {
                    it('simple', function() {
                        expect('sidebar sidebar_color_dark').to.have.mod;
                    });

                    it('boolean', function() {
                        expect('menu menu_visible').to.have.mod;
                    });

                    it('boolean explicit', function() {
                        expect('menu menu_visible_true').to.have.mod;
                    });

                    it('elem', function() {
                        expect('menu__item menu__item_size_big').to.have.mod;
                    });
                });

                describe('negatives', function() {
                    it('simple', function() {
                        expect('sidebar').to.not.have.mod;
                    });

                    it('within a mix', function() {
                        expect('menu sidebar__menu').to.not.have.mod;
                    });

                    it('elem', function() {
                        expect('menu__item').to.not.have.mod;
                    });
                });
            });

            describe('throws error', function() {
                describe('positives', function() {
                    it('simple', function() {
                        const assert = function() {
                            expect('sidebar').to.have.mod;
                        };

                        expect(assert).to.throw(Error);
                    });

                    it('within a mix', function() {
                        const assert = function() {
                            expect('menu sidebar__menu').to.have.mod;
                        };

                        expect(assert).to.throw(Error);
                    });

                    it('elem', function() {
                        const assert = function() {
                            expect('menu__item').to.have.mod;
                        };

                        expect(assert).to.throw(Error);
                    });
                });

                describe('negatives', function() {
                    it('simple', function() {
                        const assert = function() {
                            expect('sidebar sidebar_color_dark').to.not.have.mod;
                        };

                        expect(assert).to.throw(Error);
                    });

                    it('boolean', function() {
                        const assert = function() {
                            expect('menu menu_visible').to.not.have.mod;
                        };

                        expect(assert).to.throw(Error);
                    });

                    it('boolean explicit', function() {
                        const assert = function() {
                            expect('menu menu_visible_true').to.not.have.mod;
                        };

                        expect(assert).to.throw(Error);
                    });

                    it('elem', function() {
                        const assert = function() {
                            expect('menu__item menu__item_size_big').to.not.have.mod;
                        };

                        expect(assert).to.throw(Error);
                    });
                });
            });
        });

        describe('method', function() {
            describe('passes', function() {
                describe('positives', function() {
                    it('simple', function() {
                        expect('sidebar sidebar_color_dark').to.have.mod({
                            color: 'dark'
                        });
                    });

                    it('boolean', function() {
                        expect('menu menu_visible').to.have.mod({
                            visible: true
                        });
                    });

                    it('boolean explicit', function() {
                        expect('menu menu_visible_true').to.have.mod({
                            visible: true
                        });
                    });

                    it('elem', function() {
                        expect('menu__item menu__item_size_big').to.have.mod({
                            size: 'big'
                        });
                    });
                });

                describe('negatives', function() {
                    it('simple', function() {
                        expect('sidebar sidebar_color_white').to.not.have.mod({
                            color: 'dark'
                        });
                    });

                    it('boolean', function() {
                        expect('menu menu_hidden').to.not.have.mod({
                            visible: true
                        });
                    });

                    it('boolean explicit', function() {
                        expect('menu menu_visible_false').to.not.have.mod({
                            visible: true
                        });
                    });

                    it('elem', function() {
                        expect('menu__item menu__item_size_small').to.not.have.mod({
                            size: 'big'
                        });
                    });
                });
            });

            describe('throws error', function() {
                describe('positives', function() {
                    it('simple', function() {
                        const assert = function() {
                            expect('sidebar sidebar_color_white').to.have.mod({
                                color: 'dark'
                            });
                        };

                        expect(assert).to.throw(Error);
                    });

                    it('boolean', function() {
                        const assert = function() {
                            expect('menu menu_hidden').to.have.mod({
                                visible: true
                            });
                        };

                        expect(assert).to.throw(Error);
                    });

                    it('boolean explicit', function() {
                        const assert = function() {
                            expect('menu menu_visible_false').to.have.mod({
                                visible: true
                            });
                        };

                        expect(assert).to.throw(Error);
                    });

                    it('elem', function() {
                        const assert = function() {
                            expect('menu__item menu__item_size_small').to.have.mod({
                                size: 'big'
                            });
                        };

                        expect(assert).to.throw(Error);
                    });
                });

                describe('negatives', function() {
                    it('simple', function() {
                        const assert = function() {
                            expect('sidebar sidebar_color_dark').to.not.have.mod({
                                color: 'dark'
                            });
                        };

                        expect(assert).to.throw(Error);
                    });

                    it('boolean', function() {
                        const assert = function() {
                            expect('menu menu_visible').to.not.have.mod({
                                visible: true
                            });
                        };

                        expect(assert).to.throw(Error);
                    });

                    it('boolean explicit', function() {
                        const assert = function() {
                            expect('menu menu_visible_true').to.not.have.mod({
                                visible: true
                            });
                        };

                        expect(assert).to.throw(Error);
                    });

                    it('elem', function() {
                        const assert = function() {
                            expect('menu__item menu__item_size_big').to.not.have.mod({
                                size: 'big'
                            });
                        };

                        expect(assert).to.throw(Error);
                    });
                });
            });
        });
    });
});
