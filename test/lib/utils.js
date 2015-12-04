import { expect } from 'chai';
import {
    prepareClassName,
    isClassName,
    isDOMElement
} from '~/lib/utils';

describe('utils', function() {
    describe('exists', function() {
        it('prepareClassName', function() {
            expect(prepareClassName).to.exist;
        });

        it('isClassName', function() {
            expect(isClassName).to.exist;
        });

        it('isDOMElement', function() {
            expect(isDOMElement).to.exist;
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

    describe('isClassName', function() {
        it('string', function() {
            expect(isClassName('input')).to.be.true;
        });

        it('number', function() {
            expect(isClassName(1)).to.be.false;
        });
    });

    describe('isDOMElement', function() {
        it('string', function() {
            expect(isDOMElement('input')).to.be.false;
        });

        it('plain object', function() {
            expect(isDOMElement({})).to.be.false;
        });

        it('nodeType', function() {
            expect(isDOMElement(document.createElement('div'))).to.be.true;
            expect(isDOMElement({ nodeType: 0 })).to.be.false;
        });
    });
});
