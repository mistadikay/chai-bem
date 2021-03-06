import path from 'path';

export default {
    colors: true,
    files: [
        './index.js'
    ],
    preprocessors: {
        './index.js': 'webpack'
    },
    frameworks: [ 'mocha' ],
    webpack: {
        cache: true,
        resolve: {
            alias: {
                '~': path.resolve('./')
            }
        },
        module: {
            preLoaders: [
                {
                    test: /\.js$/,
                    exclude: [
                        path.resolve('lib/'),
                        path.resolve('node_modules/')
                    ],
                    loader: 'babel'
                },
                {
                    test: /\.js$/,
                    include: path.resolve('lib/'),
                    loader: 'isparta'
                }
            ]
        }
    },
    webpackMiddleware: {
        noInfo: true,
        quiet: true
    },
    coverageReporter: {
        dir: '../coverage',
        reporters: [
            { type: 'lcovonly', subdir: '.' }
        ]
    },
    browserNoActivityTimeout: 60 * 1000, // default 10 * 1000
    browserDisconnectTimeout: 10 * 1000, // default 2 * 1000
    browserDisconnectTolerance: 2, // default 0
    captureTimeout: 2 * 60 * 1000 // default 1 * 60 * 1000
};
