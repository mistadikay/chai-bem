import { expect } from 'chai';
import {
    prepareClassName,
    isClassName,
    getEntitiesFromBEMJSON
} from '~/lib/utils';

describe('utils', function() {
    describe('exists', function() {
        it('prepareClassName', function() {
            expect(prepareClassName).to.exist;
        });

        it('isClassName', function() {
            expect(isClassName).to.exist;
        });

        it('getEntitiesFromBEMJSON', function() {
            expect(getEntitiesFromBEMJSON).to.exist;
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

        it('empty', function() {
            expect(
                prepareClassName('')
            ).to.include('');
        });
    });

    describe('isClassName', function() {
        it('string', function() {
            expect(isClassName('input')).to.be.true;
        });

        it('number', function() {
            expect(isClassName(1)).to.be.false;
        });
    });
});
