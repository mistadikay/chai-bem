import chai, { expect } from 'chai';
import chaiBEM from '~/lib';

chai.use(chaiBEM);

describe('index', () => {
    it('exists', () => {
        expect(chaiBEM).to.exist;
    });

    describe('block', () => {
        it('simple', () => {
            expect('input').to.be.a.block('input');
        });

        it('not first', () => {
            expect('input_focused input').to.be.a.block('input');
        });

        it.skip('TODO throw error tests', () => {

        });
    });

    describe('elem', () => {
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

        it.skip('TODO throw error tests', () => {

        });
    });
});
