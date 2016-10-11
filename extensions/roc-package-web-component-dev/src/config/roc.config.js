export default {
    settings: {
        build: {
            targets: ['web', 'cjs', 'esm'],
            input: {
                web: 'src/index.js',
                cjs: 'src',
                esm: 'src',
            },
            output: {
                web: 'build/web',
                cjs: 'build/cjs',
                esm: 'build/esm',
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
                variables: {},
            },
            demoPort: 3002,
            serve: [],
        },
    },
};
