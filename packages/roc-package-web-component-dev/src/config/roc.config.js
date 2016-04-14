import dev from '../commands/dev';

const config = {
    settings: {
        build: {
            targets: ['web', 'es5', 'es6'],
            input: {
                web: 'src/index.js',
                es5: 'src',
                es6: 'src'
            },
            output: {
                web: 'build/web',
                es5: 'build/es5',
                es6: 'build/es6'
            },
            libraryTarget: 'umd',
            name: '',
            style: {
                name: '[name].css'
            }
        },

        dev: {
            template: {
                path: ''
            },
            demoPort: 3002,
            serve: []
        }
    },

    commands: {
        dev
    }
};

/**
 * Exports the default `roc.config.js`.
 *
 * @return {object} The default `roc.config.js`.
 */
export default config;
