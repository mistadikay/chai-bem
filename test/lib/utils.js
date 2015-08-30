import chai, { expect } from 'chai';
import {
    prepareClassName,
    paramTypeAssert,
    targetTypeAssert
} from '~/lib/utils';

describe('utils', function() {
    describe('exists', function() {
        it('prepareClassName', function() {
            expect(prepareClassName).to.exist;
        });
        it('paramTypeAssert', function() {
            expect(paramTypeAssert).to.exist;
        });
        it('targetTypeAssert', function() {
            expect(targetTypeAssert).to.exist;
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

    describe('paramTypeAssert', function() {
        it('validates correct input', function() {
            const assert = function() {
                chai::paramTypeAssert('input', 'string');
            };

            expect(assert).to.not.throw(Error);
        });

        it('validates incorrect input', function() {
            const assert = function() {
                chai::paramTypeAssert('input', 'object');
            };

            expect(assert).to.throw(Error);
        });
    });

    describe('targetTypeAssert', function() {
        it('validates correct input', function() {
            const assert = function() {
                chai::targetTypeAssert('input', 'string');
            };

            expect(assert).to.not.throw(Error);
        });

        it('validates incorrect input', function() {
            const assert = function() {
                chai::paramTypeAssert('input', 'object');
            };

            expect(assert).to.throw(Error);
        });
    });
});
