// setup
import chai from 'chai';
import chaiBEM from '~/lib';

chai.use(chaiBEM());

// https://github.com/webpack/karma-webpack#alternative-usage
const tests = require.context('./lib/', true, /\.js$/);
const sources = require.context('../lib/', true, /\.js$/);

tests.keys().forEach(tests);
sources.keys().forEach(sources);
