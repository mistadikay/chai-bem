import chai, { expect } from 'chai';
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

    describe('options', function() {
        before(function() {
            chai.use(chaiBEM({
                elem: '~~',
                mod: '_-_',
                entityHook(entity) {
                    if (Array.isArray(entity)) {
                        return entity[0];
                    }

                    return entity;
                }
            }));
        });

        it('understands BEM naming options', function() {
            expect('tabs~~title').to.be.an.elem({
                block: 'tabs',
                elem: 'title'
            });
            expect('tabs_-_mod_-_value').to.have.mods({
                mod: 'value'
            });
        });

        it('understands entityHook option', function() {
            expect([ 'tabs' ]).to.be.a.block;
            expect([ 'tabs' ]).to.be.a.block('tabs');
            expect([ 'tabs~~title' ]).to.be.an.elem;
            expect([ 'tabs~~title' ]).to.be.an.elem({
                block: 'tabs',
                elem: 'title'
            });
            expect([ 'tabs_-_mod_-_value' ]).to.have.mods({
                mod: 'value'
            });
            expect([ 'tabs~~title' ]).to.be.bem({
                block: 'tabs',
                elem: 'title'
            });
        });

        after(function() {
            chai.use(chaiBEM());
        });
    });
});
