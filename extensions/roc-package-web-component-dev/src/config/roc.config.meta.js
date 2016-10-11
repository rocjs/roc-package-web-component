/* eslint-disable max-len */
import {
    isPath,
    isArray,
    isString,
    isInteger,
    isObject,
    required,
    notEmpty,
} from 'roc/validators';

export default {
    settings: {
        build: {
            name: {
                override: 'roc-package-webpack-dev',
                validator: required(notEmpty(isString)),
            },
            targets: {
                override: 'roc-abstract-package-base-dev',
                validator: required(notEmpty(isArray(/^web$|^cjs$|^esm$/i))),
            },
            input: {
                __meta: {
                    override: 'roc-abstract-package-base-dev',
                },
                web: {
                    description: 'What file to use as entry file.',
                    validator: required(notEmpty(isPath)),
                },
                cjs: {
                    description: 'What directory to build from.',
                    validator: required(notEmpty(isPath)),
                },
                esm: {
                    description: 'What directory to build from.',
                    validator: required(notEmpty(isPath)),
                },
            },
            output: {
                web: {
                    description: 'The output directory for the Web build.',
                    validator: required(notEmpty(isPath)),
                },
            },
            libraryTarget: {
                description: 'Which format to export the component as.',
                validator: required(notEmpty(/^var$|^this$|^commonjs$|^commonjs2$|^amd$|^umd$/i)),
            },
        },
        dev: {
            template: {
                path: {
                    description: 'Path to a directory where the template can be found, can be both relative based on ' +
                        'current working directory or absolute. Uses nunjucks and two variables are available, ' +
                        '"name" and "bundlePath".',
                    validator: notEmpty(isPath),
                },
                variables: {
                    description: 'An object representing variables to expose to the dev template. Will be merged with the default template variables.',
                    validator: required(isObject()),
                },
            },
            demoPort: {
                description: 'The port that the demo server starts on.',
                validator: required(isInteger),
            },
            serve: {
                description: 'What folders that the development server should expose.',
                validator: required(isArray(isString)),
            },
        },
    },
};
