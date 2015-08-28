import { expect } from 'chai';
import { prepareClassName } from '~/lib/utils';

describe('index', () => {
    it('exists', () => {
        expect(prepareClassName).to.exist;
    });

    describe('block', () => {
        it('simple', () => {
            expect(
                prepareClassName('input input_focused')
            ).to.include('input');
        });

        it('with lots of spaces', () => {
            expect(
                prepareClassName('  input  input_focused    ')
            ).to.include('input');
        });

        it('not first', () => {
            expect(
                prepareClassName('input_focused  input  ')
            ).to.include('input');
        });
    });
});
