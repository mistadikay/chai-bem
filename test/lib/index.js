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

        it('with lots of spaces', () => {
            expect('  input   input_focused      ').to.be.a.block('input');
        });

        it('not first', () => {
            expect('  input_focused   input   ').to.be.a.block('input');
        });
    });
});
