import chai, { expect } from 'chai';
import chaiBEM from '~/lib';

chai.use(chaiBEM);

describe('index', () => {
    it('exists', () => {
        expect(chaiBEM).to.exist;
    });

    describe('block', () => {
        describe('passes', () => {
            it('simple', () => {
                expect('input').to.be.a.block('input');
            });

            it('not first', () => {
                expect('input_focused input').to.be.a.block('input');
            });
        });

        describe('throws error', () => {
            it('simple', () => {
                const assert = function() {
                    expect('input_focused').to.be.a.block('input');
                };

                expect(assert).to.throw(Error);
            });

            it('nonsense', () => {
                const assert = function() {
                    expect('l;ks9d').to.be.a.block('input');
                };

                expect(assert).to.throw(Error);
            });
        });
    });

    describe('elem', () => {
        describe('passes', () => {
            it('simple', () => {
                expect('input input__control').to.be.an.elem({
                    block: 'input',
                    elem: 'control'
                });
            });

            it('within a mix', () => {
                expect('input input__control sidebar__input').to.be.an.elem({
                    block: 'sidebar',
                    elem: 'input'
                });
            });
        });

        describe('throws error', () => {
            it('simple', () => {
                const assert = function() {
                    expect('input input__icon').to.be.an.elem({
                        block: 'input',
                        elem: 'control'
                    });
                };

                expect(assert).to.throw(Error);
            });

            it('nonsense', () => {
                const assert = function() {
                    expect('sidebar_input asdfkj9').to.be.an.elem({
                        block: 'sidebar',
                        elem: 'input'
                    });
                };

                expect(assert).to.throw(Error);
            });
        });
    });
});
