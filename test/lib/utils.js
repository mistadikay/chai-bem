import { expect } from 'chai';
import {
    prepareClassName,
    isValidEntity,
    getEntitiesFromBEMJSON
} from '~/lib/utils';

describe('utils', function() {
    describe('exists', function() {
        it('prepareClassName', function() {
            expect(prepareClassName).to.exist;
        });

        it('isClassName', function() {
            expect(isValidEntity).to.exist;
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

    describe('isValidEntity', function() {
        it('string', function() {
            expect(isValidEntity('input')).to.be.true;
        });

        it('dom element', function() {
            expect(isValidEntity(document.createElement('div'))).to.be.true;
        });

        it('number', function() {
            expect(isValidEntity(1)).to.be.false;
        });
    });
});
