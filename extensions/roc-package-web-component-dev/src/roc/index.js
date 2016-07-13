import {
    isArray,
    isInteger,
    isPath,
    isString,
} from 'roc/validators';
import { lazyFunctionRequire } from 'roc';

import config from '../config/roc.config.js';
import meta from '../config/roc.config.meta.js';

const lazyRequire = lazyFunctionRequire(require);

export default {
    config,
    meta,
    actions: [{
        description: 'Adds support for component builds.',
        hook: 'build-webpack',
        action: lazyRequire('../webpack'),
    }],
    hooks: {
        'server-started': {
            description: 'Runs when the dev server has started.',
            arguments: [{
                name: 'port',
                validation: isInteger,
                description: 'The port that the server has started on.',
            }, {
                name: 'path',
                validation: isPath,
                description: 'The path that the server has started on.',
            }],
        },

        'run-dev-command': {
            description: 'Use to add things that should react to the dev command being called, will start dev server',
            arguments: [{
                name: 'targets',
                validation: isArray(isString),
                description: 'Will always be `["web"]`.',
            }],
        },
    },
    packages: [
        require.resolve('roc-package-webpack-web-dev'),
        require.resolve('roc-package-module-dev'),
        require.resolve('roc-package-web-component'),
    ],
    plugins: [
        require.resolve('roc-plugin-browsersync'),
        require.resolve('roc-plugin-style-css'),
    ],
    commands: {
        development: {
            dev: {
                override: 'roc-abstract-package-base-dev',
                command: lazyRequire('../commands/dev'),
                arguments: [],
                settings: ['build', 'dev'],
                /* eslint-disable max-len */
                help: `
                Will start a demo server that will load the component.

                By default an internal template will be used but it can easily be changed. Important to note when changing the template is that http://mozilla.github.io/nunjucks/ is used.

                Two template variables is available:
                \`\`\`
                name   The name of the project, can be used to display <title> and run a JavaScript function.
                bundlePath    The bundle path, used to add the script to the template.
                \`\`\``,
                /* eslint-enable max-len */
            },
            build: {
                override: 'roc-abstract-package-base-dev',
                settings: ['build'],
                arguments: [{
                    name: 'targets',
                    validation: isArray(/^web$|^es5$|^es6$/),
                    description: 'For what targets the project should be built for, overrides the settings ' +
                        'if provided.',
                }],
            },
        },
    },
};
