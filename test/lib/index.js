import { expect } from 'chai';
import chaiBEM from '~/lib';

describe('chaiBEM factory', function() {
    it('exists', function() {
        expect(chaiBEM).to.exist;
    });

    it('is a function', function() {
        expect(chaiBEM).to.be.a.function;
    });

    it('returns a function', function() {
        expect(chaiBEM()).to.be.a.function;
    });
});
