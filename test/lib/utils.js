import { expect } from 'chai';
import {
    prepareClassName,
    paramTypeAssert,
    targetTypeAssert
} from '~/lib/utils';

describe('utils', () => {
    describe('exists', () => {
        it('prepareClassName', () => {
            expect(prepareClassName).to.exist;
        });
        it('paramTypeAssert', () => {
            expect(paramTypeAssert).to.exist;
        });
        it('targetTypeAssert', () => {
            expect(targetTypeAssert).to.exist;
        });
    });

    describe('prepareClassName', () => {
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

    describe('paramTypeAssert', () => {
        it.skip('TODO', () => {

        });
    });

    describe('targetTypeAssert', () => {
        it.skip('TODO', () => {

        });
    });
});
