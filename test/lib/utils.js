import { expect } from 'chai';
import {
    prepareClassName
} from '~/lib/utils';

describe('utils', function() {
    describe('exists', function() {
        it('prepareClassName', function() {
            expect(prepareClassName).to.exist;
        });
    });

    describe('prepareClassName', function() {
        it('simple', function() {
            expect(
                prepareClassName('input input_focused')
            ).to.include('input');
        });

        it('with lots of spaces', function() {
            expect(
                prepareClassName('  input  input_focused    ')
            ).to.include('input');
        });

        it('not first', function() {
            expect(
                prepareClassName('input_focused  input  ')
            ).to.include('input');
        });
    });
});
