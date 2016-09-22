export default {
    settings: {
        build: {
            targets: ['web', 'es5', 'es6'],
            input: {
                web: 'src/index.js',
                es5: 'src',
                es6: 'src',
            },
            output: {
                web: 'build/web',
                es5: 'build/es5',
                es6: 'build/es6',
            },
            libraryTarget: 'umd',
            name: undefined,
            style: {
                name: '[name].css',
            },
        },

        dev: {
            template: {
                path: undefined,
            },
            demoPort: 3002,
            serve: [],
        },
    },
};
